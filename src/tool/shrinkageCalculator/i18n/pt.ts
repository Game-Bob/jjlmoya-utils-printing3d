import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = 'calculadora-contracao-impressao-3d';
const title = 'Calculadora de Contração 3D: Fator de Escala e Encolhimento';
const description = 'Calcule quanto deve escalar os seus designs 3D com base no material (ABS, Nylon, ASA) para compensar a contração térmica e obter medidas exatas.';

const faqData = [
  {
    question: 'Por que o ABS encolhe mais que o PLA?',
    answer: 'O ABS é um polímero amorfo que requer temperaturas mais elevadas para ser extrudado. Ao arrefecer de 250°C para a temperatura ambiente, o gradiente térmico é maior, fazendo com que as moléculas se agrupem de forma mais agressiva do que no PLA.',
  },
  {
    question: 'Quando devo utilizar a calibração manual?',
    answer: 'Deve utilizá-la sempre que mudar de marca de filamento ou quando necessitar de tolerâncias mecânicas abaixo de 0,1 mm. O coeficiente de contração pode variar até entre cores diferentes da mesma marca.',
  },
  {
    question: 'O infill afeta a contração?',
    answer: 'Sim. Quanto maior a densidade do infill, maior a quantidade de material que exerce força em direção ao centro da peça enquanto arrefece. Peças sólidas tendem a encolher ligeiramente mais do que peças ocas.',
  },
];

const howToData = [
  {
    name: 'Selecione o seu material',
    text: 'Escolha entre os materiais pré-definidos (ABS, ASA, Nylon, etc.) para aplicar os coeficientes padrão da indústria.',
  },
  {
    name: 'Calibre com uma peça real',
    text: 'Se necessitar de precisão total, imprima um cubo de 100mm, meça-o depois de frio e insira os dados no modo de calibração.',
  },
  {
    name: 'Copie o fator para o Slicer',
    text: 'Copie a percentagem de escala resultante e aplique-a nos eixos correspondentes do seu software de fatiamento (Cura, PrusaSlicer).',
  },
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

const howToSchema: WithContext<HowToThing> = {
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Definições de Material',
    tabCalibration: 'Calibração Manual',
    labelDefaultMaterial: 'Material Padrão',
    labelEstimatedShrinkage: 'Contração Estimada',
    unitPercent: '%',
    labelDesignSize: 'Medida do Design (Slicer)',
    labelRealSize: 'Medida da Peça Impressa (Real)',
    unitMm: 'mm',
    labelAxesCompensation: 'Compensação de Eixos',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* O eixo Z costuma encolher menos devido à adesão entre camadas.',
    labelRecommendationTitle: 'Recomendação Técnica',
    labelResultSlicerScale: 'PERCENTAGEM DE ESCALA (SLICER)',
    labelResultFactor: 'FATOR MULTIPLICADOR',
    btnCopy: 'Copiar Percentagem',
    btnCopied: 'Copiado!',
    recommendations: {
      'ABS': 'Recomenda-se uma temperatura de câmara de pelo menos 40°C para minimizar o empenamento (warping) adicional devido à contração.',
      'ASA': 'Excelente resistência UV. Reduza o arrefecimento da camada para melhorar a adesão estrutural.',
      'Nylon': 'Material muito higroscópico. Seque a 80°C durante 6-8h antes de imprimir para evitar bolhas.',
      'PETG': 'Menor contração. Use um multiplicador de fluxo de 95-98% se tiver sobre-extrusão em peças densas.',
      'PLA': 'Contração mínima. Garanta um bom fluxo de ar (ventoinha a 100%) para detalhes finos.'
    }
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Contração de Impressão 3D: Precisão Dimensional',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Se é um entusiasta da <strong>impressão 3D</strong>, provavelmente já enfrentou este problema: desenha uma peça com medidas perfeitas (por exemplo, um cubo de 20x20x20 mm), imprime-a e, ao medir com o paquímetro, descobre que mede 19,7 mm. O que aconteceu? A resposta é a <strong>contração do material</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A contração é um fenómeno físico inevitável que ocorre quando os termoplásticos passam do seu estado fundido (a altas temperaturas) para o seu estado sólido à temperatura ambiente. À medida que arrefecem, as moléculas reorganizam-se e "apertam-se", reduzindo o volume total da peça. A nossa <strong>calculadora de contração</strong> foi desenhada para o ajudar a prever esta mudança e ajustar a escala no seu fatiador para que as suas peças encaixem à primeira.',
    },
    {
      type: 'title',
      text: 'Por que os plásticos encolhem?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Na impressão FDM (Fused Deposition Modeling), depositamos camadas de plástico quente (entre 200°C e 300°C) sobre uma superfície. À medida que o material arrefece, este sofre o que é conhecido como <strong>coeficiente de expansão térmica</strong>. Basicamente, a energia térmica mantém as moléculas afastadas; quando essa energia desaparece, as forças intermoleculares aproximam-nas.',
    },
    {
      type: 'paragraph',
      html: 'Nem todos os materiais se comportam da mesma forma. Plásticos amorfos (como o PLA) têm uma estrutura desordenada que tende a encolher menos. Em contraste, plásticos que tendem a cristalizar ou requerem temperaturas muito elevadas (como ABS ou Nylon) têm uma contração muito mais agressiva e difícil de controlar.',
    },
    {
      type: 'title',
      text: 'Materiais Comuns e os Seus Intervalos de Contração',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Acrilonitrilo Butadieno Estireno): 0,8% – 2,0%. É um dos materiais mais difíceis devido à sua elevada contração, que muitas vezes causa "warping" (deformação dos cantos).',
        'ASA: 0,5% – 0,9%. Uma alternativa ao ABS resistente aos raios UV com uma contração um pouco mais contida.',
        'Nylon (PA): 0,7% – 2,5%. Dependendo se tem carga de fibra de carbono ou de vidro, a sua contração pode variar drasticamente.',
        'PETG: 0,2% – 0,5%. Muito estável dimensionalmente, ideal para peças mecânicas que não exigem a resistência térmica do ABS.',
        'PLA: 0,1% – 0,3%. O padrão de ouro para facilidade de uso; a sua contração é quase insignificante para a maioria dos usos.',
      ],
    },
    {
      type: 'title',
      text: 'Como calcular o Fator de Escala',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Muitos utilizadores cometem o erro de simplesmente "adicionar a percentagem" (se faltam 2%, escalam para 102%). No entanto, matematicamente, para compensar uma perda, a escala deve ser ligeiramente diferente. A fórmula correta utilizada pela nossa calculadora é: <br><strong>Fator de Escala = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Onde <strong>S</strong> é a percentagem de contração expressa em decimais (ex: 0,02 para 2%). Por exemplo, para um material que encolhe 2%, o fator de escala é 1,0204, o que significa que no fatiador (Cura, PrusaSlicer, Bambu Studio) devemos definir a escala para <strong>102,04%</strong>.',
    },
    {
      type: 'title',
      text: 'Calibração Manual: Medida Desejada vs Medida Real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O processo de calibração inversa é simples: imprima um objeto de teste com uma medida conhecida (ex: um cubo de calibração de 100mm). Assim que estiver completamente frio (esperar pelo menos 30 minutos é crucial), meça a peça com um paquímetro digital. Insira ambos os valores na calculadora e esta dar-lhe-á a percentagem exata de ajuste para essa bobina de filamento.',
    },
    {
      type: 'title',
      text: 'Contração Não Uniforme: O Problema dos Eixos X, Y e Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Na impressão 3D, a física não é a mesma em todas as direções. Como as camadas são depositadas umas sobre as outras, a <strong>adesão entre camadas</strong> no eixo Z costuma limitar a contração vertical. Normalmente, descobrirá que as medidas no plano horizontal (eixos X e Y) requerem mais compensação do que a altura (eixo Z).',
    },
    {
      type: 'tip',
      title: 'Dica Pro',
      html: '<p>Se estiver a trabalhar com nylon ou materiais técnicos, meça sempre a peça 24 horas após a impressão. Alguns plásticos absorvem a humidade ambiental e podem "inchar" ligeiramente após o arrefecimento, alterando a medida final.</p>',
    },
    {
      type: 'title',
      text: 'Fatores que afetam a precisão final',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Temperatura do Extrusor: A temperaturas mais elevadas, o material entra mais expandido, mas também costuma sofrer um arrefecimento mais repentino.',
        'Temperatura da Mesa: Uma mesa quente evita que a base da peça encolha mais depressa do que o topo, reduzindo o warping.',
        'Densidade do Infill: Peças muito densas têm mais massa plástica que exerce uma força de contração interna em direção ao centro.',
        'Ventoinha da Camada: Em materiais como o ABS, uma ventoinha demasiado forte pode causar fissuras e uma contração excessiva e irregular.',
      ],
    },
  ],
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    {
      name: 'Simplify3D: Precisão Dimensional e Contração',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Tabela de Materiais e Fatores de Contração',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Compreender a Contração de Materiais de Impressão 3D',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
