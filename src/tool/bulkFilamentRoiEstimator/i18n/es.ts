import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'calculadora-roi-filamento-granel';
const title = 'Calculadora de ROI para Filamento a Granel';
const description = 'Compara carretes de filamento de 1kg contra opciones de 3kg, 5kg o personalizadas, con riesgo de humedad, ahorro real y formato de moneda local.';

const faqData = [
  {
    question: '¿Es siempre más barato un carrete de 5kg que comprar cinco de 1kg?',
    answer: 'No. Solo es más barato cuando el coste por gramo es menor y puedes consumir el material antes de que la humedad afecte a la calidad de impresión. Un consumo lento puede convertir un descuento por volumen en desperdicio.',
  },
  {
    question: '¿Por qué la calculadora resta una penalización por riesgo?',
    answer: 'La penalización estima la pérdida de valor cuando el tiempo esperado de consumo supera tu ventana segura de almacenamiento. No es una conversión de divisas ni un modelo de laboratorio de humedad; es un ajuste de riesgo para la planificación.',
  },
  {
    question: '¿Necesito tasas de cambio en vivo?',
    answer: 'No. La herramienta usa una tabla local de tipos de cambio aproximados para convertir los precios al cambiar de moneda. Mantiene la equivalencia sin contactar con un servidor, así que las decisiones finales de compra deben basarse en el precio que muestra tu tienda o banco.',
  },
  {
    question: '¿Qué tiempo de almacenamiento seguro debo indicar para PLA, PETG, TPU o Nylon?',
    answer: 'Usa el periodo durante el cual puedes mantener ese material seco en tu entorno. El PLA puede tolerar más tiempo que el Nylon o el TPU, pero una habitación abierta, un clima húmedo o un mal sellado de la bolsa pueden acortar la ventana segura drásticamente.',
  },
];

const howToData = [
  {
    name: 'Introduce el precio del carrete estándar',
    text: 'Escribe el precio del carrete de 1kg que comprarías normalmente. El peso del carrete estándar puede ajustarse si tu proveedor usa otro formato.',
  },
  {
    name: 'Indica la oferta a granel',
    text: 'Elige 3kg, 5kg o un peso personalizado y escribe el precio completo de ese carrete grande en la misma moneda.',
  },
  {
    name: 'Modela el riesgo de almacenamiento',
    text: 'Añade tu consumo mensual y el tiempo máximo de almacenamiento que consideres fiable antes de que la humedad, la fragilidad o el esfuerzo de secado se conviertan en un coste real.',
  },
  {
    name: 'Lee el ahorro real',
    text: 'Usa el ahorro real como señal de compra porque incluye tanto el descuento por volumen como la penalización por degradación.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Moneda',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    standardTitle: 'Carrete estándar',
    bulkTitle: 'Carrete a granel',
    consumptionTitle: 'Consumo y almacenamiento',
    standardWeightLabel: 'Peso estándar',
    standardPriceLabel: 'Precio del carrete estándar',
    bulkWeightLabel: 'Peso a granel',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6.6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Otro',
    bulkPriceLabel: 'Precio del carrete a granel',
    customWeightLabel: 'Peso personalizado',
    monthlyUseLabel: 'Consumo mensual',
    safeStorageLabel: 'Ventana de almacenamiento seguro',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'meses',
    realSavingsLabel: 'Ahorro real tras riesgo',
    grossSavingsLabel: 'Ahorro bruto',
    riskPenaltyLabel: 'Penalización por humedad',
    breakEvenLabel: 'Tiempo de consumo',
    viabilityLabel: 'Viabilidad',
    tableMetricLabel: 'Métrica',
    tableStandardLabel: 'Carrete de 1kg',
    tableStandardImperialLabel: 'Carrete de 2.2lb',
    tableBulkLabel: 'Carrete a granel',
    costPerGramMetric: 'Coste por gramo',
    costPerOunceMetric: 'Coste por onza',
    totalSpoolMetric: 'Precio del carrete',
    usableWindowMetric: 'Ventana de consumo',
    profitableLabel: 'Rentable',
    neutralLabel: 'Neutral',
    poorLabel: 'Mala relación calidad-precio',
    humidityWarningTitle: 'Riesgo de degradación por humedad',
    humidityWarning: 'Riesgo de degradación: comprar este carrete puede hacerte perder dinero si no tienes un sistema de secado o almacenamiento hermético.',
    safeMessage: 'El riesgo de almacenamiento está dentro de tu ventana segura. Mantén el carrete sellado y seco para conservar el ahorro esperado.',
  },
  seo: [
    {
      type: 'title',
      text: 'Cómo decidir si el filamento a granel es realmente más barato',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un carrete de filamento de 3kg o 5kg resulta atractivo porque el precio por kilogramo suele ser menor que el de un carrete individual de 1kg. El error está en comparar solo el total de la compra. Una comparación correcta normaliza ambas ofertas en <strong>coste por gramo</strong>, multiplica la diferencia por la cantidad de material que realmente comprarás y luego se pregunta si el material seguirá siendo imprimible hasta que lo termines.',
    },
    {
      type: 'paragraph',
      html: 'La fórmula es simple: divide el precio de cada carrete por su peso en gramos. Si un carrete de 1kg cuesta 24.99 y uno de 5kg cuesta 89.99, el carrete de 1kg sale a 0.02499 por gramo y el de granel a 0.017998 por gramo. El ahorro aparente es la diferencia por gramo multiplicada por 5000 gramos. Ese número es útil, pero sigue siendo incompleto si el carrete va a estar abierto durante meses.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Masa de referencia para un carrete de filamento típico de escritorio' },
        { value: '3-5kg', label: 'Formato habitual a granel donde los descuentos se hacen visibles' },
        { value: '0 APIs', label: 'La equivalencia de moneda usa tasas locales aproximadas en vez de una llamada a servidor' },
      ],
    },
    {
      type: 'table',
      headers: ['Pregunta', 'Qué indicar', 'Por qué importa'],
      rows: [
        ['¿Qué compro normalmente?', 'El precio del carrete de 1kg', 'Establece el coste base por gramo.'],
        ['¿Cuál es la oferta a granel?', 'Precio total y peso a granel', 'Crea el coste por gramo con descuento.'],
        ['¿Cuánto consumo al mes?', 'Kg consumidos al mes', 'Estima cuánto tiempo estará el carrete almacenado.'],
        ['¿Cómo es mi almacenamiento?', 'Meses seguros antes de degradación', 'Define cuándo comienza la penalización por riesgo.'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué la humedad cambia el cálculo del ROI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El filamento no es un equivalente de efectivo que reposa seguro en un estante. Muchos polímeros absorben la humedad del aire, y el filamento húmedo puede imprimir con burbujas, hilos, extrusión quebradiza, superficies opacas, adherencia débil entre capas y flujo inconsistente. La velocidad exacta depende del material, la humedad, el embalaje y de si el carrete se guarda en una caja seca, una bolsa sellada o un soporte abierto.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'El modo de fallo oculto del carrete a granel',
      badge: 'Riesgo de planificación',
      html: 'Un carrete de 5kg puede ser una mala compra incluso cuando el precio por gramo es excelente. Si tu impresora consume 0.5kg al mes y tu ventana de almacenamiento seguro es de 3 meses, ese carrete necesita unos 10 meses para terminarse. El descuento debe ser lo suficientemente grande como para cubrir el coste adicional de secado, sellado, impresiones fallidas o el riesgo de material desechado.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Usuario rápido',
          description: 'Una pequeña granja de impresión, un creador de cosplay o un lote de producción puede consumir de 3kg a 5kg rápidamente. El filamento a granel suele tener sentido porque el tiempo de almacenamiento es corto.',
          points: ['Alto consumo mensual', 'Baja exposición en estante', 'El descuento se convierte en dinero ahorrado'],
        },
        {
          title: 'Usuario hobby intermitente',
          description: 'Un usuario que imprime los fines de semana o hace reparaciones ocasionales puede tardar muchos meses en terminar un carrete grande. El riesgo de humedad puede borrar el descuento.',
          points: ['Bajo consumo mensual', 'Vida larga del carrete abierto', 'El almacenamiento seco importa más'],
        },
        {
          title: 'Usuario de materiales técnicos',
          description: 'Materiales como Nylon, TPU, mezclas de PC y algunos grados de PETG suelen necesitar una disciplina de secado más estricta. Las compras a granel deberían ir acompañadas de equipos de almacenamiento.',
          points: ['Mayor sensibilidad a la humedad', 'Caja seca recomendada', 'El umbral de penalización debe ser conservador'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Qué significa el ahorro real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La herramienta muestra primero el ahorro bruto y luego resta una penalización por degradación cuando el tiempo estimado de consumo supera la ventana de almacenamiento seguro. Esta penalización es deliberadamente conservadora en lugar de una predicción de laboratorio. Representa la realidad económica de que el filamento húmedo o envejecido genera costes no obvios: electricidad para secado, manipulación extra, impresiones fallidas, obstrucciones de boquilla, defectos superficiales y la posibilidad de que parte del carrete deje de ser apto para trabajos visibles o estructurales.',
    },
    {
      type: 'list',
      items: [
        'Ahorro real positivo significa que el descuento por volumen sobrevive al ajuste por riesgo de almacenamiento.',
        'Neutral significa que la decisión depende de la comodidad, la disponibilidad de color, el envío y de si ya tienes una caja seca.',
        'Mala relación calidad-precio significa que el carrete a granel no es más barato por gramo o que el ahorro ajustado por riesgo es negativo.',
        'El mensaje de advertencia aparece cuando los meses de consumo superan la ventana de almacenamiento seguro que introdujiste.',
      ],
    },
    {
      type: 'proscons',
      title: 'Compensaciones al comprar filamento a granel',
      items: [
        { pro: 'Menor coste por gramo para impresión de alto volumen.', con: 'Más capital inmovilizado en un solo material, color y lote de proveedor.' },
        { pro: 'Menos cambios de carrete durante producciones largas.', con: 'Una masa expuesta mayor puede degradarse antes de consumirse.' },
        { pro: 'Menos residuos de embalaje por kilogramo.', con: 'Los carretes grandes pueden necesitar soportes más resistentes o soportes externos.' },
        { pro: 'Útil para trabajos repetitivos en granja y producción por lotes.', con: 'Mala opción para colores raros, materiales experimentales o uso hobby lento.' },
      ],
    },
    {
      type: 'title',
      text: 'Cómo elegir una ventana de almacenamiento seguro',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La ventana de almacenamiento seguro no es una constante universal del material. Es la cantidad de tiempo que tú personalmente confías en que el filamento seguirá siendo imprimible en tus condiciones de almacenamiento. Una bolsa sellada con desecante fresco en una habitación seca es muy diferente de un carrete abierto junto a una impresora en un garaje húmedo. Para una decisión de compra conservadora, introduce el número de meses tras los cuales empezarías a secar el carrete antes de impresiones importantes.',
    },
    {
      type: 'table',
      headers: ['Situación', 'Comportamiento sugerido', 'Motivo'],
      rows: [
        ['Carrete abierto en habitación húmeda', 'Usa una ventana segura corta', 'La exposición a la humedad es continua.'],
        ['Caja hermética con desecante', 'Usa una ventana segura más larga', 'El carrete está protegido entre impresiones.'],
        ['Caja seca alimentando la impresora', 'Usa una ventana más larga pero realista', 'Tanto la impresión como el almacenamiento están controlados.'],
        ['Nylon, TPU, PC o soporte soluble', 'Sé conservador', 'Estos materiales pueden volverse problemáticos para la impresión rápidamente cuando están húmedos.'],
        ['PLA usado para prototipos toscos', 'La tolerancia al riesgo puede ser mayor', 'Los problemas cosméticos menores pueden ser aceptables para piezas no críticas.'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa la calculadora antes de que termine la oferta',
      html: 'Las ofertas relámpago suelen hacer que los carretes a granel parezcan urgentes. Introduce el precio de oferta, el precio con envío incluido si es posible, y tu consumo mensual realista. Si el tiempo de consumo es mayor que tu ventana de almacenamiento, la oferta debe ser lo suficientemente buena como para cubrir el riesgo adicional.',
    },
    {
      type: 'title',
      text: 'Conversión de moneda sin APIs de tipo de cambio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora funciona del lado del cliente por diseño. No obtiene tipos de cambio en vivo, pero el selector de moneda aplica un multiplicador de conversión local cuando el usuario cambia de divisa. Esto significa que un carrete introducido como 24.99 EUR se convierte en un equivalente aproximado en USD, GBP, JPY u otra moneda compatible, en lugar de limitarse a cambiar el símbolo. Las tasas son estimaciones de planificación, por lo que los precios de caja, comisiones de tarjeta, impuestos y diferencias de conversión propias de cada mercado deben verificarse antes de comprar.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Coste por gramo', definition: 'El precio del carrete dividido entre los gramos totales de filamento. Es la unidad normalizada usada para una comparación justa.' },
        { term: 'Ahorro bruto', definition: 'La ventaja de precio antes de considerar la humedad o el riesgo de almacenamiento.' },
        { term: 'Penalización por riesgo', definition: 'Una deducción de planificación aplicada cuando el carrete tarda más en consumirse que la ventana de almacenamiento seguro.' },
        { term: 'Ahorro real', definition: 'Ahorro bruto menos la penalización por riesgo. Es la principal señal de compra.' },
        { term: 'Ventana de consumo', definition: 'Peso del carrete a granel dividido entre el consumo mensual estimado.' },
      ],
    },
    {
      type: 'summary',
      title: 'Regla práctica de compra',
      items: [
        'Compra a granel cuando el ahorro real sea claramente positivo y la ventana de consumo encaje con tu configuración de almacenamiento.',
        'Evita comprar a granel cuando adquieras un color raro que quedará inactivo tras un proyecto.',
        'Trata el equipo de secado como parte del sistema de filamento a granel, no como un lujo opcional para polímeros sensibles a la humedad.',
        'Compara precios con envío incluido, no solo los precios de página de producto, cuando el envío difiera entre tamaños de carrete.',
      ],
    },
    {
      type: 'message',
      title: 'Conclusión',
      html: 'Un carrete a granel es rentable cuando se alinean tres condiciones: menor coste por gramo, consumo mensual suficiente y un almacenamiento que mantenga el filamento imprimible. Si falla una condición, el descuento aparente puede convertirse en una pérdida de material disfrazada.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
