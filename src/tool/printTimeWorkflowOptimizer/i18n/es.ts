import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = 'optimizador-de-flujo-de-trabajo-de-impresion-3d';
const title = 'Optimizador de Flujo de Trabajo para Impresión 3D';
const description =
  'Compara dos configuraciones de impresión FDM lado a lado: número de capas, tiempo corregido, consumo de filamento, costo, equilibrio calidad-rendimiento y advertencias de velocidad del hardware.';


const faqData = [
  {
    question: '¿En qué se diferencia esto de una calculadora de tiempo de impresión simple?',
    answer:
      'Incluye la sobrecarga por complejidad del modelo, el tiempo de retracción por capa, el volumen ajustado por relleno, la masa de filamento, el costo del material y una comparación lado a lado entre escenarios, en lugar de solo dividir el volumen entre la velocidad.',
  },
  {
    question: '¿Puede reemplazar las estimaciones de tiempo del slicer?',
    answer:
      'No. Un slicer conoce las trayectorias exactas, la aceleración, el jerk, los desplazamientos, los soportes, las costuras y las retracciones. Este optimizador sirve para planificar y comparar configuraciones antes de comprometerse con un perfil en el slicer.',
  },
  {
    question: '¿Qué cambia el ajuste de complejidad?',
    answer:
      'Las complejidades baja, media y alta aplican coeficientes de sobrecarga por desplazamientos, pérdidas por aceleración, esquinas, islas y geometría con muchas retracciones. Una mayor complejidad incrementa el tiempo de impresión estimado.',
  },
  {
    question: '¿Por qué la herramienta advierte por encima de 100 mm/s?',
    answer:
      'Muchas impresoras de escritorio estándar pueden moverse a más de 100 mm/s, pero la consistencia de la extrusión, la tasa de fusión del hotend, el enfriamiento y los límites de aceleración pueden hacer que la alta velocidad sea arriesgada sin una calibración adecuada.',
  },
];

const howToData = [
  { name: 'Ingresa el tamaño y volumen del modelo', text: 'Añade la altura del modelo y un volumen estimado desde el CAD, la vista previa del slicer o una aproximación del volumen envolvente.' },
  { name: 'Ajusta el escenario A', text: 'Elige la primera altura de capa, velocidad, ancho de línea, relleno, material y complejidad del modelo.' },
  { name: 'Ajusta el escenario B', text: 'Modifica la segunda configuración para comparar una altura de capa más fina, velocidad más lenta o una estrategia de relleno diferente.' },
  { name: 'Lee el impacto en el flujo de trabajo', text: 'Compara tiempo, filamento, costo, número de capas, eficiencia, demanda de flujo y la compensación por reducción del 10% de velocidad.' },
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas del flujo de trabajo de impresion',
    resultsAriaLabel: 'Resultados del flujo de trabajo de impresion',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'EE. UU.',
    currencyLabel: 'Moneda',
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
    scenarioALabel: 'Escenario A',
    scenarioBLabel: 'Escenario B',
    modelHeightLabel: 'Altura del modelo',
    modelVolumeLabel: 'Volumen estimado',
    layerHeightLabel: 'Altura de capa',
    speedLabel: 'Velocidad',
    lineWidthLabel: 'Ancho de linea',
    infillLabel: 'Relleno',
    complexityLabel: 'Complejidad',
    complexityTooltip: 'La complejidad estima el tiempo muerto por aceleraciones, esquinas, retracciones, islas y desplazamientos cortos.',
    pieceTypeLabel: 'Tipo de pieza',
    solidPieceLabel: 'Maciza / continua',
    hollowPieceLabel: 'Hueca / muchas cavidades',
    materialLabel: 'Material',
    filamentPriceLabel: 'Precio del filamento',
    lowComplexity: 'Baja - caras simples',
    mediumComplexity: 'Media - geometría mixta',
    highComplexity: 'Alta - muchas islas',
    estimatedTimeLabel: 'Tiempo estimado',
    filamentLabel: 'Filamento',
    costLabel: 'Costo de material',
    layersLabel: 'Capas',
    efficiencyLabel: 'Eficiencia',
    flowLabel: 'Flujo volumétrico',
    flowTooltip: 'Si supera los 10-12 mm³/s en un hotend estándar, aumenta el riesgo de subextrusión.',
    flowUnit: 'mm³/s',
    qualityTradeoffLabel: 'Compensación de calidad',
    speedReductionLabel: '-10% velocidad',
    speedReductionAddsLabel: 'añade',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: 'para una superficie aproximadamente un 8% más limpia',
    hardwareWarning: 'La velocidad supera los 100 mm/s. Verifica el flujo del hotend, el enfriamiento, la aceleración y la calibración de extrusión para evitar subextrusión.',
    flowWarning: 'El flujo volumétrico supera la zona de confort típica de un hotend estándar.',
    bestValueLabel: 'Mejor valor',
    timeDeltaLabel: 'Diferencia de tiempo',
    costDeltaLabel: 'Diferencia de costo',
    materialDeltaLabel: 'Diferencia de material',
    winnerBadge: 'Mejor valor',
    scenarioPrefix: 'Escenario',
    inScenarioLabel: 'en',
    fasterDirection: 'más rápido',
    cheaperDirection: 'más económico',
    lighterDirection: 'más ligero',
    criterionAlignedLabel: 'Alineado con el mejor valor',
    criterionTradeoffLabel: 'Compensación por el mejor valor',
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
    { type: 'title', text: 'Cómo Estimar el Tiempo de Impresión 3D Antes de Slicear', level: 2 },

    {
      type: 'paragraph',
      html: 'Un <strong>estimador de tiempo de impresión 3D</strong> útil no puede basarse únicamente en dividir el volumen entre la velocidad. Las impresoras FDM invierten tiempo acelerando, frenando en las esquinas, retrayendo filamento, desplazándose entre islas, enfriando capas pequeñas y recuperando presión tras los cambios de dirección. El optimizador modela la pieza como volumen imprimible, ancho de línea, altura de capa, velocidad, número de capas y un coeficiente de complejidad para que la planificación temprana se acerque más a las decisiones reales del flujo de trabajo.',
    },
    {
      type: 'paragraph',
      html: 'El tiempo base de extrusión se calcula a partir del volumen sobre el caudal volumétrico: velocidad multiplicada por ancho de línea y altura de capa. Luego, la herramienta aplica un coeficiente de corrección por complejidad del modelo y añade una tolerancia fija de retracción por capa. Esto no pretende igualar la precisión de un slicer, pero ofrece una comparación más honesta entre una configuración de borrador a 0.20 mm y una configuración de calidad a 0.12 mm que una calculadora lineal.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Sobrecarga baja para bloques simples y superficies lisas', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Sobrecarga alta para muchas islas y retracciones', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Tolerancia de retracción planificada añadida por capa', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Umbral de advertencia para impresoras estándar por riesgo de extrusión', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa el volumen del slicer cuando sea posible',
      html: '<p>La mejor entrada de volumen es el volumen de material del slicer o del CAD para el modelo, no el cuadro delimitador exterior. Los cuadros delimitadores incluyen espacio vacío alrededor de curvas, agujeros, asas y cavidades, por lo que pueden exagerar el tiempo y el filamento.</p>',
    },
    { type: 'title', text: 'Por Qué la Altura de Capa Cambia el Tiempo de Forma Tan Significativa', level: 2 },
    {
      type: 'paragraph',
      html: 'La altura de capa afecta al tiempo de impresión de dos formas. Primero, cambia el caudal volumétrico: una capa de 0.12 mm a la misma velocidad y ancho extruye un 40% menos de plástico por segundo que una capa de 0.20 mm. Segundo, aumenta el número de capas, por lo que la sobrecarga de cambio de capa, las retracciones, el asentamiento de la presión y las decisiones de enfriamiento ocurren con más frecuencia. Por eso, cambios cosméticos pequeños pueden convertir una impresión de cinco horas en una de ocho horas.',
    },
    {
      type: 'table',
      headers: ['Altura de capa', 'Uso típico', 'Consecuencia en el flujo de trabajo'],
      rows: [
        ['0.28-0.32 mm', 'Piezas de borrador, accesorios grandes, verificaciones rápidas', 'Pocas capas y alto caudal, pero líneas de capa visibles.'],
        ['0.18-0.22 mm', 'Impresión general con PLA y PETG', 'Tiempo, resistencia y calidad superficial equilibrados para muchas impresoras de escritorio.'],
        ['0.10-0.14 mm', 'Miniaturas, superficies curvas, piezas visibles para el consumidor', 'Trabajos mucho más largos porque el caudal disminuye y el número de capas aumenta.'],
        ['Por debajo de 0.10 mm', 'Casos especiales de acabado', 'A menudo limitado por la precisión de la máquina, el enfriamiento y un rendimiento visual decreciente.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Las capas finas pueden ser más lentas de lo que sugiere la fórmula',
      badge: 'Enfriamiento y tiempo mínimo de capa',
      html: '<p>Los modelos pequeños pueden alcanzar el tiempo mínimo de capa en el slicer. Cuando esto ocurre, la impresora reduce la velocidad para que el plástico se enfríe, incluso si la fórmula volumétrica indica que la máquina podría moverse más rápido.</p>',
    },
    {
      type: 'summary',
      title: 'Reglas de la altura de capa',
      items: [
        'Una altura de capa menor reduce el flujo por segundo a la misma velocidad.',
        'Más capas añaden sobrecarga repetida incluso cuando el volumen del modelo no cambia.',
        'La mejor comparación se basa en escenarios: perfil de borrador versus perfil de calidad.',
      ],
    },
    { type: 'title', text: 'Sobrecarga por Complejidad del Modelo y Tiempo Muerto', level: 2 },
    {
      type: 'paragraph',
      html: 'El tiempo muerto es la diferencia entre la extrusión teórica y el tiempo real del trabajo. Una pared similar a un jarrón tiene poco desplazamiento y pocas retracciones. Una carcasa mecánica con muchos agujeros, salientes, etiquetas, nervaduras e islas separadas obliga a la impresora a arrancar y parar muchas veces. Los límites de aceleración hacen que la boquilla puede que nunca alcance la velocidad configurada en segmentos cortos, por lo que la velocidad media real de movimiento es inferior al valor del control deslizante.',
    },

    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Complejidad baja', description: 'Modelos lisos, contornos continuos, pocas islas y desplazamiento interno limitado.', icon: 'mdi:shape-outline', points: ['Menos sobrecarga', 'Velocidad estable', 'Pocas retracciones'] },
        { title: 'Complejidad media', description: 'Piezas funcionales típicas con agujeros, curvas mixtas, cambios de relleno y desplazamiento moderado.', icon: 'mdi:cog-outline', highlight: true, points: ['Valor predeterminado equilibrado', 'Alguna pérdida por desplazamiento', 'Base de cotización útil'] },
        { title: 'Complejidad alta', description: 'Superficies texturizadas, muchas características separadas, interfaces de soporte y secciones con muchas retracciones.', icon: 'mdi:transit-connection-variant', points: ['Alta sobrecarga', 'Mayor riesgo de hilos', 'Tiempo de reloj real más largo'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Coeficiente de sobrecarga', definition: 'Un multiplicador que aproxima los desplazamientos, la pérdida por aceleración, las retracciones y otros tiempos no capturados por el cálculo de extrusión constante.' },
        { term: 'Flujo volumétrico', definition: 'La cantidad de plástico que pasa por la boquilla por segundo, calculada como velocidad por ancho de línea por altura de capa.' },
        { term: 'Número de capas', definition: 'La altura del modelo dividida por la altura de capa, redondeada hacia arriba porque las capas finales parciales siguen requiriendo una pasada.' },
        { term: 'Subextrusión', definition: 'Un defecto en el que el hotend o el extrusor no pueden suministrar suficiente plástico fundido para la velocidad y la geometría de línea solicitadas.' },
      ],
    },
    {
      type: 'message',
      title: 'Trata la complejidad como un parámetro de calibración',
      ariaLabel: 'Nota sobre el coeficiente de complejidad',
      html: '<p>Si tu slicer reporta sistemáticamente tiempos más largos que este optimizador para modelos similares, aumenta la complejidad. Si tu impresora de accionamiento directo con aceleración ajustada supera la estimación, redúcela para futuras planificaciones.</p>',
    },
    { type: 'title', text: 'Consumo de Filamento, Costo y Relleno', level: 2 },
    {
      type: 'paragraph',
      html: 'El tiempo es solo una parte de la decisión del flujo de trabajo. El peso del filamento y el costo importan al cotizar piezas, planificar trabajos por lotes o decidir si vale la pena un perfil de detalle fino que ocupe la impresora. El optimizador estima el volumen imprimible corregido preservando una proporción de cáscara y escalando la región interna según el porcentaje de relleno, y luego multiplica ese volumen por la densidad del material.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Usa PLA alrededor de 1.24 g/cm³ y PETG alrededor de 1.27 g/cm³ para una planificación rápida de materiales.',
        'Aumenta el volumen estimado cuando soportes, faldones, balsas o estructuras de purga formen parte del trabajo.',
        'Un relleno menor reduce el filamento y el tiempo, pero las paredes, las capas superiores e inferiores siguen consumiendo material.',
        'Para lotes de producción, compara las estimaciones de la calculadora con el peso real del carrete utilizado y ajusta futuras cotizaciones.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Ejemplo de decisión en el flujo de trabajo',
      html: '<p>Una pieza de PLA de 120 cm³ a 0.20 mm de capa puede ser aceptable para una plantilla de taller, mientras que la versión de 0.12 mm tiene mejor aspecto pero ocupa la impresora durante más tiempo. Comparar el tiempo y el costo del material lado a lado hace visible la compensación antes de comprometer la máquina.</p>',
    },
    {
      type: 'proscons',
      title: 'Optimizar velocidad versus calidad',
      items: [
        { pro: 'Una mayor velocidad puede liberar capacidad de la impresora para más trabajos por día.', con: 'Puede provocar campaneo, esquinas débiles, mal enfriamiento y límites de flujo del hotend.' },
        { pro: 'Una menor velocidad suele mejorar el acabado superficial y la consistencia dimensional.', con: 'Aumenta el tiempo en cola y puede hacer que piezas comerciales pequeñas sean menos rentables.' },
        { pro: 'Una menor altura de capa mejora las superficies curvas y las miniaturas.', con: 'Multiplica el número de capas y la sobrecarga repetida de la máquina.' },
      ],
    },
    { type: 'title', text: 'Advertencias de Hardware y Límites Prácticos de Velocidad', level: 2 },
    {
      type: 'paragraph',
      html: 'Un valor de velocidad en el slicer no es una garantía de que la boquilla mantendrá esa velocidad en todas partes. Las impresoras Cartesianas estándar con cama móvil, los extrusores Bowden antiguos, los hotends con zona de fusión corta y el enfriamiento débil de pieza pueden tener dificultades por encima de 100 mm/s a menos que la aceleración, el jerk, el pressure advance, la temperatura y la calibración de flujo estén ajustados. La advertencia no significa que la impresión vaya a fallar; significa que la configuración solicitada debe verificarse frente al comportamiento del hardware.',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa probable', 'Respuesta en la planificación'],
      rows: [
        ['Paredes finas o huecos', 'El hotend no puede fundir suficiente plástico o el extrusor patina', 'Reduce la velocidad, aumenta la temperatura con precaución, o reduce el ancho de línea/altura de capa.'],
        ['Campaneo cerca de esquinas', 'La aceleración y la vibración del bastidor dominan', 'Reduce la aceleración o disminuye la velocidad en paredes visibles.'],
        ['Características pequeñas curvadas', 'El enfriamiento no es suficiente', 'Reduce la velocidad, aumenta el ventilador, o imprime varias copias.'],
        ['Hilos en piezas complejas', 'Muchos desplazamientos y retracciones', 'Aumenta la sobrecarga de complejidad y ajusta la retracción/temperatura.'],
      ],
    },

    {
      type: 'diagnostic',
      variant: 'info',
      title: 'El flujo volumétrico es el verdadero límite de velocidad',
      badge: 'Verifica mm³/s',
      html: '<p>Dos perfiles con la misma velocidad de movimiento pueden demandar tasas de fusión diferentes. Una capa de 0.30 mm y una línea de 0.50 mm a 80 mm/s necesitan mucho más plástico por segundo que una capa de 0.12 mm y una línea de 0.42 mm a la misma velocidad.</p>',
    },
    {
      type: 'summary',
      title: 'Usa el optimizador antes de slicear',
      items: [
        'Compara dos perfiles candidatos en lugar de adivinar a partir de un solo número.',
        'Observa el número de capas, el flujo volumétrico y las advertencias de hardware en conjunto.',
        'Conserva la última interacción localmente para que la planificación repetida pueda continuar desde la configuración anterior.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
