import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'calculadora-compensacao-pe-elefante';
const title = 'Calculadora de Compensação de Pé de Elefante: Correção Dimensional de Precisão';
const description = 'Calcule a expansão horizontal negativa e a profundidade de chanfro CAD para a primeira camada de impressão 3D usando o erro dimensional medido, a altura da camada, a pressão Z-offset e a temperatura da mesa.';

const faqData = [
  {
    question: 'Qual é o melhor valor de compensação para pé de elefante?',
    answer: 'O melhor valor é o erro base medido corrigido para a altura da primeira camada, pressão Z efetiva e temperatura da mesa. Esta calculadora o reporta como um valor de expansão horizontal negativo do fatiador.',
  },
  {
    question: 'Devo usar expansão horizontal ou um chanfro CAD?',
    answer: 'Use a expansão horizontal do fatiador para correção rápida em nível de perfil. Use um chanfro CAD para peças funcionais onde a borda inferior toca outra peça, assenta em uma superfície de referência ou deve permanecer repetível entre fatiadores.',
  },
  {
    question: 'Por que a temperatura da mesa afeta o pé de elefante?',
    answer: 'Uma mesa mais quente mantém o polímero inferior mais macio por mais tempo. O cordão amolecido pode fluir horizontalmente sob a pressão do bico, então a calculadora aumenta a correção acima do ponto de referência de 60 °C.',
  },
  {
    question: 'Pé de elefante é o mesmo que superextrusão?',
    answer: 'Não. A superextrusão afeta muitas camadas. O pé de elefante se concentra na base onde as primeiras camadas são comprimidas e aquecidas pela mesa, embora a superextrusão possa piorá-lo.',
  },
];

const howToData = [
  { name: 'Imprimir um cupom', text: 'Use o mesmo material, temperatura da mesa, altura da primeira camada e configurações da primeira camada da impressão de produção.' },
  { name: 'Medir o erro base', text: 'Subtraia a dimensão estável da parede superior da dimensão mais larga da base.' },
  { name: 'Inserir pressão e temperatura', text: 'Forneça a altura da primeira camada, o espaço de pressão Z efetivo e a temperatura da mesa.' },
  { name: 'Aplicar a correção', text: 'Use o valor de expansão horizontal negativo no fatiador ou modele o chanfro de 45 graus sugerido.' },
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
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

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Entradas de compensação de pé de elefante',
    resultsAriaLabel: 'Resultados de correção de pé de elefante',
    canvasAriaLabel: 'Visualização em corte transversal do perfil de pé de elefante atual e corrigido',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    materialLabel: 'Predefinição de material',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Personalizado',
    measuredErrorLabel: 'Erro base medido',
    layerHeightLabel: 'Altura da primeira camada',
    zPressureLabel: 'Espaço de pressão Z-offset',
    bedTemperatureLabel: 'Temperatura da mesa',
    targetToleranceLabel: 'Tolerância alvo',
    expansionLabel: 'Expansão do fatiador',
    chamferLabel: 'Chanfro CAD',
    thermalFactorLabel: 'Fator térmico',
    verdictLabel: 'Alvo de precisão dimensional',
    currentProfileLabel: 'Pé de elefante medido',
    correctedProfileLabel: 'Perfil corrigido',
    slicerCommandLabel: 'Comando do fatiador',
    cadCommandLabel: 'Comando CAD',
    copyButton: 'Copiar relatório de correção',
    copiedButton: 'Copiado',
    copyTemplate: 'Compensação de pé de elefante: expansão horizontal do fatiador {expansion}, chanfro CAD {chamfer} a 45°, fator térmico {phi}, veredito: {verdict}.',
    slicerCommandTemplate: 'Expansão horizontal: {expansion} {unit}',
    cadCommandTemplate: '45° x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_corr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | relação de pressão Z {ratio}',
    optimalVerdict: '< 0.05 mm de tolerância: correção opcional, verificar com paquímetro.',
    watchVerdict: 'Desvio controlado: aplicar compensação do fatiador e reimprimir cupom.',
    severeVerdict: 'Espalhamento base severo: corrigir a pressão Z antes de confiar no deslocamento do fatiador.',
    mmUnit: 'mm',
    inchUnit: 'pol',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Compensação de pé de elefante como um problema de precisão dimensional', level: 2 },
    { type: 'paragraph', html: 'Pé de elefante é a expansão para fora das primeiras camadas impressas além do limite CAD nominal. Em um cubo de calibração aparece como um lábio base. Em peças de engenharia torna-se um erro funcional: caudas de andorinha travam, furos próximos à plataforma de construção fecham, encaixes de pressão perdem folga, placas de acoplamento balançam em uma borda elevada e blocos de calibração não assentam mais nivelados. Uma <strong>calculadora de compensação de pé de elefante</strong> útil não pode, portanto, ser tratada como um ajuste cosmético de fluxo. Deve converter um erro dimensional medido em um valor de expansão horizontal negativo e, quando possível, em um chanfro CAD que remova o caminho de material comprimido do próprio design.' },
    { type: 'paragraph', html: 'Esta calculadora modela a correção a partir de três entradas físicas que afetam fortemente o defeito: erro base medido, altura da primeira camada e o espaço de pressão Z efetivo. A relação central é <code>E_corr = Erro x (AlturaCamada / PressaoZOffset) x phi_temp</code>. O multiplicador de temperatura <code>phi_temp</code> aumenta acima de uma mesa de referência de 60 °C porque uma base mais quente mantém o polímero mais macio por mais tempo e permite que a carga do bico empurre o material lateralmente. O resultado é relatado como expansão horizontal negativa para o fatiador e como profundidade de chanfro de 45 graus para CAD.' },
    { type: 'stats', columns: 3, items: [
      { value: '0.01 mm', label: 'resolução de entrada para ajuste dimensional' },
      { value: '45°', label: 'ângulo de chanfro CAD padrão' },
      { value: 'phi_temp', label: 'multiplicador de fluxo de temperatura da mesa' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Meça o erro, não o lábio visual', html: 'Imprima um cupom quadrado ou retangular, meça a parede nominal ou dimensão externa acima da base, depois meça a mesma dimensão nas primeiras camadas. A diferença entre essas duas medições é o erro de pé de elefante. Não estime a partir de uma fotografia; a ferramenta é projetada para dados de paquímetro.' },

    { type: 'title', text: 'Por que o pé de elefante acontece: pressão do bico, calor e fluxo de plástico', level: 2 },
    { type: 'paragraph', html: 'A primeira camada é comprimida intencionalmente para que o filamento molhe a mesa e adira. Essa compressão transforma o bico em um pequeno aplicador de pressão. O polímero fundido sai do bico, é espremido entre o bico e a superfície de construção e deve ocupar o volume disponível. Quando o espaço Z é muito pequeno, não há espaço vertical suficiente para o cordão de extrusão comandado, então o material flui lateralmente. A base se alarga mesmo quando o resto da impressão é dimensionalmente preciso.' },
    { type: 'paragraph', html: 'A temperatura da mesa muda a gravidade. PLA a 60 °C pode estar perto de sua região de transição vítrea, PETG a 75 °C permanece pegajoso e complacente, e ABS ou ASA em uma mesa de 100 °C permanece quente nas primeiras camadas. Uma mesa mais quente não apenas melhora a adesão; também retarda a solidificação na base. É por isso que esta calculadora aplica um fator térmico: <strong>1.00 a 60 °C, mais 0.05 para cada 5 °C adicionais</strong>. Uma mesa PETG a 75 °C usa portanto um fator de cerca de 1.15 antes da limitação.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Dominado pela pressão Z', description: 'Um espaço de bico muito baixo achata o cordão e empurra o plástico para fora. O erro é mais agudo na primeira camada e geralmente melhora após a correção do Z-offset.', points: ['Primeira linha larga', 'Superfície esmagada brilhante', 'Borda tipo brim'] },
      { title: 'Dominado termicamente', description: 'A base permanece macia porque o calor da mesa ou câmara é alto. O lábio pode se estender por várias camadas mesmo com uma primeira camada razoável.', highlight: true, points: ['Borda inferior arredondada', 'Comum em PETG ou ABS', 'Resfriamento lento'] },
      { title: 'Dominado pelo fluxo', description: 'O multiplicador de extrusão, diâmetro do filamento ou fluxo da primeira camada é muito alto. Toda a região inferior pode parecer sobrecarregada, não apenas o perímetro.', points: ['Topo rugoso da primeira camada', 'Linhas muito largas', 'Espaços fechados'] },
    ] },
    { type: 'tip', title: 'Use o Z offset como entrada, não como palpite', html: 'O espaço de pressão Z é a folga efetiva que força o cordão para dentro da mesa. Se seu fatiador relatar uma primeira camada de 0.20 mm, mas o esmagamento real se comporta como 0.10 mm, use o espaço de pressão menor. Isso torna a compensação calculada maior, o que corresponde à física de um cordão mais comprimido.' },

    { type: 'title', text: 'Como medir a expansão da base para a calculadora', level: 2 },
    { type: 'paragraph', html: 'Use um cupom de teste simples com uma dimensão externa conhecida, como 20.00 mm, 30.00 mm ou 40.00 mm. O cupom deve ter lados verticais retos, pelo menos 8 a 12 mm de altura e nenhum chanfro no primeiro teste. Meça a dimensão do corpo vários milímetros acima da mesa onde o pé de elefante desapareceu. Em seguida, meça a mesma dimensão na parte mais larga da base. A diferença é o erro externo total para esse eixo.' },
    { type: 'paragraph', html: 'Se um cubo de 20.00 mm medir 20.02 mm no meio, mas 20.24 mm na base, o erro base relativo ao corpo estável é de 0.22 mm. Insira 0.22 mm em vez da diferença do valor nominal. Isso remove a contração não relacionada, o erro de passos XY ou o viés de largura de linha do fatiador do cálculo do pé de elefante. Você está isolando a deformação da base, não calibrando a impressora inteira.' },
    { type: 'list', items: [
      'Meça após a peça ter esfriado à temperatura ambiente, especialmente para ABS, ASA, PETG e peças grandes de PLA.',
      'Use pressão leve do paquímetro; apertar uma base amolecida ou texturizada pode esconder o verdadeiro lábio.',
      'Faça medições nos lados X e Y porque o movimento da mesa, a direção do ventilador e a inclinação do pórtico podem tornar o defeito assimétrico.',
      'Ignore o material do brim e da saia. Remova o brim limpa-mente antes de medir a parede real da peça.',
      'Reimprima o mesmo cupom após aplicar a compensação para que a próxima medição seja comparável.',
    ] },
    { type: 'table', headers: ['Observação', 'Causa provável', 'Melhor primeira ação'], rows: [
      ['Base é mais larga, mas parede superior é precisa', 'Pé de elefante por pressão da primeira camada', 'Use esta calculadora e aplique expansão horizontal negativa.'],
      ['Toda camada está superdimensionala', 'Escala XY, multiplicador de extrusão ou erro de diâmetro do filamento', 'Calibre o fluxo e XY antes da compensação do pé de elefante.'],
      ['Apenas cantos incham', 'Avanço de pressão, velocidade ou problema de resfriamento', 'Ajuste o avanço de pressão ou a velocidade nos cantos.'],
      ['Fundo é rugoso e translúcido', 'Bico muito próximo ou fluxo da primeira camada muito alto', 'Aumente o Z-offset ou reduza o fluxo da primeira camada antes de compensar.'],
    ] },

    { type: 'title', text: 'Expansão horizontal negativa vs chanfro CAD', level: 2 },
    { type: 'paragraph', html: 'A expansão horizontal do fatiador desloca o limite do polígono para dentro ou para fora antes da geração de trajetórias. Para a correção do pé de elefante, a configuração é normalmente negativa: se a base medir 0.20 mm muito larga, o fatiador pode precisar de um valor próximo a -0.20 mm, modificado aqui pela altura da camada, pressão Z e temperatura da mesa. Isso é rápido, reversível e útil para lotes onde cada peça compartilha uma deformação semelhante da primeira camada.' },
    { type: 'paragraph', html: 'Um chanfro CAD remove material do próprio modelo. A calculadora relata uma profundidade de chanfro de 45 graus como <code>Erro x sqrt(2)</code>, que corresponde a uma face diagonal que limpa o lábio base horizontal. Chanfros CAD são frequentemente melhores para interfaces críticas porque preservam as dimensões pretendidas da parede superior enquanto dão à primeira camada um caminho de alívio controlado. Eles também são mais portáteis entre fatiadores porque a geometria carrega a compensação.' },
    { type: 'proscons', title: 'Escolhendo um método de correção', items: [
      { pro: 'A expansão horizontal negativa pode ser alterada rapidamente por perfil de material ou impressora.', con: 'Pode afetar texto pequeno, paredes finas, pinos e furos se aplicada globalmente.' },
      { pro: 'Chanfros CAD são explícitos e robustos para superfícies de acoplamento próximas à plataforma de construção.', con: 'Eles exigem edições no modelo e podem não ser convenientes para peças baixadas.' },
      { pro: 'Combinar um deslocamento suave do fatiador com um pequeno chanfro pode controlar bases severas de PETG ou ABS.', con: 'Empilhar correções sem remedir pode subdimensionar a peça.' },
    ] },
    { type: 'message', title: 'Não compense cegamente', html: 'Se a primeira camada estiver visivelmente muito esmagada, corrija o Z-offset primeiro. A compensação deve remover a expansão base previsível restante, não esconder um bico que está arando a primeira camada.' },

    { type: 'title', text: 'Compensação sugerida por material', level: 2 },
    { type: 'paragraph', html: 'O comportamento do material importa porque a temperatura de adesão, transição vítrea, taxa de resfriamento e viscosidade afetam o quão longe o cordão inferior pode fluir antes de congelar. PLA geralmente responde bem a uma pequena expansão horizontal negativa após o Z-offset estar razoável. PETG pode precisar de uma correção maior porque é comumente impresso mais quente na mesa e com uma primeira camada ajustada para forte adesão. ABS e ASA podem exigir alívio CAD em peças funcionais porque a mesa quente e a câmara mantêm a base macia por mais tempo.' },
    { type: 'table', headers: ['Material', 'Faixa típica da mesa', 'Alvo de tolerância inicial', 'Notas de compensação'], rows: [
      ['PLA', '55-65 °C', '< 0.05 mm', 'Comece com Z-offset preciso, depois use pequena expansão horizontal negativa. Um chanfro é útil para bases de pressão.'],
      ['PETG', '70-85 °C', '< 0.07 mm', 'Espere um fator térmico mais alto. Evite fluxo excessivo da primeira camada porque PETG pode formar um lábio arredondado pegajoso.'],
      ['ABS/ASA', '90-110 °C', '< 0.08 mm', 'Use chanfros CAD para peças de produção. O calor da câmara pode manter as primeiras camadas complacentes.'],
      ['TPU', '40-60 °C', 'específico da aplicação', 'Filamento flexível pode deformar sob o paquímetro. Meça suavemente e prefira alívio geométrico a deslocamentos globais agressivos.'],
    ] },
    { type: 'card', title: 'Por que a tabela é um ponto de partida', html: 'Uma folha PEI texturizada, mesa de vidro liso, diâmetro do bico, largura da linha, velocidade da primeira camada, atraso de resfriamento, temperatura da câmara e marca do filamento podem todos alterar o erro medido. A tabela estabelece expectativas; a calculadora deve ser orientada pelo seu cupom medido.' },
    { type: 'summary', title: 'Prioridades de ajuste de material', items: [
      'PLA: corrija o Z-offset primeiro, depois use pequena compensação do fatiador.',
      'PETG: observe a temperatura da mesa e o fluxo da primeira camada porque a base permanece móvel.',
      'ABS/ASA: prefira chanfros CAD em interfaces de produção e verifique após o aquecimento da câmara.',
      'Materiais flexíveis: o método de medição importa porque a base pode comprimir sob as mandíbulas do paquímetro.',
    ] },

    { type: 'title', text: 'Configurações do fatiador que interagem com a compensação de pé de elefante', level: 2 },
    { type: 'paragraph', html: 'Diferentes fatiadores expõem a configuração sob nomes como Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation ou expansão da primeira camada. Uma expansão horizontal global altera todo o contorno da peça. Uma configuração apenas da primeira camada afeta apenas as camadas inferiores e geralmente é mais segura para precisão dimensional. Quando um fatiador suporta ambos, use a compensação da primeira camada para pé de elefante e reserve a compensação XY global para erros de tamanho calibrados que persistem por toda a altura.' },
    { type: 'paragraph', html: 'A largura da linha e o fluxo da primeira camada também interagem com a correção. Uma linha de primeira camada muito larga pode melhorar a adesão à mesa, mas aumenta o volume que deve caber sob o bico. Se o cordão não tem para onde ir verticalmente, ele se espalha horizontalmente. Reduzir o fluxo da primeira camada de 105 por cento para 100 por cento, aumentar o Z-offset em 0.02 mm ou reduzir a temperatura da mesa em 5 °C pode reduzir a expansão negativa necessária mais limpa-mente do que aplicar um grande deslocamento.' },
    { type: 'glossary', items: [
      { term: 'Expansão horizontal', definition: 'Um deslocamento do fatiador que expande ou contrai os contornos do modelo antes de gerar trajetórias.' },
      { term: 'Expansão da primeira camada', definition: 'Uma variante que se aplica apenas à primeira camada ou camadas inferiores, tornando-a mais adequada para pé de elefante.' },
      { term: 'Espaço de pressão Z', definition: 'O espaço efetivo bico-mesa que determina o quanto o primeiro cordão é comprimido.' },
      { term: 'Fator térmico', definition: 'Um multiplicador usado aqui para representar o aumento do fluxo lateral quando a mesa está mais quente que 60 °C.' },
      { term: 'Chanfro CAD', definition: 'Uma borda chanfrada modelada que dá ao material comprimido da primeira camada uma zona de alívio geométrico.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Grande expansão negativa pode quebrar recursos pequenos', html: 'Um valor como -0.35 mm pode corrigir a base externa de uma caixa grande, mas apagar letras em relevo minúsculas, reduzir nervuras estreitas e alterar o diâmetro de pequenos postes. Quando a correção necessária é grande, trate-a como um sinal para revisar o Z-offset, o fluxo da primeira camada ou a temperatura da mesa.' },

    { type: 'title', text: 'Fluxo de trabalho para uma correção precisa de pé de elefante', level: 2 },
    { type: 'list', items: [
      'Imprima um cupom de calibração simples com o mesmo material, temperatura da mesa, altura da primeira camada e velocidade da primeira camada usados para a peça real.',
      'Meça a dimensão estável do corpo acima da base, depois meça a dimensão mais larga da base e subtraia as duas.',
      'Insira o erro medido, a altura da primeira camada, o espaço de pressão Z efetivo, a temperatura da mesa e a tolerância alvo.',
      'Aplique a expansão horizontal negativa relatada no fatiador ou adicione o chanfro de 45 graus relatado no CAD.',
      'Reimprima o cupom e meça novamente após o resfriamento.',
      'Se o erro residual permanecer acima da tolerância, ajuste em meios-passos em vez de pular para um deslocamento global extremo.',
      'Trave a configuração em um perfil de material apenas depois que dois cupons reproduzíveis concordarem dentro do seu alvo de tolerância.',
    ] },
    { type: 'tip', title: 'Use o mesmo estado da mesa que na produção', html: 'Uma primeira impressão a frio em uma mesa grossa pode se comportar de forma diferente da quinta impressão após a mesa ter aquecido por 30 minutos. Se o trabalho de produção for executado após o aquecimento, calibre o cupom também após o aquecimento.' },
    { type: 'diagnostic', variant: 'success', title: 'Bom alvo de correção', html: 'Para trabalho dimensional FDM prático, um desvio base abaixo de 0.05 mm é frequentemente pequeno o suficiente para que o ajuste de montagem seja controlado pelo projeto de folga normal, em vez do lábio de pé de elefante. Metas mais apertadas exigem máquinas rígidas, filamento estável e técnica de medição repetível.' },
    { type: 'summary', title: 'Principais conclusões', items: [
      'Pé de elefante é um problema de deformação por pressão e temperatura, não apenas um defeito visual.',
      'Use o erro base medido relativo à parede estável, não apenas o tamanho CAD nominal.',
      'Expansão horizontal negativa é a correção do fatiador; um chanfro de 45 graus é a correção CAD.',
      'A temperatura da mesa aumenta o fator térmico porque a base permanece mais macia e flui lateralmente por mais tempo.',
      'Valores severos de compensação devem disparar verificações de Z e fluxo da primeira camada antes do uso em produção.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
