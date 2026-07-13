import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'estimador-deshidratacion-filamento';
const title = 'Estimador de Deshidratación de Filamento: Guía de Regeneración Térmica';
const description = 'Modela la saturación higroscópica del filamento con cinética de adsorción exponencial, exposición a la humedad, tipo de polímero y temperatura de la cámara de secado.';

const faqData = [
  {
    question: '¿Cómo calcula la saturación de humedad el estimador de deshidratación de filamento?',
    answer: 'Utiliza un modelo de saturación exponencial: la absorción máxima del material multiplicada por uno menos e elevado al coeficiente cinético negativo por el tiempo de exposición, y luego escalado por la humedad relativa ambiente.',
  },
  {
    question: '¿Por qué el nylon necesita más secado que el PLA?',
    answer: 'El nylon tiene una mayor capacidad de humedad y un coeficiente de adsorción más rápido que el PLA, por lo que alcanza un contenido de agua perjudicial antes bajo la misma humedad y tiempo de exposición.',
  },
  {
    question: '¿Una temperatura de secado más alta siempre significa un secado más seguro?',
    answer: 'No. Una temperatura más alta acelera la deshidratación, pero cada polímero tiene un rango seguro de temperatura en la cámara. Superarlo puede ablandar el filamento, deformar la bobina o alterar el comportamiento de impresión.',
  },
  {
    question: '¿Qué significa el indicador de riesgo de hidrólisis?',
    answer: 'Compara el contenido de agua estimado con el umbral crítico del material y activa la advertencia cuando la humedad absorbida es lo suficientemente alta como para aumentar la formación de burbujas, hilos, capas débiles o daños en las cadenas de polímero.',
  },
];

const howToData = [
  { name: 'Elegir el polímero', text: 'Seleccione PLA, PETG, ABS, ASA, TPU, Nylon, PC o PVA para que el modelo cargue la capacidad de equilibrio y el coeficiente cinético correctos.' },
  { name: 'Ingresar la humedad de almacenamiento', text: 'Establezca la humedad relativa a la que estuvo expuesta la bobina, utilizando la medida de humedad de la habitación, caja o taller.' },
  { name: 'Establecer el tiempo de exposición', text: 'Ingrese cuántos días pasó el filamento fuera de una caja seca sellada o un secador activo.' },
  { name: 'Seleccionar la temperatura de secado', text: 'Utilice una temperatura de cámara que esté dentro del rango seguro para el polímero y el material de la bobina.' },
  { name: 'Iniciar el ciclo de secado', text: 'Inicie el temporizador de secado persistente y luego deje que la visualización de la cámara se vacíe gradualmente a medida que se elimina la carga de humedad estimada.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    materialLabel: 'Polímero',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Policarbonato',
    materialPvaLabel: 'PVA soporte',
    humidityLabel: 'Humedad relativa',
    exposureLabel: 'Tiempo de exposición',
    dryTempLabel: 'Cámara de secado',
    spoolMassLabel: 'Masa de la bobina',
    calculateLabel: 'Iniciar ciclo de secado',
    pauseCycleLabel: 'Pausar ciclo',
    resumeCycleLabel: 'Reanudar ciclo',
    resetCycleLabel: 'Reiniciar ciclo',
    saturationLabel: 'Contenido de humedad',
    absorbedLabel: 'Agua absorbida',
    dryingTimeLabel: 'Ciclo de secado',
    remainingTimeLabel: 'Tiempo restante',
    cycleProgressLabel: 'Progreso del ciclo',
    hydrolysisLabel: 'Riesgo de hidrólisis',
    stableLabel: 'Estable',
    watchLabel: 'Zona de vigilancia',
    criticalLabel: 'Crítico',
    chamberReadyLabel: 'Cámara lista',
    chamberRunningLabel: 'Ciclo de secado en curso',
    chamberCompleteLabel: 'Humedad purgada',
    curveLabel: 'Curva de adsorción',
    kineticLabel: 'Cinética de saturación',
    equilibriumLabel: 'Aproximación exponencial a la saturación de equilibrio',
    daysUnit: 'días',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'h',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Entendiendo la cinética de adsorción: por qué el Nylon no se comporta como el PLA', level: 2 },
    { type: 'paragraph', html: 'Un <strong>estimador de tiempo de secado de filamento</strong> serio no puede tratar la humedad como una línea recta. Los polímeros higroscópicos no absorben el mismo porcentaje de agua todos los días de manera indefinida. Se aproximan a un estado de equilibrio: rápido al principio, más lento cerca de la saturación y con una fuerte dependencia de la humedad relativa ambiente. Es por eso que una bobina que se deja al 70% de humedad relativa durante dos días no está simplemente la mitad de húmeda que una que se deja durante cuatro días. La primera parte de la exposición suele producir la mayor ganancia de humedad, especialmente en Nylon, TPU, PVA y otros materiales con grupos polares que atraen moléculas de agua.' },
    { type: 'paragraph', html: 'Este modelo calcula el contenido de humedad con <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. Donde <code>S_max</code> es la capacidad de absorción en equilibrio del polímero, <code>k</code> es la velocidad de adsorción, <code>t</code> es el tiempo de exposición y <code>RH</code> escala el resultado al entorno de almacenamiento. El resultado no es un certificado de laboratorio; es un modelo de planificación de ingeniería que explica por qué el mismo taller puede dejar el PLA listo para imprimir mientras hace que el Nylon chisporrotee, forme burbujas, genere hilos y pierda resistencia en la unión de las capas.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Capacidad de equilibrio planificada para PLA' },
      { value: '3.2%', label: 'Capacidad de equilibrio planificada para Nylon PA' },
      { value: '5.8%', label: 'Capacidad de equilibrio planificada para filamento de soporte PVA' },
      { value: 'Escalado RH', label: 'La humedad ambiente multiplica la curva de saturación' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Los síntomas de humedad son síntomas del proceso', badge: 'Pista de impresión', html: 'Los sonidos de chasquidos, las burbujas de vapor, los cambios de superficie satinada a rugosa, el exceso de hilos, las paredes débiles y el extrudido turbio no son problemas aleatorios del laminador. Suelen indicar que el agua se está convirtiendo en vapor en la zona de fusión o que la hidrólisis ha reducido la longitud de la cadena de polímero antes de la deposición.' },

    { type: 'title', text: 'Cómo el modelo de saturación exponencial cambia las decisiones de secado', level: 2 },
    { type: 'paragraph', html: 'Las calculadoras lineales suelen pedir un material y devolver un número fijo de horas. Eso funciona como un recordatorio rápido, pero oculta la pregunta real: ¿mucha humedad ha absorbido realmente el filamento? Una bobina almacenada en una caja seca sellada al 15% de humedad relativa durante tres semanas puede necesitar poca o ninguna regeneración. El mismo polímero que se deja abierto en un garaje húmedo durante un fin de semana puede requerir un ciclo completo en la cámara. El modelado de saturación vincula la recomendación de secado al historial de exposición en lugar de tratar todas las bobinas como si estuvieran igual de húmedas.' },
    { type: 'table', headers: ['Entrada', 'Significado físico', 'Efecto en la estimación'], rows: [
      ['Humedad relativa', 'Actividad del agua alrededor de la bobina', 'Una mayor humedad relativa eleva el objetivo de equilibrio y el porcentaje final absorbido.'],
      ['Tiempo de exposición', 'Cuánto tiempo se ha permitido que progrese la difusión', 'Los primeros días son los más importantes; la curva se ralentiza a medida que se acerca a la saturación.'],
      ['Coeficiente del material', 'Qué tan rápido se aproxima un polímero al equilibrio', 'El Nylon y el PVA se mueven más rápido que el PLA o el ASA.'],
      ['Temperatura de secado', 'Energía térmica disponible para la desorción', 'Una temperatura de cámara segura más alta acorta el ciclo estimado.'],
      ['Masa de la bobina', 'Cantidad de polímero presente', 'El porcentaje es el estado del material; los gramos absorbidos se escalan con la masa de la bobina.'],
    ] },
    { type: 'tip', title: 'Estime el entorno, no la aplicación del clima', html: 'Use la humedad dentro de la caja de almacenamiento, la carcasa de la impresora, el armario o el taller donde realmente estuvo el filamento. Un informe meteorológico local puede diferir mucho de la humedad junto a una impresora caliente, un estante del sótano o un contenedor sellado con desecante.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Por qué el anillo se ralentiza cerca de la saturación', html: 'El anillo visual sigue el mismo comportamiento exponencial que la ecuación. Se llena rápidamente cuando el polímero está seco porque el gradiente de humedad es fuerte. Cerca del equilibrio, el gradiente se debilita, por lo que la velocidad de llenado aparente disminuye. Esa ralentización se debe a la física, no a un truco de animación.' },

    { type: 'title', text: 'Rangos de la calculadora de deshidratación de filamentos por material', level: 2 },
    { type: 'paragraph', html: 'Las recomendaciones de secado deben respetar el polímero y la bobina. El PLA puede ablandarse o deformarse cuando se sobrecalienta. El PETG puede tolerar más calor, pero aun así se beneficia de un control conservador de la cámara. El Nylon normalmente requiere un ciclo más caliente y largo porque absorbe más agua y la retiene con más fuerza. El PVA es extremadamente sensible a la humedad y puede volverse imposible de imprimir si se deja expuesto. El PC a menudo imprime mejor después del secado, incluso cuando no parece estar obviamente húmedo. El estimador utiliza estas diferencias para convertir una calculadora genérica de <strong>deshidratación de filamentos</strong> en una guía específica para cada material.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Respuesta higroscópica baja a moderada', description: 'El PLA, el ABS y el ASA generalmente absorben menos agua y más lentamente, pero aun así sufren una pérdida de calidad después de una larga exposición a la humedad.', points: ['Ciclos de secado más cortos', 'Menor humedad en equilibrio', 'Los síntomas pueden aparecer gradualmente'] },
      { title: 'Alta respuesta higroscópica', description: 'El Nylon, el TPU, el PVA y algunos grados de PC requieren un almacenamiento más activo y una regeneración más disciplinada.', points: ['Mayor masa de agua absorbida', 'Saturación inicial más rápida', 'Mayor riesgo de burbujas y capas débiles'] },
    ] },
    { type: 'table', headers: ['Material', 'Objetivo típico de la cámara', 'Nota de planificación'], rows: [
      ['PLA', '40-55 C', 'Evite el calor excesivo porque el PLA y algunos núcleos de bobinas pueden deformarse.'],
      ['PETG', '55-70 C', 'A menudo mejora la consistencia de la superficie y reduce los hilos después de varias horas.'],
      ['ABS / ASA', '65-85 C', 'Menor absorción que el Nylon pero se beneficia del almacenamiento en seco.'],
      ['TPU', '45-60 C', 'Los grados flexibles pueden absorber suficiente humedad como para espumar o generar hilos.'],
      ['Nylon PA', '70-90 C', 'Normalmente necesita un secado activo antes de impresiones funcionales críticas.'],
      ['PVA', '40-55 C', 'Material de soporte sensible a la humedad; guárdelo sellado inmediatamente.'],
    ] },
    { type: 'proscons', title: 'Tabla de secado fija frente a monitor de saturación', items: [
      { pro: 'Una tabla fija es rápida cuando solo necesita un ciclo predeterminado.', con: 'No puede distinguir una bobina guardada en una caja seca de una expuesta al aire húmedo.' },
      { pro: 'El modelado de saturación explica por qué la exposición inicial puede ser severa.', con: 'Aún depende de coeficientes de material aproximados y del historial de almacenamiento.' },
      { pro: 'Una entrada de temperatura de secado refleja la configuración real de la cámara.', con: 'No reemplaza los límites de temperatura seguros del fabricante del filamento.' },
      { pro: 'Los gramos absorbidos hacen que el resultado sea tangible para bobinas completas y parciales.', con: 'La masa de la bobina no revela si las vueltas exteriores están más húmedas que el núcleo.' },
    ] },

    { type: 'title', text: 'Riesgo de hidrólisis: cuando el filamento húmedo se daña', level: 2 },
    { type: 'paragraph', html: 'La humedad no es solo un problema de calidad de impresión. A temperaturas de extrusión, el agua absorbida puede contribuir a la hidrólisis en polímeros susceptibles. La hidrólisis rompe las cadenas moleculares, reduciendo la tenacidad, el alargamiento y la fiabilidad. El efecto es especialmente importante para los materiales de ingeniería utilizados en soportes, accesorios, engranajes, conductos y piezas que soportan carga. Una bobina húmeda aún puede extruirse, pero la pieza puede fallar antes porque el polímero se degradó químicamente durante el proceso.' },
    { type: 'glossary', items: [
      { term: 'Higroscopia', definition: 'La tendencia de un material a atraer y retener agua del aire circundante.' },
      { term: 'Humedad en equilibrio', definition: 'El contenido de humedad al que se aproxima un polímero después de suficiente tiempo a una humedad dada.' },
      { term: 'Coeficiente de adsorción', definition: 'Un valor cinético simplificado que controla qué tan rápido asciende la curva de saturación.' },
      { term: 'Desorción', definition: 'El proceso inverso: el agua que sale del polímero durante el secado por calor.' },
      { term: 'Hidrólisis', definition: 'Escisión química de cadenas causada por el agua bajo calor, relevante para varios polímeros de ingeniería.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Una superficie seca no garantiza un núcleo seco', badge: 'Límite de difusión', html: 'El filamento se seca desde el exterior hacia el interior. Una ráfaga corta de calor puede mejorar la superficie mientras que las vueltas internas de una bobina densa siguen húmedas. Las bobinas grandes, los laterales de cartón y el filamento enrollado firmemente pueden ralentizar la regeneración.' },
    { type: 'message', title: 'La regla visual', html: 'Cuando el anillo cambia de azul claro a un tono gris azulado apagado, la herramienta marca una transición de la gestión de humedad normal a una zona de control de hidrólisis. Ese es el punto en el que el secado se convierte en parte del control de calidad, no solo en una limpieza estética.' },

    { type: 'title', text: 'Construyendo un flujo de trabajo de secado de filamento fiable', level: 2 },
    { type: 'paragraph', html: 'Una guía útil de saturación de materiales higroscópicos combina la predicción con la rutina. Mida la humedad de almacenamiento, etiquete las bobinas con las fechas de apertura, guarde los polímeros sensibles en cajas selladas, recargue el desecante antes de que se sature y seque antes de imprimir piezas donde el rendimiento mecánico sea importante. El mejor flujo de trabajo evita ciclos repetidos de secado y humedad, ya que cada ciclo de calor innecesario puede envejecer el material, deformar las bobinas o desperdiciar tiempo de producción.' },
    { type: 'list', items: [
      'Seque el Nylon, PVA, TPU y PC antes de impresiones largas cuando el historial de almacenamiento sea incierto.',
      'Mantenga también el PLA y el PETG sellados; una menor absorción no significa absorción cero.',
      'Utilice un termómetro independiente dentro del secador porque las temperaturas de la pantalla pueden ser optimistas.',
      'Permita que el filamento se alimente desde una caja seca durante impresiones de varias horas en habitaciones húmedas.',
      'Reemplace o recargue el desecante cuando las perlas indicadoras o los sensores de humedad muestren que la caja está subiendo.',
      'Evite secar por encima de la temperatura de transición vítrea o del rango de ablandamiento del filamento y de la bobina.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'La cámara de secado es un sistema de regeneración', html: 'La cámara debe proporcionar calor estable, flujo de aire y una vía para que salga la humedad. Calentar una caja sellada sin ventilación ni desecante simplemente puede trasladar el agua del filamento al aire de la cámara y viceversa.' },
    { type: 'summary', title: 'Lista de verificación de interpretación práctica', items: [
      'El porcentaje de humedad describe el estado del material; los gramos absorbidos describen la carga de agua en la bobina.',
      'La alta humedad y los materiales rápidos crean una saturación inicial pronunciada.',
      'El tiempo de secado debe aumentar con la saturación y disminuir con la temperatura segura de la cámara.',
      'El riesgo de hidrólisis es más importante en la extrusión a alta temperatura y en piezas funcionales.',
      'La ficha técnica del fabricante prevalece sobre cualquier estimación de secado genérica.',
    ] },

    { type: 'title', text: 'Respuesta SEO: ¿cuánto tiempo debo secar el filamento de la impresora 3D?', level: 2 },
    { type: 'paragraph', html: 'El tiempo de secado correcto depende del material, la exposición a la humedad, la masa de la bobina y la temperatura de la cámara. El PLA puede necesitar solo unas pocas horas después de una exposición moderada, el PETG y el TPU a menudo necesitan más tiempo, y el Nylon o el PVA pueden requerir un ciclo de regeneración sustancial después del almacenamiento en condiciones húmedas. Un flujo de trabajo sólido de <strong>contenido de humedad en impresión 3D</strong> estima primero el agua absorbida, luego selecciona una temperatura segura para el secador y el tiempo suficiente para la desorción. Eso es más fiable que aplicar un único número universal a cada polímero.' },
    { type: 'diagnostic', variant: 'success', title: 'El mejor caso de uso para este monitor', badge: 'Preflight de ingeniería', html: 'Utilice el estimador antes de impresiones críticas, lotes de producción, polímeros de ingeniería costosos o cualquier trabajo donde una superficie defectuosa, una capa quebradiza o una pieza poco resistente cueste más que un ciclo de secado.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
