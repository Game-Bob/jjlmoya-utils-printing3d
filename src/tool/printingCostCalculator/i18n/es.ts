import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = 'calculadora-coste-impresion-3d';
const title = 'Calculadora de Coste de Impresión 3D: Filamento y Energía';
const description = 'Calcula el precio real de tus impresiones 3D. Incluye coste de material, electricidad, amortización de máquina y mano de obra.';

const faqData = [
  {
    question: '¿Por qué el coste eléctrico varía tanto?',
    answer: 'El mayor consumo viene de mantener la cama caliente. Materiales como el ABS (100°C) consumen mucho más que el PLA (60°C). También influye si la impresora está abierta o cerrada.',
  },
  {
    question: '¿Cómo sé cuántos vatios consume mi impresora?',
    answer: 'La mayoría de impresoras domésticas consumen una media de 100-150W durante el funcionamiento. Puedes medirlo con exactitud usando un enchufe inteligente o un vatímetro.',
  },
  {
    question: '¿Qué es el margen de desperdicio?',
    answer: 'Es el filamento que no forma parte de la pieza final: soportes, balsa (raft), falda (skirt) y el purgado inicial. Recomendamos un mínimo del 5% para ser realistas.',
  },
];

const howToData = [
  {
    name: 'Introduce los datos técnicos',
    text: 'Escribe el peso de la pieza (lo da el software laminador como Cura), el tiempo de impresión y el consumo de tu máquina.',
  },
  {
    name: 'Configura los costes económicos',
    text: 'Ajusta el precio de tu bobina, tu tarifa eléctrica y lo que valoras tu hora de trabajo manual.',
  },
  {
    name: 'Analiza el beneficio',
    text: 'Mueve el deslizador de margen para ver el precio de venta sugerido y revisa el gráfico de tartas para ver dónde se va el dinero.',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Material',
    partWeightLabel: 'Peso de la pieza (neto)',
    gramsUnit: 'gramos',
    spoolPriceLabel: 'Precio de la bobina (1kg)',
    spoolPriceUnit: '€/kg',
    wasteMarginLabel: 'Márgen de desperdicio: ',
    energyTitle: 'Energía y Tiempo',
    printTimeLabel: 'Tiempo de impresión',
    hoursUnit: 'horas',
    averagePowerLabel: 'Consumo medio',
    wattsUnit: 'vatios',
    electricityRateLabel: 'Tarifa eléctrica',
    kwhPriceUnit: '€/kWh',
    amortizationTitle: 'Amortización y Mano de Obra',
    machineCostHourLabel: 'Coste máquina por hora',
    priceHourUnit: '€/h',
    laborCostHourLabel: 'Mano de obra (manual)',
    minutesUnit: 'minutos',
    manufacturingCostLabel: 'Coste de Fabricación',
    suggestedPriceLabel: 'Precio Sugerido (+{margin}%)',
    costBreakdownTitle: 'Desglose de Costes',
    plasticLabel: 'Plástico',
    electricityLabel: 'Electricidad',
    machineLabel: 'Máquina',
    laborLabel: 'Mano de Obra',
    proTip: '¿Sabías que calentar la cama a 100°C para ABS puede duplicar el coste eléctrico frente al PLA? No olvides contar los fallos: si un 10% de tus piezas fallan, tu coste real es un 10% mayor.',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculando el Coste Real de la Impresión 3D: Más Allá del Filamento',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Cuando empezamos en el mundo de la fabricación aditiva, es común pensar que el único coste es el del plástico que sale por la boquilla. Sin embargo, si quieres hacer de esto un negocio o simplemente gestionar mejor tu hobby, debes entender que la <strong>rentabilidad</strong> reside en los detalles que no se ven a simple vista.',
    },
    {
      type: 'title',
      text: 'Los 4 Pilares del Coste en Impresión 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora desglosa el precio final en cuatro áreas fundamentales:',
    },
    {
      type: 'summary',
      items: [
        'Material y Merma: Incluye el peso de la pieza, pero también el plástico usado en soportes, faldas y purgas. Siempre recomendamos añadir un 5-10% de margen por posibles fallos de impresión.',
        'Consumo Eléctrico: Una impresora 3D no gasta lo mismo imprimiendo PLA (cama a 60°C) que ABS o Nylon (cama a 100°C+). El precio del kWh puede marcar la diferencia en piezas largas.',
        'Amortización de la Máquina: Cada hora que la impresora está funcionando, sus componentes (correas, ventiladores, boquillas) se desgastan. Incluir un pequeño coste por hora te permitirá pagar las reparaciones futuras.',
        'Mano de Obra: Tu tiempo es lo más valioso. Preparar el archivo, limpiar la cama y el post-procesado de la pieza deben ser contabilizados.',
      ],
    },
    {
      type: 'title',
      text: '¿Cómo calcular la amortización?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una forma sencilla es dividir el precio de compra de tu impresora por su vida útil estimada en horas. Por ejemplo, si una impresora cuesta 400€ y esperas que funcione al menos 2000 horas antes de una gran renovación, su coste de amortización es de <strong>0,20€ por hora</strong>.',
    },
    {
      type: 'tip',
      title: 'Ahorra en Electricidad',
      html: '<p>Si imprimes mucho, considera cerrar tu impresora con una carcasa (enclosure). Esto no solo ayuda a imprimir materiales técnicos, sino que retiene el calor y hace que la cama caliente consuma mucha menos energía para mantener la temperatura.</p>',
    },
    {
      type: 'title',
      text: 'Estrategias de Precio de Venta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una vez que conoces tu coste base, debes decidir tu margen. En el mundo de la impresión 3D bajo demanda, un margen del 50-100% sobre el coste total es habitual para cubrir el riesgo de fallos inesperados y el beneficio comercial. Si la pieza requiere mucho trabajo manual de lijado y pintura, ese margen debe ser mayor.',
    },
    {
      type: 'summary',
      items: [
        'Fijación de precios por tiempo: Ideal para servicios de impresión puros.',
        'Fijación por gramo: Común para piezas masivas pero sencillas.',
        'Fijación por valor: Si el diseño es único, el precio no debería basarse solo en el coste, sino en lo que el cliente está dispuesto a pagar.',
      ],
    },
  ],
  faqTitle: 'Preguntas Frecuentes sobre Costes 3D',
  faq: faqData,
  bibliographyTitle: 'Bibliografía y Recursos',
  bibliography: [
    {
      name: 'PrusaPrinters: Calculando los costes de impresión 3D',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Material and Cost Estimation',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Guía de costes de fabricación aditiva',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
