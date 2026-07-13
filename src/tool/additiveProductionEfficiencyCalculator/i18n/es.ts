import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'calculadora-eficiencia-produccion-aditiva';
const title = 'Calculadora de Eficiencia de Producción Aditiva';
const description =
  'Compare la impresión por lotes vs. la impresión secuencial con tiempo de impresión, sobrecarga de precalentamiento, transiciones de desplazamiento, tiempo de purga, riesgo estadístico de fallo y una recomendación automática de viabilidad.';

const faqData = [
  {
    question: '¿Cuándo es la impresión por lotes más rápida que la impresión secuencial?',
    answer:
      'La impresión por lotes suele ser más rápida cuando el precalentamiento es significativo, las piezas caben de forma segura en la placa de construcción, la distancia de desplazamiento entre piezas es moderada y la tasa de fallos histórica es lo suficientemente baja como para que el riesgo combinado del lote se mantenga por debajo del umbral crítico.',
  },
  {
    question: '¿Por qué se puede recomendar la impresión secuencial incluso si tarda más?',
    answer:
      'La impresión secuencial limita la pérdida de una pieza fallida. Si el riesgo del lote calculado como 1 - (1 - tasa de fallos)^N supera el umbral crítico, la calculadora recomienda la impresión secuencial para proteger la cola de producción.',
  },
  {
    question: '¿Reemplaza la calculadora las estimaciones del slicer?',
    answer:
      'No. Un slicer conoce las trayectorias exactas, aceleraciones, anchos de extrusión, enfriamiento y holgura de colisión. Esta calculadora sirve para la planificación de producción antes del slicing, especialmente al comparar un trabajo de cama completa contra trabajos repetidos de una sola pieza.',
  },
  {
    question: '¿Qué tasa de fallos debo introducir?',
    answer:
      'Use su propio historial de taller para material, impresora, geometría y condiciones del operador similares. Si aún no lo registra, comience de forma conservadora con 2-5% para producción FDM ajustada y auméntelo para materiales nuevos, trabajos largos o accesorios mal validados.',
  },
];

const howToData = [
  { name: 'Ingrese la cantidad', text: 'Establezca el número total de piezas necesarias para la ejecución de producción.' },
  { name: 'Añada los tiempos', text: 'Ingrese el tiempo de impresión por pieza, tiempo de precalentamiento, distancia de transición, velocidad de desplazamiento y tiempo de purga o estabilización.' },
  { name: 'Establezca el riesgo histórico', text: 'Use un porcentaje de fallos de trabajos comparables y elija el riesgo máximo aceptable del lote.' },
  { name: 'Lea la recomendación', text: 'Compare el tiempo total, tiempo ahorrado, eficiencia relativa, sobrecarga de transición y riesgo estadístico del lote.' },
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas de eficiencia de producción aditiva',
    resultsAriaLabel: 'Resultados de eficiencia de producción aditiva',
    visualizerAriaLabel: 'Visualización generativa de riesgo y diseño de cama',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    piecesLabel: 'Piezas',
    unitPrintTimeLabel: 'Tiempo de impresión por pieza (min)',
    preheatTimeLabel: 'Tiempo de precalentamiento (min)',
    transitionDistanceLabel: 'Transición media',
    travelSpeedLabel: 'Velocidad de desplazamiento',
    failureRateLabel: 'Tasa de fallos histórica',
    purgeTimeLabel: 'Purga / estabilización (min)',
    criticalRiskLabel: 'Riesgo crítico del lote',
    batchLabel: 'Impresión por lotes',
    sequentialLabel: 'Impresión secuencial',
    recommendationLabel: 'Estrategia recomendada',
    savingsLabel: 'Ahorro de tiempo absoluto',
    efficiencyLabel: 'Eficiencia relativa',
    riskLabel: 'Riesgo de fallo del lote',
    layoutLabel: 'Coreografía de la placa de construcción',
    transitionLabel: 'Sobrecarga de transición',
    batchWinsLabel: 'Lote',
    sequentialWinsLabel: 'Secuencial',
    riskOverrideLabel: 'anulación por riesgo',
    fasterLabel: 'ahorrado',
    slowerLabel: 'extra',
    lowRiskLabel: 'Riesgo de lote bajo',
    moderateRiskLabel: 'Riesgo de lote moderado',
    criticalRiskStatusLabel: 'Riesgo de lote crítico',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
  },
  seo: [
    { type: 'title', text: 'Impresión por Lotes vs. Impresión Secuencial: Lo que Mide la Calculadora', level: 2 },
    {
      type: 'paragraph',
      html: 'Elegir entre <strong>impresión por lotes vs. impresión secuencial</strong> no es solo una cuestión de llenar la placa de construcción. Un lote de cama completa puede ahorrar tiempo de calentamiento y reducir la intervención del operador, pero concentra el riesgo de producción en una ventana de exposición larga. La impresión secuencial repite la sobrecarga de configuración, pero aísla los fallos para que una pieza defectuosa no contamine automáticamente el valor de toda la placa de construcción. Esta calculadora convierte esa compensación en números: minutos totales, transiciones de desplazamiento, eficiencia relativa y riesgo estadístico del lote.',
    },
    {
      type: 'paragraph',
      html: 'La fórmula del lote es <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. La fórmula secuencial es <code>Tseq = N x (Tc + Tp + Tpurge)</code>. La fórmula de riesgo es <code>Riesgobatch = 1 - (1 - Pfallo)^N</code>. Estas ecuaciones son intencionadamente transparentes porque la planificación de producción es más fácil cuando la razón detrás de una recomendación es visible en lugar de estar oculta en una caja negra.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Ciclo de precalentamiento en modo lote', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Ciclos de precalentamiento en modo secuencial', icon: 'mdi:repeat' },
        { value: '60', label: 'Segundos usados para normalizar desplazamiento a minutos', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Modelo compuesto de fallo de lote', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Use una definición consistente de fallo',
      html: '<p>Una tasa de fallos solo es útil si el taller define el fallo de manera consistente. Decida si incluye rechazos cosméticos, valores atípicos dimensionales, cicatrices de soporte, fallos de primera capa, enredos de bobina, interrupciones de energía y retiradas por el operador. Mezclar definiciones hace que el modelo de riesgo parezca preciso mientras se alimenta con datos ruidosos.</p>',
    },
    { type: 'title', text: 'Cómo la Impresión por Lotes Ahorra Tiempo', level: 2 },
    {
      type: 'paragraph',
      html: 'La impresión por lotes normalmente gana en utilización de la máquina cuando el tiempo de precalentamiento es grande en comparación con el tiempo de impresión de una sola pieza. Calentar la cama y la boquilla una vez para una ejecución de 24 piezas puede evitar 23 ciclos repetidos de calentamiento. En un entorno de granja esto importa porque el calentamiento es capacidad muerta: la impresora consume tiempo de calendario, energía y atención del operador antes de producir cualquier geometría vendible.',
    },
    {
      type: 'paragraph',
      html: 'El término de desplazamiento evita que el modelo finja que los diseños por lotes son gratuitos. Cada pieza puede añadir una transición sin impresión donde la boquilla cruza la placa, evita islas, realiza movimientos de peinado o se desplaza al siguiente límite del objeto. La calculadora usa la distancia media de transición y la velocidad de desplazamiento para estimar esta sobrecarga en minutos. El término es pequeño en diseños compactos y más visible cuando las piezas están dispersas en una cama grande.',
    },
    {
      type: 'table',
      headers: ['Variable del lote', 'Significado en producción', 'Error de planificación que previene'],
      rows: [
        ['N', 'Total de piezas en la ejecución', 'Tratar una cama de diez piezas como diez trabajos aislados sin precalentamiento compartido.'],
        ['Tp', 'Tiempo de impresión de una pieza completa', 'Usar el tiempo de capa solo de una característica pequeña en lugar de una estimación de pieza terminada.'],
        ['Tc', 'Tiempo de calentamiento de cama y boquilla', 'Ignorar el tiempo antes de que comience la extrusión al cotizar la capacidad de la cola.'],
        ['Dtrans', 'Distancia media entre piezas', 'Suponer que una cama densa no tiene penalización de movimiento sin extrusión.'],
        ['Vtravel', 'Velocidad de desplazamiento del cabezal', 'Olvidar que los perfiles de desplazamiento lentos hacen que las matrices dispersas sean menos eficientes.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'El tiempo del lote es más sensible al precalentamiento y la cantidad',
      badge: 'Planificación de capacidad',
      html: '<p>Si el precalentamiento es de 12 minutos y el trabajo contiene 30 piezas, el modo secuencial gasta 360 minutos solo repitiendo el calentamiento. El modo lote invierte esos 12 minutos una vez. Por eso la misma impresora puede parecer dramáticamente más productiva cuando las piezas pequeñas se anidan cuidadosamente.</p>',
    },
    { type: 'title', text: 'Por Qué la Impresión Secuencial Sigue Ganando en Trabajos Riesgosos', level: 2 },
    {
      type: 'paragraph',
      html: 'La impresión secuencial puede parecer más lenta porque la impresora repite el precalentamiento y el tiempo de purga o estabilización para cada unidad. La ventaja es la contención. Si la pieza 17 falla en un plan secuencial, las 16 piezas anteriores pueden estar ya completas y retiradas. Si la pieza 17 falla en un lote debido a arrastre de boquilla, pérdida de adhesión, fluencia térmica o un problema de material, el objeto fallido puede golpear piezas vecinas o hacer que el operador deseche toda la placa.',
    },
    {
      type: 'paragraph',
      html: 'El modelo de riesgo combina la probabilidad de fallo histórica en el número de piezas. Una tasa de fallo del 3% por pieza no significa que un lote de 24 piezas tenga un riesgo del 3%. La probabilidad de que cada pieza tenga éxito es <code>(1 - 0.03)^24</code>, y la probabilidad de que al menos una pieza falle es el complemento. Esto hace que los lotes grandes sean menos atractivos cuando el proceso no es estable.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impresión por lotes',
          description: 'Mejor cuando el proceso es estable, las piezas tienen buena adhesión, el diseño de la cama es seguro contra colisiones y el tiempo de precalentamiento domina el cronograma.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Un ciclo de calentamiento', 'Alto rendimiento', 'Mayor exposición a fallos compartidos'],
        },
        {
          title: 'Impresión secuencial',
          description: 'Mejor cuando los rechazos son costosos, los trabajos son altos, los materiales son sensibles o el usuario desea aislar cada pieza de la siguiente.',
          icon: 'mdi:format-list-numbered',
          points: ['Contención de fallos', 'Más sobrecarga repetida', 'Requiere planificación de holgura'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Compensación del riesgo de producción',
      items: [
        { pro: 'La impresión por lotes reduce el tiempo de calentamiento inactivo y puede terminar piezas pequeñas repetitivas en una ejecución no supervisada.', con: 'Un fallo de adhesión o extrusión puede amenazar toda la placa y consumir una larga ventana de recuperación del operador.' },
        { pro: 'La impresión secuencial facilita validar una unidad, retirarla y continuar con menos pérdida acumulada.', con: 'El calentamiento y estabilización repetidos pueden consumir más tiempo que la geometría real en piezas pequeñas.' },
        { pro: 'Un lote puede simplificar el embalaje porque todas las piezas terminan juntas.', con: 'Un lote largo expone cada unidad a la misma deriva ambiental, problema de bobina o período de degradación térmica.' },
      ],
    },
    { type: 'title', text: 'Elección de un Umbral de Riesgo Crítico del Lote', level: 2 },
    {
      type: 'paragraph',
      html: 'El umbral de riesgo crítico es la línea donde la calculadora cambia la recomendación de optimización de tiempo a protección de viabilidad. Un taller de prototipos puede tolerar un 45% de riesgo de lote si el material es barato y el operador está experimentando. Una granja de producción que envía piezas a clientes puede usar 15-25% para materiales comunes y umbrales más bajos para trabajos nocturnos, polímeros de ingeniería costosos o piezas con mucha mano de obra de posprocesamiento.',
    },
    {
      type: 'table',
      headers: ['Umbral', 'Buen caso de uso', 'Interpretación'],
      rows: [
        ['10-20%', 'Piezas caras, trabajos nocturnos, pedidos de clientes de alto valor', 'Proteger la fiabilidad incluso cuando el modo lote ahorra tiempo.'],
        ['25-35%', 'Producción FDM ajustada normal con material conocido', 'Umbral equilibrado para ahorro de tiempo y exposición a rechazos.'],
        ['40-60%', 'Prototipos internos o accesorios baratos', 'Acepta más riesgo para liberar capacidad de la impresora más rápido.'],
        ['Más del 60%', 'Solo exploración', 'Útil para ver el potencial de tiempo, pero débil como regla de viabilidad de producción.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Cómo estimar su tasa de fallos inicial',
      html: '<p>Revise las últimas 50 a 200 impresiones comparables en la misma familia de impresoras. Cuente los trabajos que necesitaron reimpresión, rescate manual o rechazo del cliente. Divida los fallos por el total de intentos, luego separe por material y geometría cuando existan suficientes datos. Los soportes de PLA, clips de PETG, carcasas de ASA y juntas de TPU no deberían compartir un número de riesgo genérico.</p>',
    },
    {
      type: 'summary',
      title: 'Reglas del umbral de riesgo',
      items: [
        'Reduzca el umbral cuando el material, la fecha límite o el costo de posprocesamiento sean altos.',
        'Auméntelo solo cuando las piezas fallidas sean baratas y la cola se beneficie de un agrupamiento agresivo.',
        'Recalcule después de cambios de proceso como una nueva superficie de cama, boquilla, proveedor de filamento o temperatura de la carcasa.',
      ],
    },
    { type: 'title', text: 'Transiciones de Desplazamiento, Movimiento del Cabezal y Eficiencia del Diseño', level: 2 },
    {
      type: 'paragraph',
      html: 'Las transiciones de desplazamiento son el costo oculto de la eficiencia de impresión in situ. Un slicer puede saltar de una pieza a otra muchas veces por capa, especialmente cuando múltiples objetos comparten la misma altura Z. La distancia media de transición no necesita ser perfecta; solo necesita representar si el diseño es compacto, moderadamente espaciado o extendido sobre la superficie de construcción. Una matriz compacta con transiciones medias de 25 mm se comporta de manera muy diferente a una disposición de cama completa con saltos de 180 mm.',
    },
    {
      type: 'paragraph',
      html: 'La velocidad de desplazamiento debe reflejar el perfil real, no el máximo publicitario de la máquina. Los límites de aceleración, la configuración del firmware, las opciones de evitar cruzar perímetros, el Z-hop y la estrategia de peinado pueden hacer que el desplazamiento efectivo sea más lento de lo que sugiere el campo del slicer. Si una máquina usa desplazamiento conservador para primeras capas frágiles o piezas altas, reduzca el valor para evitar sobrestimar la eficiencia del lote.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Impresión por lotes', definition: 'Imprimir múltiples copias u objetos en un trabajo compartido en la placa de construcción.' },
        { term: 'Impresión secuencial', definition: 'Imprimir un objeto a la vez antes de pasar al siguiente objeto, a menudo con restricciones de holgura alrededor del cabezal.' },
        { term: 'Distancia de transición', definition: 'Distancia media de desplazamiento sin extrusión necesaria para moverse entre piezas o zonas de impresión.' },
        { term: 'Tiempo de purga o estabilización', definition: 'Tiempo extra por unidad secuencial para cebado, asentamiento térmico, limpieza o reinicio seguro para el operador.' },
        { term: 'Riesgo crítico', definition: 'Probabilidad máxima aceptable de que al menos una pieza del lote falle.' },
      ],
    },
    {
      type: 'message',
      title: 'La holgura de colisión importa en el modo secuencial real',
      ariaLabel: 'Advertencia de holgura en impresión secuencial',
      html: '<p>Muchos slicers restringen la impresión secuencial porque el hotend, el conducto del ventilador, el pórtico X o las pinzas de la cama pueden colisionar con piezas terminadas. Use esta calculadora para planificar, luego verifique la holgura secuencial dentro del slicer antes de confirmar el trabajo.</p>',
    },
    { type: 'title', text: 'Cómo Usar los Resultados para la Optimización de la Fabricación Aditiva', level: 2 },
    {
      type: 'paragraph',
      html: 'El ahorro de tiempo absoluto muestra cuántos minutos gana o pierde el modo lote frente al modo secuencial. El porcentaje de eficiencia relativa normaliza esa diferencia con respecto al tiempo secuencial, lo que es útil al comparar trabajos de diferentes tamaños. Ahorrar 20 minutos en una ejecución de 40 minutos es operativamente enorme; ahorrar 20 minutos en una ejecución de 30 horas puede no justificar un riesgo mayor.',
    },
    {
      type: 'paragraph',
      html: 'La recomendación combina velocidad y viabilidad. Si el lote es más rápido y el riesgo está por debajo del umbral, la herramienta recomienda lote. Si el riesgo del lote supera el umbral, se recomienda secuencial incluso cuando es más lento. Si el lote es más lento porque la sobrecarga de transición es grande o el precalentamiento es pequeño, el secuencial gana en tiempo sin necesidad de anulación por riesgo.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use la calculadora antes de anidar una placa de construcción grande para que el plan de producción se base en el tiempo de cola y la exposición a fallos.',
        'Ejecute una comparación hipotética con una tasa de fallos más baja después de la calibración para ver cómo la mejora del proceso cambia la estrategia.',
        'Aumente el tiempo de purga cuando los trabajos secuenciales requieran limpieza, cebado, inspección de la cama o intervención del operador entre unidades.',
        'Reduzca la velocidad de desplazamiento cuando use Z-hop, evitar cruzar perímetros, piezas altas frágiles o límites de aceleración del firmware.',
        'Registre los resultados reales de las ejecuciones y actualice la tasa de fallos en lugar de confiar en una regla general genérica.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No optimice solo para el tiempo de reloj más rápido',
      badge: 'Costo operativo',
      html: '<p>Un lote fallido de 12 horas puede costar más que el tiempo mostrado en la pantalla de la máquina. Incluya material, electricidad, diagnóstico del operador, pérdida de espacio en la cola, retraso en el posprocesamiento e impacto en la fecha límite del cliente al decidir si el ahorro de tiempo vale el riesgo compuesto.</p>',
    },
    { type: 'title', text: 'Ejemplos Prácticos para Flujos de Trabajo de Calculadora de Tiempo de Impresión 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Para clips pequeños de PLA con un tiempo de impresión de 20 minutos por pieza y 10 minutos de calentamiento, la impresión por lotes a menudo domina. El precalentamiento compartido ahorra una gran fracción del trabajo, y la colocación compacta mantiene baja la sobrecarga de transición. Si el taller tiene una tasa de fallos del 1-2%, el riesgo puede seguir siendo aceptable para cantidades moderadas. Este es el caso de uso clásico de alto rendimiento para la impresión por lotes.',
    },
    {
      type: 'paragraph',
      html: 'Para soportes altos de PETG con adhesión marginal, la impresión secuencial puede ser más segura. Incluso si el lote ahorra dos horas, una esquina curvada puede causar impacto de boquilla, desplazamiento de capa o desprendimiento del objeto que arruine las piezas vecinas. La calculadora expone la diferencia entre un ahorro de tiempo tentador y un perfil de riesgo que ya no se ajusta a la intención de producción.',
    },
    {
      type: 'paragraph',
      html: 'Para decisiones de eficiencia de impresión in situ, ejecute la misma pieza dos veces: una con la tasa de fallos actual y otra con la tasa objetivo después de la calibración. Si reducir los fallos del 6% al 2% cambia la recomendación de secuencial a lote, la mejor inversión puede ser la limpieza de la cama, el ajuste de la primera capa, el filamento seco, la estabilidad de la carcasa o una estrategia validada de brim en lugar de comprar otra impresora.',
    },
    {
      type: 'summary',
      title: 'Lista de verificación de decisiones',
      items: [
        'Lote cuando el precalentamiento es grande, el diseño es compacto y la tasa de fallos histórica es baja.',
        'Secuencial cuando cada rechazo es costoso, alto, riesgoso o probable que dañe a los vecinos.',
        'Ajuste el proceso cuando una pequeña reducción en la tasa de fallos desbloquee una gran eficiencia de lote.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
