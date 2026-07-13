import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'calculadora-caudal-volumetrico';
const title = 'Calculadora de Caudal Volumétrico: Límites Precisos del Hotend';
const description =
  'Calcula el caudal volumétrico de impresión 3D en mm3/s, compáralo con la capacidad de fusión del hotend e identifica cuándo la velocidad, el ancho de línea y la altura de capa causarán subextrusión.';

const faqData = [
  {
    question: '¿Qué es el caudal volumétrico en impresión 3D?',
    answer:
      'El caudal volumétrico es el volumen de plástico solicitado al hotend cada segundo. Se calcula como el ancho de línea multiplicado por la altura de capa multiplicado por la velocidad de impresión, obteniendo un resultado en mm3/s.',
  },
  {
    question: '¿Qué ocurre si el caudal volumétrico supera el límite del hotend?',
    answer:
      'El hotend no puede fundir completamente el plástico a la velocidad solicitada. La presión aumenta, la extrusión se vuelve inconsistente y la impresión puede presentar subextrusión, paredes débiles, superficies rugosas mate o saltos en el extrusor.',
  },
  {
    question: '¿Un V6 está realmente limitado a 15 mm3/s?',
    answer:
      '15 mm3/s es una constante de planificación práctica para un hotend estándar de zona de fusión bien ajustado. Los valores reales dependen del filamento, la temperatura, la boquilla, la potencia del calentador, el agarre del extrusor y la pérdida de calidad visual que sea aceptable.',
  },
  {
    question: '¿Por qué aumentar la altura de capa reduce la velocidad segura?',
    answer:
      'La altura de capa es un multiplicador directo en la ecuación de flujo. Si el ancho de línea y la capacidad del hotend permanecen iguales, duplicar la altura de capa reduce aproximadamente a la mitad la velocidad máxima antes de que el hotend alcance su límite de fusión.',
  },
];

const howToData = [
  { name: 'Elige una arquitectura de hotend', text: 'Selecciona un preset estándar V6, Volcano, Bambu de alto flujo o de flujo ultraalto para establecer la constante de capacidad de fusión.' },
  { name: 'Configura la geometría de línea', text: 'Ajusta el ancho de línea y la altura de capa para que coincidan con el perfil del laminador que planeas usar.' },
  { name: 'Ajusta la velocidad de impresión', text: 'Usa el control deslizante de velocidad fina para observar cómo el indicador de estrés se acerca a las zonas de flujo del 70%, 90% y crítico.' },
  { name: 'Lee la velocidad segura y la reserva', text: 'Compara los mm3/s actuales con la velocidad máxima segura y la reserva de tasa de fusión restante.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas del límite de caudal volumétrico',
    resultsAriaLabel: 'Resultados del límite de caudal volumétrico',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    hotendLabel: 'Arquitectura del hotend',
    lineWidthLabel: 'Ancho de línea',
    layerHeightLabel: 'Altura de capa',
    speedLabel: 'Velocidad de impresión',
    flowLabel: 'Caudal volumétrico',
    loadLabel: 'Carga térmica',
    maxSpeedLabel: 'Velocidad máxima segura',
    reserveLabel: 'Reserva de fusión',
    stateLabel: 'Estado del sistema',
    idealState: 'FLUJO IDEAL',
    limitState: 'LÍMITE DE VISCOSIDAD',
    criticalState: 'FLUJO CRÍTICO',
    idealHint: 'El hotend tiene suficiente margen térmico para una presión de fusión estable y una extrusión consistente.',
    limitHint: 'El perfil está cerca del borde de viscosidad. Pequeños cambios de material o temperatura pueden revelar subextrusión.',
    criticalHint: 'El flujo solicitado supera la ventana de fusión fiable. Reduce la velocidad, el ancho de línea o la altura de capa.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Cómo Funciona la Calculadora de Caudal Volumétrico Máximo', level: 2 },
    {
      type: 'paragraph',
      html: 'Una <strong>calculadora de caudal volumétrico máximo</strong> responde a una pregunta más útil que una simple calculadora de velocidad: ¿puede el hotend fundir la cantidad de plástico solicitada por el laminador? Los sistemas de movimiento pueden anunciar altas velocidades de desplazamiento, pero la extrusión está limitada por la transferencia térmica, la longitud de la zona de fusión, la presión de la boquilla, la viscosidad del filamento, la estabilidad del calentador y el agarre del extrusor. La calculadora modela la tasa de fusión solicitada como <code>Vf = ancho de línea x altura de capa x velocidad</code>, mostrando el resultado en <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'La herramienta compara ese flujo instantáneo con la capacidad del hotend seleccionado. Los hotends estándar tipo V6 se representan con una constante de tasa de fusión más baja, las arquitecturas de zona de fusión más larga como Volcano usan una constante más alta, y los hotends modernos de alto flujo usan valores mayores. El propósito no es prometer un límite universal de laboratorio, sino proporcionar una verificación técnica rápida antes de que un perfil del laminador solicite más plástico del que el hardware puede licuar de forma fiable.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Unidad usada para la capacidad de fusión del hotend', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Límite de la zona de confort para perfiles de producción estables', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Borde de viscosidad donde las fallas se vuelven sensibles', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Flujo crítico donde domina el riesgo de subextrusión', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Usa el ancho de línea del laminador, no el diámetro de la boquilla',
      html: '<p>La ecuación de flujo usa el ancho de línea de extrusión del laminador. Una boquilla de 0,4 mm suele imprimir una línea de 0,42-0,48 mm. Si la calculadora usa el diámetro de la boquilla en lugar del ancho de línea, puede subestimar la demanda de flujo y ocultar un perfil que ya está cerca del límite del hotend.</p>',
    },
    { type: 'title', text: 'Por Qué la Velocidad y la Tasa de Fusión No Son el Mismo Límite', level: 2 },
    {
      type: 'paragraph',
      html: 'Una impresora puede moverse a 300 mm/s y aún así fallar a 90 mm/s si el volumen de extrusión es demasiado alto. La velocidad solo cobra sentido después de incluir el ancho de línea y la altura de capa. Imprimir una línea de 0,45 mm con capas de 0,20 mm a 150 mm/s solicita 13,5 mm3/s. Imprimir una línea de 0,60 mm con capas de 0,30 mm a la misma velocidad solicita 27 mm3/s. La velocidad de movimiento es idéntica, pero el segundo perfil pide al hotend fundir el doble de plástico por segundo.',
    },
    {
      type: 'table',
      headers: ['Ancho de línea', 'Altura de capa', 'Velocidad', 'Flujo solicitado'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La subextrusión a menudo parece un problema de calibración',
      badge: 'Techo de flujo',
      html: '<p>Cuando un perfil supera la capacidad de fusión, los usuarios suelen perseguir la retracción, el pressure advance, la temperatura o los pasos del extrusor. Esos ajustes importan, pero no pueden hacer que una zona de fusión corta procese plástico ilimitado. Primero verifica que los mm3/s solicitados estén dentro de la ventana de capacidad del hotend.</p>',
    },
    {
      type: 'summary',
      title: 'Reglas de la ecuación de flujo',
      items: [
        'El ancho de línea, la altura de capa y la velocidad se multiplican directamente.',
        'Un pequeño aumento en dos parámetros geométricos puede saturar un hotend incluso cuando la velocidad parece moderada.',
        'La velocidad máxima segura es el límite del hotend dividido por el ancho de línea y la altura de capa.',
      ],
    },
    { type: 'title', text: 'Referencias de Rendimiento Térmico por Arquitectura de Hotend', level: 2 },
    {
      type: 'paragraph',
      html: 'La arquitectura del hotend controla cuánto tiempo permanece el filamento en la zona calentada y con qué eficiencia el calor se transfiere al núcleo del filamento. Una zona de fusión compacta tipo V6 es receptiva y ligera, pero su techo de flujo práctico es menor que el de una zona de fusión larga tipo Volcano. Los diseños cerámicos de alto flujo y ultraalto flujo aumentan el contacto del calentador, la longitud del recorrido de fusión o el área superficial interna para mantener tasas de extrusión más altas.',
    },
    {
      type: 'table',
      headers: ['Arquitectura de hotend', 'Capacidad de planificación', 'Mejor caso de uso', 'Precaución técnica'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Perfiles de calidad, velocidad moderada PLA/PETG, impresoras de escritorio estándar', 'Puede alcanzar límites de presión rápidamente con líneas anchas o capas altas.'],
        ['Revo High Flow', '18 mm3/s', 'Actualización de alto flujo con factor de forma compacto', 'Aún necesita validación de temperatura y material.'],
        ['Volcano', '25 mm3/s', 'Boquillas grandes, capas gruesas, piezas funcionales, perfiles rápidos de borrador', 'Las zonas de fusión largas pueden rezumar más y necesitan ajuste de retracción.'],
        ['Bambu HF', '32 mm3/s', 'Perfiles de impresora cerrada de alta velocidad y producción rápida de PLA', 'Los valores del perfil dependen en gran medida de la refrigeración y el comportamiento del filamento.'],
        ['Rapido UHF / similar', '45 mm3/s', 'Flujo extremo, anchos de extrusión grandes, rendimiento de producción', 'El par del extrusor, la potencia del calentador y la geometría de la boquilla se convierten en factores limitantes.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Zona de fusión corta', description: 'Compacta, receptiva, cabezal más ligero, menor almacenamiento térmico.', icon: 'mdi:thermometer-low', points: ['Buen control de detalle', 'Techo de flujo más bajo', 'Menos inercia térmica'] },
        { title: 'Zona de fusión larga', description: 'Más tiempo de contacto para que el filamento absorba calor antes de llegar a la boquilla.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Mayor mm3/s', 'Mejor salida en capas gruesas', 'Más gestión de rezume'] },
        { title: 'Núcleo de alto flujo', description: 'La geometría moderna aumenta el área de contacto o el acoplamiento del calentador sin simplemente extender la longitud.', icon: 'mdi:heat-wave', points: ['Respuesta rápida', 'Alto rendimiento', 'Necesita perfiles ajustados'] },
      ],
    },
    {
      type: 'message',
      title: 'Los valores de referencia son constantes de planificación',
      ariaLabel: 'Nota de referencia del hotend',
      html: '<p>Los límites preestablecidos son constantes de planificación deliberadamente conservadoras. La capacidad de fusión real varía con la formulación del filamento, el diámetro de la boquilla, el cartucho calefactor, la ubicación del termistor, la temperatura de extrusión y la cantidad de pérdida de calidad que la pieza pueda tolerar.</p>',
    },
    { type: 'title', text: 'Lectura de las Zonas del Indicador de Estrés', level: 2 },
    {
      type: 'paragraph',
      html: 'El indicador de estrés traduce los cálculos de flujo a un estado visual de funcionamiento. Por debajo del 70% de carga, el hotend tiene margen para la variación normal del filamento, la oscilación menor de temperatura y los cambios de velocidad a lo largo de la trayectoria. Entre el 70% y el 90%, la extrusión puede seguir siendo exitosa, pero el perfil se vuelve sensible. Por encima del 90%, la impresión está lo suficientemente cerca del techo de fusión como para que la variación del lote de material, la humedad o una boquilla ligeramente más fría puedan empujarla hacia una subextrusión visible.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: buen margen de producción para piezas repetibles y variación normal de material.',
        '70-90%: útil para pruebas de velocidad, pero valida paredes, superficies superiores y unión del relleno.',
        '90%+: tratar como zona crítica a menos que el filamento y el hotend se hayan medido con una torre de flujo.',
        'Por encima del 100%: reduce la velocidad, el ancho de línea o la altura de capa antes de buscar ajustes no relacionados del laminador.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Por qué el indicador puede ser mejor que un cuadro de advertencia',
      html: '<p>Un cuadro de advertencia le dice al usuario qué salió mal después de cruzar un umbral. Un indicador de estrés muestra la aproximación a ese umbral. Esto facilita detenerse en un margen operativo planificado en lugar de reaccionar solo cuando el perfil ya se ha vuelto inestable.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'El flujo crítico no es solo un problema de calidad superficial',
      badge: 'Resistencia mecánica',
      html: '<p>El filamento mal fundido puede unirse deficientemente entre recorridos y capas. Incluso cuando la pared exterior se ve aceptable, la unión del relleno, la adhesión del perímetro y la resistencia al impacto pueden verse afectadas si la tasa de flujo supera la capacidad de fusión.</p>',
    },
    { type: 'title', text: 'Cómo Usar la Calculadora con un Perfil del Laminador', level: 2 },
    {
      type: 'paragraph',
      html: 'Comienza con los valores reales del laminador para el ancho de línea, la altura de capa y la velocidad de la pared exterior o la velocidad general de impresión. Selecciona la arquitectura de hotend más cercana. Mueve el control deslizante de velocidad hasta que el indicador alcance tu carga preferida. La velocidad máxima segura mostrada es la velocidad que alcanzaría exactamente el límite del hotend para la geometría de línea actual. Para trabajo de producción, usa un valor inferior al máximo matemático.',
    },
    {
      type: 'paragraph',
      html: 'Si el indicador entra en la zona crítica, hay tres formas directas de reducir el flujo: bajar la velocidad, reducir el ancho de línea o reducir la altura de capa. La temperatura puede aumentar el flujo práctico para algunos materiales, pero también cambia el brillo, los puentes, el comportamiento en voladizos, el encordado y la precisión dimensional. La calculadora se centra intencionadamente en la geometría y la capacidad del hardware porque son las palancas más transparentes.',
    },
    {
      type: 'proscons',
      title: 'Formas de reducir la demanda de flujo',
      items: [
        { pro: 'Reducir la velocidad preserva la geometría de línea y la intención dimensional.', con: 'Aumenta el tiempo de impresión y puede reducir el rendimiento de la granja.' },
        { pro: 'Reducir la altura de capa mejora el acabado superficial y reduce mm3/s.', con: 'Aumenta el número de capas y puede alargar el trabajo a pesar del menor flujo.' },
        { pro: 'Reducir el ancho de línea puede disminuir la presión y mejorar el detalle fino.', con: 'Puede debilitar las paredes dispersas y aumentar el número de trayectorias.' },
      ],
    },
    {
      type: 'tip',
      title: 'Valida con una torre de flujo',
      html: '<p>Usa la calculadora para elegir un rango de velocidad realista, luego imprime una torre de prueba de caudal para el filamento y la temperatura específicos. El mejor límite de producción es el caudal más alto que aún proporcione paredes estables, brillo consistente, buena unión entre capas y sin saltos del extrusor.</p>',
    },
    { type: 'title', text: 'Síntomas de Exceder la Capacidad de Fusión del Hotend', level: 2 },
    {
      type: 'paragraph',
      html: 'Un perfil más allá del límite de fusión del hotend puede fallar gradualmente. Primero, las superficies superiores pueden mostrar trazos finos o pequeños huecos. Luego, las líneas de relleno se vuelven inconsistentes, los perímetros pierden brillo y las esquinas muestran una recuperación de presión débil. En casos más graves, el extrusor chasquea, muele el filamento, salta pasos o deja secciones quebradizas porque el filamento que entra en la boquilla no está completamente ablandado.',
    },
    {
      type: 'table',
      headers: ['Síntoma observado', 'Causa probable relacionada con el flujo', 'Respuesta de la calculadora'],
      rows: [
        ['Paredes delgadas a alta velocidad', 'Los mm3/s solicitados superan la capacidad de fusión en movimientos rectos largos', 'Reduce la velocidad hasta que la carga vuelva por debajo del 90%.'],
        ['Extrusión rugosa mate', 'El filamento no se calienta completamente en el núcleo', 'Reduce el flujo o aumenta la temperatura cuidadosamente para ese material.'],
        ['Chasquido del extrusor', 'La contrapresión supera el agarre del extrusor o el par del motor', 'Reduce el flujo inmediatamente e inspecciona la tensión del impulsor del filamento.'],
        ['Unión débil del relleno', 'El material sale demasiado frío o fundido de forma inconsistente', 'Usa más margen térmico para piezas estructurales.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Caudal volumétrico', definition: 'El volumen de plástico solicitado al hotend por segundo, expresado en mm3/s.' },
        { term: 'Capacidad de tasa de fusión', definition: 'La cantidad práctica de filamento que un hotend puede fundir de forma consistente manteniendo la calidad de impresión.' },
        { term: 'Ancho de línea', definition: 'El ancho de un cordón extruido en el laminador, normalmente ligeramente mayor que el diámetro de la boquilla.' },
        { term: 'Altura de capa', definition: 'El grosor vertical de cada capa impresa; un multiplicador directo en la demanda de flujo.' },
        { term: 'Reserva de flujo', definition: 'La diferencia entre la capacidad del hotend y el flujo solicitado actual.' },
      ],
    },
    {
      type: 'summary',
      title: 'Flujo de trabajo práctico del caudal',
      items: [
        'Calcula el flujo solicitado antes de aumentar la velocidad.',
        'Mantén los perfiles de producción por debajo de la zona crítica a menos que se validen mediante pruebas.',
        'Usa los presets de hotend como constantes de planificación y luego refina con calibración específica del material.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
