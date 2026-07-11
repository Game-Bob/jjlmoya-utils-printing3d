import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'otimizador-de-perimetros-e-paredes',
  title: 'Otimizador de Perímetros e Paredes',
  description: 'Calcule o número exato de perímetros e uma largura de linha segura para que a espessura de parede impressa corresponda ao modelo CAD sem lacunas internas.',
  ui: {
    controlsAriaLabel: 'Entradas do otimizador de perímetros de parede',
    resultsAriaLabel: 'Resultados do otimizador de perímetros de parede',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    tooltipLabel: 'Mais informações',
    nozzleLabel: 'Diâmetro do bico',
    nozzleHelp: 'Diâmetro físico do orifício do bico. A largura de linha segura é limitada a 80-120% deste valor.',
    lineWidthLabel: 'Largura da linha',
    lineWidthHelp: 'Largura de extrusão do fatiador para paredes externas e internas.',
    cadThicknessLabel: 'Espessura da parede CAD',
    cadThicknessHelp: 'Espessura de parede projetada que deve ser reproduzida por perímetros inteiros.',
    commonNozzlesLabel: 'Tamanhos de bico comuns',
    infillStrategyLabel: 'Estratégia de preenchimento de parede',
    perimeterFirstLabel: 'Perímetros primeiro',
    solidInfillFallbackLabel: 'Preenchimento sólido alternativo',
    solidInfillTip: 'Dica: se preferir não adicionar mais perímetros, use preenchimento sólido ou gap fill confiável em paredes finas para que o fatiador não deixe vazios internos.',
    copySolidInfillNote: 'Se mantiver menos perímetros, use preenchimento sólido ou gap fill verificado para interiores de paredes finas.',
    visualLabel: 'Corte transversal mostrando perímetros empacotados dentro da espessura de parede CAD',
    cadEnvelopeLabel: 'Envelope da parede CAD',
    lineLabel: 'Linha de extrusão',
    recommendedPerimetersLabel: 'Perímetros recomendados',
    realThicknessLabel: 'Espessura real',
    residualLabel: 'Erro residual',
    verdictLabel: 'Veredito de precisão',
    exactLabel: 'Exato',
    adjustLabel: 'Requer ajuste de largura de linha',
    impossibleLabel: 'Impossível com este bico',
    adjustedWidthLabel: 'Largura de linha ajustada',
    noAdjustmentLabel: 'Nenhum ajuste',
    slicerBlockLabel: 'Configuração do fatiador',
    perimetersUnitLabel: 'perímetros',
    copyLabel: 'Copiar configurações',
    copiedLabel: 'Bloco do fatiador copiado.',
    safeRangeLabel: 'Faixa segura de largura de linha',
    compareLabel: 'Opções de perímetros mais próximas',
    perimetersColumn: 'Perímetros',
    lineWidthColumn: 'Largura da linha',
    realThicknessColumn: 'Espessura real',
    errorColumn: 'Erro',
    messageExact: 'A largura de linha selecionada está dentro de 0,05 mm da parede CAD. Esta é uma boa parede apenas com perímetros.',
    messageAdjust: 'A largura atual deixa uma lacuna mensurável. Use a largura de linha ajustada para fechar a parede exatamente com perímetros inteiros.',
    messageTooThin: 'A parede CAD é mais fina que o diâmetro do bico. Redesenhe a parede, use um bico menor ou aceite um recurso não estrutural de linha única.',
    messageOutsideRange: 'Nenhum ajuste na faixa segura de 80-120% do diâmetro do bico pode fechar esta parede exatamente. Redesenhe a parede CAD ou mude o tamanho do bico.',
    mmUnit: 'mm',
    inchUnit: 'pol',
  },
  seo: [
    { type: 'title', text: 'Por que a espessura da parede deve corresponder a perímetros inteiros', level: 2 },
    {
      type: 'paragraph',
      html: 'Os fatiadores FDM constroem uma parede a partir de cordões de extrusão discretos. Uma parede CAD de 1,20 mm não é uma instrução sólida contínua; ela se torna um, dois, três ou mais perímetros dependendo da largura de linha, diâmetro do bico e regras do fatiador. Se a conta não fechar, o fatiador deve escolher entre deixar uma lacuna interna estreita, inserir um caminho fino de gap fill, sobre-extrudar uma região ou alterar silenciosamente a ordem do percurso da ferramenta. Peças funcionais sofrem porque a parede que parecia sólida no CAD pode conter uma costura fraca ou um cordão inconsistente dentro da seção.',
    },
    {
      type: 'paragraph',
      html: 'A equação útil é simples: <strong>espessura real da parede = número de perímetros × largura da linha</strong>. A dificuldade é escolher valores que permaneçam imprimíveis. Uma largura de linha geralmente pode se mover um pouco abaixo ou acima do diâmetro do bico, mas não pode ser arbitrária. Este otimizador busca números inteiros de perímetros, mede o erro residual contra a espessura CAD e propõe um ajuste de largura de linha apenas quando a largura exata permanece dentro de uma faixa conservadora de 80-120% do diâmetro do bico.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'limiar de precisão usado para o veredito' },
        { value: '80-120%', label: 'faixa segura de largura de linha ao redor do diâmetro do bico' },
        { value: 'n × largura', label: 'equação central da espessura da parede' },
        { value: '2 decimais', label: 'precisão prática mínima do fatiador' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perímetros são geometria inteira',
      html: 'Um fatiador não pode imprimir 2,6 perímetros normais. Se uma parede é larga demais para duas linhas e estreita demais para três, precisa de comportamento de gap fill ou de uma dimensão CAD corrigida.',
    },
    { type: 'title', text: 'Como escolher a espessura de parede CAD para um bico de 0,4 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Um bico de 0,4 mm geralmente usa uma largura de linha em torno de 0,40-0,48 mm. Com uma largura de linha de 0,42 mm, dois perímetros produzem 0,84 mm, três perímetros produzem 1,26 mm e quatro perímetros produzem 1,68 mm. Uma parede projetada de 1,20 mm parece razoável no CAD, mas está a 0,06 mm de três perímetros de 0,42 mm. Está perto, mas não é exata. O otimizador pode sugerir 3 perímetros a 0,40 mm, o que fecha a parede perfeitamente e permanece exatamente no diâmetro do bico.',
    },
    {
      type: 'paragraph',
      html: 'Para peças mecânicas, geralmente é melhor projetar paredes como múltiplos da largura de linha pretendida em vez de forçar o fatiador a repará-las. Alvos comuns de parede CAD para um bico de 0,4 mm são cerca de 0,8 mm para cascas leves, 1,2 mm para paredes funcionais normais, 1,6 mm para invólucros mais resistentes e 2,0 mm ou mais para recursos de suporte de carga. Os valores exatos devem seguir a largura de linha do fatiador, não apenas o diâmetro nominal do bico.',
    },
    {
      type: 'table',
      headers: ['Bico', 'Faixa segura de largura de linha', 'Bons alvos de 2 paredes', 'Bons alvos de 3 paredes'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Projete a partir do perfil do fatiador para trás',
      html: 'Antes de modelar encaixes de pressão, nervuras, saliências ou paredes de invólucro, decida o bico e a largura de linha. Defina então as dimensões da parede como múltiplos limpos para que o fatiador não invente caminhos de gap fill em áreas críticas.',
    },
    { type: 'title', text: 'Limites da largura de linha: por que 80 a 120% é uma faixa segura', level: 2 },
    {
      type: 'paragraph',
      html: 'Um bico pode depositar um cordão ligeiramente mais largo que seu orifício porque o plástico é pressionado contra a camada anterior e achatado em um caminho oval. Também pode imprimir uma linha ligeiramente mais estreita, mas muito estreita pede à impressora que crie um cordão controlado com suporte lateral limitado. Ambos os extremos têm compromissos. Linhas muito largas podem sobrepressurizar o hotend, borrar cantos, esconder pequenos detalhes e reduzir a precisão dimensional. Linhas muito estreitas podem subpreencher paredes, enfraquecer a união e tornar a consistência da extrusão mais sensível ao pressure advance e ao diâmetro do filamento.',
    },
    {
      type: 'paragraph',
      html: 'A faixa de 80-120% usada aqui é intencionalmente conservadora. Muitos fatiadores permitem valores mais amplos para modos especiais, impressão em vaso ou bicos grossos, e usuários experientes podem ultrapassar esta faixa após testes. Esta ferramenta visa um planejamento confiável de paredes mecânicas, onde a recomendação deve ser segura o suficiente para ser copiada em um perfil normal sem causar sub-extrusão ou sobre-extrusão óbvia. Se uma correspondência exata exigir uma largura de linha fora da faixa, a ferramenta relata o design como impraticável em vez de fingir que o fatiador pode resolvê-lo limpidamente.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Muito estreito', description: 'O cordão pode não pressionar material suficiente na seção da parede.', points: ['Ligação entre linhas fraca', 'Lacunas visíveis', 'Paredes finas frágeis'] },
        { title: 'Faixa segura', description: 'O cordão permanece próximo ao comportamento físico do bico.', highlight: true, points: ['Extrusão previsível', 'Bom controle dimensional', 'Perfis reutilizáveis'] },
        { title: 'Muito largo', description: 'O bico pode empurrar mais plástico do que o caminho pode aceitar.', points: ['Cantos inchados', 'Cristas na superfície', 'Contrapressão mais alta'] },
      ],
    },
    {
      type: 'message',
      title: 'Seguro não significa calibrado',
      html: 'Mesmo uma largura matematicamente perfeita precisa de uma vazão calibrada. Se o multiplicador de extrusão estiver errado, a parede física ainda pode medir grossa ou fina com o paquímetro.',
    },
    { type: 'title', text: 'Diagnosticando lacunas internas na pré-visualização do fatiador', level: 2 },
    {
      type: 'paragraph',
      html: 'A maneira mais rápida de identificar uma incompatibilidade de perímetros é inspecionar a pré-visualização camada por camada. Procure por uma faixa pálida entre as paredes externa e interna, uma única linha errante de gap fill ou uma área onde o fatiador alterna entre duas e três linhas ao longo da mesma característica. Esses padrões são comuns em paredes de invólucro, saliências, clipes e nervuras finas porque a dimensão CAD é frequentemente escolhida visualmente em vez de como um múltiplo da largura de extrusão.',
    },
    {
      type: 'paragraph',
      html: 'Uma lacuna na parede nem sempre é visível no exterior da impressão. A peça pode parecer limpa enquanto o interior contém um vazio estreito que reduz a rigidez. Isso é importante para saliências de parafusos, pinos de pressão, suportes, quadros de drone, engrenagens e qualquer peça onde a carga viaje através da parede. Se a lacuna estiver entre perímetros, a parede pode rachar mais facilmente porque o caminho da carga atravessa material fracamente unido ou ausente em vez de cordões contínuos.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gap fill é um reparo, não um plano de parede',
      html: 'Fatiadores modernos podem inserir caminhos finos de gap fill, mas esses caminhos são frequentemente impressos com velocidade, fluxo e resfriamento diferentes. Para geometria de suporte de carga, um múltiplo limpo de perímetros é mais previsível.',
    },
    {
      type: 'summary',
      title: 'Lista de verificação da previsualização',
      items: [
        'Mude para a pré-visualização por tipo de linha ou recurso, não apenas a visualização de cor sólida.',
        'Inspecione as paredes em furos, nervuras, saliências e abas finas.',
        'Verifique se caminhos de gap fill aparecem em regiões estruturais.',
        'Compare a espessura da parede CAD com múltiplos inteiros da largura de linha.',
        'Use largura de linha ajustada apenas quando permanecer dentro da faixa segura do bico.',
      ],
    },
    { type: 'title', text: 'Quando o resultado é exato, requer ajuste ou é impossível', level: 2 },
    {
      type: 'paragraph',
      html: 'O veredito usa um limiar residual de 0,05 mm porque a maioria dos sistemas FDM de mesa tem variações práticas de vazão, diâmetro do filamento, expansão térmica, calibração de movimento e técnica de medição. Se as configurações atuais estiverem dentro dessa banda, a ferramenta chama o resultado de exato. Não significa que toda amostra impressa medirá perfeitamente ao mícron; significa que a geometria do fatiador em si está alinhada perto o suficiente para que o erro restante seja provavelmente de calibração ou comportamento do material, em vez de aritmética de perímetros.',
    },
    {
      type: 'paragraph',
      html: 'Requer ajuste significa que a largura de linha atual deixa um residual maior, mas o mesmo número de perímetros pode fechar a parede com uma largura segura. Por exemplo, uma parede de 1,20 mm com largura de linha de 0,42 mm dá três linhas a 1,26 mm. Ajustar para 0,40 mm faz três linhas exatamente 1,20 mm. Impossível significa que a parede é mais fina que o diâmetro do bico ou que a largura de linha exata necessária cairia fora da banda segura do bico. Nesse caso, redesenhar a parede ou mudar o tamanho do bico é melhor do que forçar o fatiador.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perímetro', definition: 'Um laço de parede gerado pelo fatiador ao redor do contorno de uma camada.' },
        { term: 'Largura de linha', definition: 'A largura comandada de um cordão extrudado, às vezes chamada de largura de extrusão.' },
        { term: 'Residual', definition: 'A diferença absoluta entre a espessura da parede CAD e a espessura produzida por perímetros inteiros.' },
        { term: 'Gap fill', definition: 'Um caminho gerado pelo fatiador para ocupar o espaço restante que os perímetros normais não preenchem limpidamente.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Ajustar largura de linha versus editar o CAD',
      items: [
        { pro: 'O ajuste da largura de linha é rápido e pode preservar o arquivo do modelo.', con: 'Afeta todas as paredes que usam aquele perfil a menos que seja escopo cuidadosamente.' },
        { pro: 'A edição CAD torna explícita a intenção de design para impressões futuras.', con: 'Leva mais tempo quando muitos recursos já estão vinculados.' },
        { pro: 'Mudar o tamanho do bico pode resgatar paredes muito finas ou muito grossas.', con: 'Altera a resolução de detalhes, o tempo de impressão e o volume de extrusão.' },
      ],
    },
    { type: 'title', text: 'Aplicando a saída no Cura, PrusaSlicer e fatiadores similares', level: 2 },
    {
      type: 'paragraph',
      html: 'O bloco de cópia contém intencionalmente apenas os dois valores que importam: número de perímetros e largura de linha. No Cura, o número de perímetros mapeia para a contagem de linhas de parede, e a largura de linha mapeia para a largura de linha de parede ou largura de linha global dependendo da estrutura do perfil. No PrusaSlicer e derivados, use perimeters para a contagem de laços e extrusion width para a largura de linha. Se o fatiador tiver larguras de perímetro externo e interno separadas, mantenha-as iguais para a parede sendo otimizada a menos que você entenda como o fatiador as combina.',
    },
    {
      type: 'paragraph',
      html: 'Após alterar as configurações do fatiador, fatie novamente e inspecione a mesma parede na pré-visualização. A pré-visualização visual deve mostrar o número esperado de cordões preenchendo o envelope CAD sem um canal estreito restante. Em seguida, imprima um pequeno corpo de prova que inclua a mesma espessura de parede e meça-o após o resfriamento. Se o corpo de prova estiver consistentemente fora mas a pré-visualização estiver correta, ajuste o fluxo ou a expansão horizontal separadamente; não use o número de perímetros para compensar um erro de calibração.',
    },
    {
      type: 'card',
      title: 'Fluxo de trabalho de tolerância mecânica',
      html: 'Use esta ordem para peças funcionais: escolha o bico, escolha a largura de linha segura, modele múltiplos de parede, fatie sem lacunas internas, imprima um corpo de prova, meça a parede real, então ajuste o fluxo ou a compensação dimensional. Pular a etapa geométrica faz a calibração perseguir um alvo móvel.',
    },
    {
      type: 'table',
      headers: ['Conceito do fatiador', 'Nome de campo típico', 'O que inserir'],
      rows: [
        ['Contagem de laços', 'Contagem de linhas de parede / Perímetros', 'Número inteiro de perímetros recomendado'],
        ['Largura do cordão de extrusão', 'Largura de linha / Largura de extrusão', 'Largura de linha recomendada ou ajustada'],
        ['Caminhos de reparo finos', 'Gap fill / Preencher lacunas entre paredes', 'Evite confiar nisso para paredes estruturais'],
        ['Correção dimensional', 'Expansão horizontal / Compensação XY', 'Ajuste apenas após a matemática da parede estar limpa'],
      ],
    },
    { type: 'title', text: 'Casos especiais: paredes finas, nervuras, saliências e recursos de tolerância', level: 2 },
    {
      type: 'paragraph',
      html: 'Paredes finas abaixo do diâmetro do bico não são paredes de perímetro normais. Fatiadores podem imprimi-las com detecção de parede fina, linhas de extrusão única ou largura de linha variável, mas o resultado é geralmente cosmético ou levemente carregado. Para uma nervura estrutural, projete a nervura grossa o suficiente para pelo menos duas linhas estáveis ou aceite que ela se comporta como uma teia flexível. Para saliências de parafusos, use perímetros suficientes para que a carga do parafuso viaje através de laços contínuos em vez de um anel preenchido com gap fill.',
    },
    {
      type: 'paragraph',
      html: 'Recursos de tolerância precisam de cuidado extra porque a correção da parede pode interagir com o tamanho do furo e o ajuste. Se um clipe ou encaixe de pressão for projetado como uma parede de 0,9 mm e o perfil usar linhas de 0,45 mm, dois perímetros são limpos. Se o mesmo clipe tiver 1,0 mm, o fatiador pode adicionar um pequeno caminho central que muda a rigidez e o ajuste. Uma parede matematicamente mais limpa geralmente torna os recursos de mola mais repetíveis porque cada cópia usa o mesmo número de cordões contínuos.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Não force geometria fina impossível',
      html: 'Se a parede CAD estiver abaixo do diâmetro do bico, a correção correta é geralmente um bico menor, um recurso mais grosso ou um método de fabricação diferente. Forçar um bico largo em uma parede sub-bico cria uma forma de cordão imprevisível.',
    },
    {
      type: 'list',
      items: [
        'Use pelo menos duas linhas limpas para nervuras que suportam carga de flexão.',
        'Use três ou mais perímetros ao redor de saliências de parafusos quando o espaço permitir.',
        'Evite canais residuais em clipes porque eles se tornam iniciadores de trincas.',
        'Valide ajustes de pressão com a mesma largura de linha usada na peça final.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quantos perímetros uma parede de 1,2 mm deve usar com um bico de 0,4 mm?',
      answer: 'Geralmente três perímetros. Com uma largura de linha de 0,40 mm, três perímetros equivalem exatamente a 1,20 mm. Com uma largura de linha de 0,42 mm, a espessura real é de 1,26 mm.',
    },
    {
      question: 'Por que a calculadora limita a largura de linha a 80-120% do diâmetro do bico?',
      answer: 'Essa faixa mantém as recomendações em uma zona imprimível conservadora. Valores mais largos ou mais estreitos podem funcionar em casos especiais, mas são menos confiáveis para o planejamento de paredes mecânicas.',
    },
    {
      question: 'Devo alterar a espessura CAD ou a largura de linha do fatiador?',
      answer: 'Se o ajuste for pequeno e dentro da faixa segura, alterar a largura de linha é rápido. Para peças de produção repetida, editar o CAD para múltiplos limpos é geralmente mais sustentável.',
    },
    {
      question: 'Um veredito exato garante que a peça impressa medirá exata?',
      answer: 'Não. Significa que a geometria do fatiador fecha limpidamente. A calibração do fluxo, a retração do material, a temperatura e a compensação XY ainda afetam a medição física.',
    },
    {
      question: 'O que devo fazer quando o resultado é impossível?',
      answer: 'Use um bico menor, redesenhe a espessura da parede como um múltiplo de uma largura de linha segura, ou aceite que o recurso será um caminho de parede fina não estrutural.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Insira o diâmetro do bico', text: 'Escolha um tamanho de bico comum ou digite o diâmetro medido do bico.' },
    { name: 'Defina a largura de linha', text: 'Insira a largura de linha de parede do fatiador; a ferramenta a restringe a uma faixa segura de bico.' },
    { name: 'Insira a espessura da parede CAD', text: 'Use a espessura de parede projetada do modelo.' },
    { name: 'Copie as configurações do fatiador', text: 'Aplique o número de perímetros recomendado e a largura de linha ajustada se necessário.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Otimizador de Perímetros e Paredes',
      description: 'Calcule o número de perímetros FDM e uma largura de linha segura para espessura de parede CAD exata.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quantos perímetros uma parede de 1,2 mm deve usar com um bico de 0,4 mm?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Geralmente três perímetros. Com uma largura de linha de 0,40 mm, três perímetros equivalem exatamente a 1,20 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como otimizar a espessura de parede FDM para perímetros inteiros',
      step: [
        { '@type': 'HowToStep', text: 'Insira o diâmetro do bico.' },
        { '@type': 'HowToStep', text: 'Insira a largura de linha do fatiador.' },
        { '@type': 'HowToStep', text: 'Insira a espessura da parede CAD.' },
        { '@type': 'HowToStep', text: 'Aplique os perímetros e a largura de linha recomendados.' },
      ],
    },
  ],
};
