import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = 'calculadora-custos-impressao-3d';
const title = 'Calculadora de Custos de Impressão 3D: Filamento e Energia';
const description = 'Calcule o preço real das suas impressões 3D. Inclui custo de material, eletricidade, amortização da máquina e mão de obra.';

const faqData = [
  {
    question: 'Por que o custo da eletricidade varia tanto?',
    answer: 'O maior consumo vem de manter a mesa quente. Materiais como o ABS (100°C) consomem muito mais do que o PLA (60°C). O fato da impressora ser aberta ou fechada também influencia.',
  },
  {
    question: 'Como sei quantos watts a minha impressora consome?',
    answer: 'A maioria das impressoras domésticas consome em média 100-150W durante o funcionamento. Pode medir com precisão usando uma tomada inteligente ou um wattímetro.',
  },
  {
    question: 'O que é a margem de desperdício?',
    answer: 'É o filamento que não faz parte da peça final: suportes, raft, skirt e purga inicial. Recomendamos um mínimo de 5% para ser realista.',
  },
];

const howToData = [
  {
    name: 'Insira os dados técnicos',
    text: 'Escreva o peso da peça (fornecido pelo software fatiador como o Cura), o tempo de impressão e o consumo da sua máquina.',
  },
  {
    name: 'Configure os custos económicos',
    text: 'Ajuste o preço da sua bobina, a sua tarifa elétrica e o valor que atribui à sua hora de trabalho manual.',
  },
  {
    name: 'Analise o lucro',
    text: 'Mova o cursor da margem para ver o preço de venda sugerido e reveja o gráfico circular para ver onde o dinheiro é gasto.',
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

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Material',
    partWeightLabel: 'Peso da peça (líquido)',
    gramsUnit: 'gramas',
    spoolPriceLabel: 'Preço da bobina (1kg)',
    spoolPriceUnit: '€/kg',
    wasteMarginLabel: 'Margem de desperdício: ',
    energyTitle: 'Energia e Tempo',
    printTimeLabel: 'Tempo de impressão',
    hoursUnit: 'horas',
    averagePowerLabel: 'Consumo médio',
    wattsUnit: 'watts',
    electricityRateLabel: 'Tarifa elétrica',
    kwhPriceUnit: '€/kWh',
    amortizationTitle: 'Amortização e Trabalho',
    machineCostHourLabel: 'Custo hora da máquina',
    priceHourUnit: '€/h',
    laborCostHourLabel: 'Mão de obra (manual)',
    minutesUnit: 'minutos',
    manufacturingCostLabel: 'Custo de Fabrico',
    suggestedPriceLabel: 'Preço Sugerido (+{margin}%)',
    costBreakdownTitle: 'Detalhamento de Custos',
    plasticLabel: 'Plástico',
    electricityLabel: 'Eletricidade',
    machineLabel: 'Máquina',
    laborLabel: 'Mão de Obra',
    proTip: 'Sabia que aquecer a mesa a 100°C para ABS pode duplicar o custo da eletricidade em comparação com o PLA? Não se esqueça de contar as falhas: se 10% das suas peças falham, o seu custo real é 10% superior.',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcular o Custo Real da Impressão 3D: Além do Filamento',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Quando começamos no mundo do fabrico aditivo, é comum pensar que o único custo é o plástico que sai pelo bocal. No entanto, se quiser tornar isto um negócio ou simplesmente gerir melhor o seu hobby, deve compreender que a <strong>rentabilidade</strong> reside nos detalhes que não são visíveis à primeira vista.',
    },
    {
      type: 'title',
      text: 'Os 4 Pilares do Custo na Impressão 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A nossa calculadora divide o preço final em quatro áreas fundamentais:',
    },
    {
      type: 'summary',
      items: [
        'Material e Desperdício: Inclui o peso da peça, mas também o plástico usado em suportes, skirts e purgas. Recomendamos sempre adicionar uma margem de 5-10% para possíveis falhas de impressão.',
        'Consumo de Eletricidade: Uma impressora 3D não gasta o mesmo a imprimir PLA (mesa a 60°C) que a imprimir ABS ou Nylon (mesa a 100°C+). O preço do kWh pode fazer a diferença em peças longas.',
        'Amortização da Máquina: Cada hora que a impressora está a funcionar, os seus componentes (correias, ventoinhas, bocais) desgastam-se. Incluir um pequeno custo horário permitirá pagar futuras reparações.',
        'Mão de Obra: O seu tempo é o mais valioso. Preparar o ficheiro, limpar a mesa e o pós-processamento da peça devem ser contabilizados.',
      ],
    },
    {
      type: 'title',
      text: 'Como calcular a amortização?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma forma simples é dividir o preço de compra da sua impressora pela sua vida útil estimada em horas. Por exemplo, se uma impressora custa 400 € e espera que ela trabalhe pelo menos 2000 horas antes de uma renovação importante, o seu custo de amortização é de <strong>0,20 € por hora</strong>.',
    },
    {
      type: 'tip',
      title: 'Poupe na Eletricidade',
      html: '<p>Se imprime muito, considere fechar a sua impressora com um enclosure (caixa). Isso não só ajuda a imprimir materiais técnicos, mas também retém o calor e faz com que a mesa aquecida consuma muito menos energia para manter a temperatura.</p>',
    },
    {
      type: 'title',
      text: 'Estratégias para Preço de Venda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma vez conhecido o seu custo base, deve decidir a sua margem. No mundo da impressão 3D on-demand, uma margem de 50-100% sobre o custo total é comum para cobrir o risco de falhas inesperadas e o lucro comercial. Se a peça exigir muito trabalho manual de lixagem e pintura, essa margem deve ser maior.',
    },
    {
      type: 'summary',
      items: [
        'Preço por tempo: Ideal para serviços puros de impressão.',
        'Preço por grama: Comum para peças massivas mas simples.',
        'Preço por valor: Se o design for único, o preço não deve basear-se apenas no custo, mas no que o cliente está disposto a pagar.',
      ],
    },
  ],
  faqTitle: 'Perguntas Frequentes sobre Custos 3D',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Recursos',
  bibliography: [
    {
      name: 'PrusaPrinters: Calcular custos de impressão 3D',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Estimativa de Materiais e Custos',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Guia de custos do fabrico aditivo',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
