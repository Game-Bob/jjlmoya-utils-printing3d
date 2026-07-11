import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'optimizador-de-perimetros-y-paredes',
  title: 'Optimizador de Perímetros y Paredes',
  description: 'Calcula el número exacto de perímetros y un ancho de línea seguro para que el espesor de pared impreso coincida con el modelo CAD sin huecos internos.',
  ui: {
    controlsAriaLabel: 'Entradas del optimizador de perímetros de pared',
    resultsAriaLabel: 'Resultados del optimizador de perímetros de pared',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    tooltipLabel: 'Más información',
    nozzleLabel: 'Diámetro de boquilla',
    nozzleHelp: 'Diámetro físico del orificio de la boquilla. El ancho de línea seguro se limita al 80-120% de este valor.',
    lineWidthLabel: 'Ancho de línea',
    lineWidthHelp: 'Ancho de extrusión del slicer para paredes externas e internas.',
    cadThicknessLabel: 'Grosor de pared CAD',
    cadThicknessHelp: 'Grosor de pared diseñado que debe reproducirse con perímetros completos.',
    commonNozzlesLabel: 'Tamaños de boquilla comunes',
    infillStrategyLabel: 'Estrategia de relleno de pared',
    perimeterFirstLabel: 'Perímetros primero',
    solidInfillFallbackLabel: 'Relleno sólido de respaldo',
    solidInfillTip: 'Consejo: si prefieres no añadir más perímetros, usa relleno sólido o gap fill fiable en paredes finas para que el slicer no deje huecos internos.',
    copySolidInfillNote: 'Si mantienes menos perímetros, usa relleno sólido o gap fill verificado para interiores de paredes finas.',
    visualLabel: 'Sección transversal que muestra los perímetros dentro del grosor de pared CAD',
    cadEnvelopeLabel: 'Envoltura de pared CAD',
    lineLabel: 'Línea de extrusión',
    recommendedPerimetersLabel: 'Perímetros recomendados',
    realThicknessLabel: 'Grosor real',
    residualLabel: 'Error residual',
    verdictLabel: 'Veredicto de precisión',
    exactLabel: 'Exacto',
    adjustLabel: 'Requiere ajuste de ancho de línea',
    impossibleLabel: 'Imposible con esta boquilla',
    adjustedWidthLabel: 'Ancho de línea ajustado',
    noAdjustmentLabel: 'Sin ajuste',
    slicerBlockLabel: 'Configuración del slicer',
    perimetersUnitLabel: 'perímetros',
    copyLabel: 'Copiar ajustes',
    copiedLabel: 'Bloque del slicer copiado.',
    safeRangeLabel: 'Rango seguro de ancho de línea',
    compareLabel: 'Opciones de perímetros más cercanas',
    perimetersColumn: 'Perímetros',
    lineWidthColumn: 'Ancho de línea',
    realThicknessColumn: 'Grosor real',
    errorColumn: 'Error',
    messageExact: 'El ancho de línea seleccionado está a menos de 0,05 mm de la pared CAD. Esta es una pared buena solo con perímetros.',
    messageAdjust: 'El ancho actual deja un hueco medible. Usa el ancho de línea ajustado para cerrar la pared exactamente con perímetros enteros.',
    messageTooThin: 'La pared CAD es más fina que el diámetro de la boquilla. Rediseña la pared, usa una boquilla más pequeña o acepta una característica no estructural de una sola línea.',
    messageOutsideRange: 'Ningún ajuste en el rango seguro del 80-120% del diámetro de boquilla puede cerrar esta pared exactamente. Rediseña la pared CAD o cambia el tamaño de boquilla.',
    mmUnit: 'mm',
    inchUnit: 'pul',
  },
  seo: [
    { type: 'title', text: 'Por qué el grosor de pared debe coincidir con perímetros enteros', level: 2 },
    {
      type: 'paragraph',
      html: 'Los slicers FDM construyen una pared a partir de cordones de extrusión discretos. Una pared CAD de 1,20 mm no es una instrucción sólida continua; se convierte en uno, dos, tres o más perímetros según el ancho de línea, el diámetro de boquilla y las reglas del slicer. Si la cuenta no cierra, el slicer debe elegir entre dejar un hueco interno estrecho, insertar un camino fino de gap fill, sobreextruir una región o cambiar silenciosamente el orden de las trayectorias. Las piezas funcionales se resienten porque la pared que parecía sólida en CAD puede contener una costura débil o un cordón inconsistente en su interior.',
    },
    {
      type: 'paragraph',
      html: 'La ecuación útil es simple: <strong>grosor real de pared = número de perímetros × ancho de línea</strong>. La dificultad está en elegir valores que sigan siendo imprimibles. Un ancho de línea normalmente puede moverse un poco por debajo o por encima del diámetro de la boquilla, pero no puede ser arbitrario. Este optimizador busca números enteros de perímetros, mide el error residual contra el grosor CAD y propone un ajuste del ancho de línea solo cuando el ancho exacto se mantiene dentro de un rango conservador del 80-120% del diámetro de boquilla.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'umbral de precisión usado para el veredicto' },
        { value: '80-120%', label: 'banda segura de ancho de línea alrededor del diámetro de boquilla' },
        { value: 'n × ancho', label: 'ecuación central del grosor de pared' },
        { value: '2 decimales', label: 'precisión práctica mínima del slicer' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Los perímetros son geometría entera',
      html: 'Un slicer no puede imprimir 2,6 perímetros normales. Si una pared es demasiado ancha para dos líneas y demasiado estrecha para tres, necesita comportamiento de gap fill o una dimensión CAD corregida.',
    },
    { type: 'title', text: 'Cómo elegir el grosor de pared CAD para una boquilla de 0,4 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Una boquilla de 0,4 mm usa comúnmente un ancho de línea de 0,40-0,48 mm. Con un ancho de línea de 0,42 mm, dos perímetros producen 0,84 mm, tres perímetros producen 1,26 mm y cuatro perímetros producen 1,68 mm. Una pared diseñada de 1,20 mm se ve razonable en CAD, pero está a 0,06 mm de tres perímetros de 0,42 mm. Está cerca, pero no es exacta. El optimizador puede sugerir 3 perímetros a 0,40 mm, lo que cierra la pared perfectamente y se mantiene exactamente en el diámetro de boquilla.',
    },
    {
      type: 'paragraph',
      html: 'Para piezas mecánicas, a menudo es mejor diseñar las paredes como múltiplos del ancho de línea previsto en lugar de forzar al slicer a repararlas. Los objetivos comunes de pared CAD para una boquilla de 0,4 mm son alrededor de 0,8 mm para carcasas ligeras, 1,2 mm para paredes funcionales normales, 1,6 mm para carcasas más resistentes y 2,0 mm o más para elementos portantes. Los valores exactos deben seguir el ancho de línea del slicer, no solo el diámetro nominal de la boquilla.',
    },
    {
      type: 'table',
      headers: ['Boquilla', 'Rango seguro de ancho de línea', 'Buenos objetivos de 2 paredes', 'Buenos objetivos de 3 paredes'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Diseña a partir del perfil del slicer hacia atrás',
      html: 'Antes de modelar clips a presión, nervaduras, salientes o paredes de carcasas, decide la boquilla y el ancho de línea. Luego ajusta las dimensiones de la pared a múltiplos limpios para que el slicer no invente caminos de gap fill en áreas críticas.',
    },
    { type: 'title', text: 'Límites del ancho de línea: por qué el 80-120% es una banda segura', level: 2 },
    {
      type: 'paragraph',
      html: 'Una boquilla puede depositar un cordón ligeramente más ancho que su orificio porque el plástico se presiona contra la capa anterior y se aplana formando un camino ovalado. También puede imprimir una línea ligeramente más estrecha, pero demasiado estrecha le pide a la impresora que cree un cordón controlado con soporte lateral limitado. Ambos extremos tienen desventajas. Las líneas muy anchas pueden sobrepresurizar el hotend, embarrar las esquinas, ocultar detalles pequeños y reducir la precisión dimensional. Las líneas muy estrechas pueden rellenar insuficientemente las paredes, debilitar la unión y hacer que la consistencia de la extrusión sea más sensible al pressure advance y al diámetro del filamento.',
    },
    {
      type: 'paragraph',
      html: 'El rango del 80-120% usado aquí es intencionadamente conservador. Muchos slicers permiten valores más amplios para modos especiales, impresión en vase o boquillas grandes, y los usuarios experimentados pueden ir más allá de este rango tras realizar pruebas. Esta herramienta apunta a una planificación fiable de paredes mecánicas, donde la recomendación debe ser lo suficientemente segura para copiarla en un perfil normal sin causar subextrusión o sobreextrusión evidente. Si un ajuste exacto requiere un ancho de línea fuera del rango, la herramienta informa que el diseño es impráctico en lugar de fingir que el slicer puede resolverlo limpiamente.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Demasiado estrecho', description: 'El cordón puede no presionar suficiente material en la sección de la pared.', points: ['Unión interlaminar débil', 'Huecos visibles', 'Paredes finas frágiles'] },
        { title: 'Rango seguro', description: 'El cordón se mantiene cerca del comportamiento físico de la boquilla.', highlight: true, points: ['Extrusión predecible', 'Buen control dimensional', 'Perfiles reutilizables'] },
        { title: 'Demasiado ancho', description: 'La boquilla puede empujar más plástico del que el camino puede aceptar.', points: ['Esquinas abultadas', 'Crestas en la superficie', 'Mayor contrapresión'] },
      ],
    },
    {
      type: 'message',
      title: 'Seguro no significa calibrado',
      html: 'Incluso un ancho matemáticamente perfecto necesita un caudal calibrado. Si el multiplicador de extrusión es incorrecto, la pared física puede seguir midiendo gruesa o fina con el calibre.',
    },
    { type: 'title', text: 'Diagnóstico de huecos internos en la vista previa del slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'La forma más rápida de identificar un desajuste de perímetros es inspeccionar la vista previa capa por capa. Busca una franja pálida entre las paredes externa e interna, una única línea errante de gap fill o un área donde el slicer alterna entre dos y tres líneas a lo largo de la misma característica. Estos patrones son comunes en paredes de carcasas, salientes, clips y nervaduras finas porque la dimensión CAD a menudo se elige visualmente en lugar de como un múltiplo del ancho de extrusión.',
    },
    {
      type: 'paragraph',
      html: 'Un hueco en la pared no siempre es visible en el exterior de la pieza. La pieza puede verse limpia mientras el interior contiene un vacío estrecho que reduce la rigidez. Esto importa para salientes de tornillos, pasadores a presión, soportes, marcos de drones, engranajes y cualquier pieza donde la carga viaje a través de la pared. Si el hueco está entre perímetros, la pared puede partirse más fácilmente porque la ruta de carga cruza material débilmente unido o faltante en lugar de cordones continuos.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'El gap fill es una reparación, no un plan de pared',
      html: 'Los slicers modernos pueden insertar caminos finos de gap fill, pero esos caminos a menudo se imprimen con velocidad, flujo y enfriamiento diferentes. Para geometría portante, un múltiplo limpio de perímetros es más predecible.',
    },
    {
      type: 'summary',
      title: 'Lista de verificación para vista previa',
      items: [
        'Cambia a la vista previa por tipo de línea o característica, no solo a la vista de color sólido.',
        'Inspecciona las paredes en agujeros, nervaduras, salientes y lengüetas finas.',
        'Comprueba si aparecen caminos de gap fill en regiones estructurales.',
        'Compara el grosor de pared CAD con múltiplos enteros del ancho de línea.',
        'Usa el ancho de línea ajustado solo cuando se mantenga dentro del rango seguro de boquilla.',
      ],
    },
    { type: 'title', text: 'Cuando el resultado es exacto, requiere ajuste o es imposible', level: 2 },
    {
      type: 'paragraph',
      html: 'El veredicto usa un umbral residual de 0,05 mm porque la mayoría de los sistemas FDM de escritorio tienen variaciones prácticas debidas al flujo, diámetro del filamento, expansión térmica, calibración de movimiento y técnica de medición. Si la configuración actual cae dentro de esa banda, la herramienta llama al resultado exacto. No significa que cada muestra impresa mida perfectamente hasta la micra; significa que la geometría del slicer está alineada lo suficientemente cerca como para que el error restante sea probablemente de calibración o comportamiento del material, no de aritmética de perímetros.',
    },
    {
      type: 'paragraph',
      html: 'Requiere ajuste significa que el ancho de línea actual deja un residual mayor, pero el mismo número de perímetros puede cerrar la pared con un ancho seguro. Por ejemplo, una pared de 1,20 mm con un ancho de línea de 0,42 mm da tres líneas a 1,26 mm. Ajustar a 0,40 mm hace que tres líneas sean exactamente 1,20 mm. Imposible significa que la pared es más fina que el diámetro de la boquilla o que el ancho de línea exacto necesario caería fuera de la banda segura de boquilla. En ese caso, rediseñar la pared o cambiar el tamaño de boquilla es mejor que forzar al slicer.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perímetro', definition: 'Un bucle de pared generado por el slicer alrededor del contorno de una capa.' },
        { term: 'Ancho de línea', definition: 'El ancho comandado de un cordón extruido, a veces llamado ancho de extrusión.' },
        { term: 'Residual', definition: 'La diferencia absoluta entre el grosor de pared CAD y el grosor producido por perímetros enteros.' },
        { term: 'Gap fill', definition: 'Un camino generado por el slicer para ocupar el espacio sobrante que los perímetros normales no rellenan limpiamente.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Ajustar el ancho de línea versus editar el CAD',
      items: [
        { pro: 'El ajuste del ancho de línea es rápido y puede preservar el archivo del modelo.', con: 'Afecta a todas las paredes que usen ese perfil a menos que se delimite cuidadosamente.' },
        { pro: 'La edición CAD hace explícita la intención de diseño para futuras impresiones.', con: 'Toma más tiempo cuando muchas características ya están acotadas.' },
        { pro: 'Cambiar el tamaño de boquilla puede rescatar paredes muy finas o muy gruesas.', con: 'Cambia la resolución de detalle, el tiempo de impresión y el volumen de extrusión.' },
      ],
    },
    { type: 'title', text: 'Aplicando la salida en Cura, PrusaSlicer y slicers similares', level: 2 },
    {
      type: 'paragraph',
      html: 'El bloque de copia contiene intencionadamente solo los dos valores importantes: número de perímetros y ancho de línea. En Cura, el número de perímetros se asigna al recuento de líneas de pared, y el ancho de línea se asigna al ancho de línea de pared o al ancho de línea global según la estructura del perfil. En PrusaSlicer y derivados, usa perimeters para el recuento de bucles y extrusion width para el ancho de línea. Si el slicer tiene anchos de perímetro externo e interno separados, mantenlos iguales para la pared que se está optimizando a menos que entiendas cómo el slicer los combina.',
    },
    {
      type: 'paragraph',
      html: 'Después de cambiar los ajustes del slicer, vuelve a laminar e inspecciona la misma pared en la vista previa. La vista previa visual debe mostrar el número esperado de cordones llenando la envoltura CAD sin un canal estrecho sobrante. Luego imprime una pequeña probeta de prueba que incluya el mismo grosor de pared y mídela después del enfriamiento. Si la probeta se desvía sistemáticamente pero la vista previa es correcta, ajusta el flujo o la expansión horizontal por separado; no uses el número de perímetros para compensar un error de calibración.',
    },
    {
      type: 'card',
      title: 'Flujo de trabajo de tolerancias mecánicas',
      html: 'Usa este orden para piezas funcionales: elige boquilla, elige ancho de línea seguro, modela múltiplos de pared, lamina sin huecos internos, imprime una probeta, mide la pared real, luego ajusta el flujo o la compensación dimensional. Saltarse el paso de geometría hace que la calibración persiga un blanco móvil.',
    },
    {
      type: 'table',
      headers: ['Concepto del slicer', 'Nombre de campo típico', 'Qué introducir'],
      rows: [
        ['Número de bucles', 'Recuento de líneas de pared / Perímetros', 'Número entero de perímetros recomendado'],
        ['Ancho de cordón de extrusión', 'Ancho de línea / Ancho de extrusión', 'Ancho de línea recomendado o ajustado'],
        ['Caminos de reparación finos', 'Gap fill / Rellenar huecos entre paredes', 'Evitar confiar en ello para paredes estructurales'],
        ['Corrección dimensional', 'Expansión horizontal / Compensación XY', 'Ajustar solo después de que la matemática de pared esté limpia'],
      ],
    },
    { type: 'title', text: 'Casos especiales: paredes finas, nervaduras, salientes y características de tolerancia', level: 2 },
    {
      type: 'paragraph',
      html: 'Las paredes finas por debajo del diámetro de boquilla no son paredes de perímetro normales. Los slicers pueden imprimirlas con detección de pared fina, líneas de extrusión única o ancho de línea variable, pero el resultado suele ser cosmético o ligeramente cargado. Para una nervadura estructural, diseña la nervadura con suficiente grosor para al menos dos líneas estables o acepta que se comportará como una red flexible. Para salientes de tornillos, usa suficientes perímetros para que la carga del tornillo viaje a través de bucles continuos en lugar de un anillo relleno con gap fill.',
    },
    {
      type: 'paragraph',
      html: 'Las características de tolerancia necesitan cuidado extra porque la corrección de pared puede interactuar con el tamaño de agujero y el ajuste. Si un clip o característica de presión está diseñado como una pared de 0,9 mm y el perfil usa líneas de 0,45 mm, dos perímetros son limpios. Si el mismo clip mide 1,0 mm, el slicer puede añadir un pequeño camino central que cambie la rigidez y el ajuste. Una pared matemáticamente más limpia a menudo hace que las características de resorte sean más repetibles porque cada copia usa el mismo número de cordones continuos.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'No forces geometría fina imposible',
      html: 'Si la pared CAD está por debajo del diámetro de boquilla, la solución correcta suele ser una boquilla más pequeña, una característica más gruesa o un método de fabricación diferente. Forzar una boquilla ancha en una pared sub-boquilla crea una forma de cordón impredecible.',
    },
    {
      type: 'list',
      items: [
        'Usa al menos dos líneas limpias para nervaduras que soporten carga de flexión.',
        'Usa tres o más perímetros alrededor de salientes de tornillos cuando el espacio lo permita.',
        'Evita canales sobrantes en clips porque se convierten en iniciadores de grietas.',
        'Valida los ajustes a presión con el mismo ancho de línea usado en la pieza final.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Cuántos perímetros debe usar una pared de 1,2 mm con una boquilla de 0,4 mm?',
      answer: 'Normalmente tres perímetros. Con un ancho de línea de 0,40 mm, tres perímetros equivalen exactamente a 1,20 mm. Con un ancho de línea de 0,42 mm, el grosor real es de 1,26 mm.',
    },
    {
      question: '¿Por qué la calculadora limita el ancho de línea al 80-120% del diámetro de boquilla?',
      answer: 'Ese rango mantiene las recomendaciones en una zona imprimible conservadora. Valores más anchos o más estrechos pueden funcionar en casos especiales, pero son menos fiables para la planificación de paredes mecánicas.',
    },
    {
      question: '¿Debería cambiar el grosor CAD o el ancho de línea del slicer?',
      answer: 'Si el ajuste es pequeño y está dentro del rango seguro, cambiar el ancho de línea es rápido. Para piezas de producción repetida, editar el CAD a múltiplos limpios suele ser más mantenible.',
    },
    {
      question: '¿Un veredicto exacto garantiza que la pieza impresa medirá exacta?',
      answer: 'No. Significa que la geometría del slicer cierra limpiamente. La calibración del flujo, la contracción del material, la temperatura y la compensación XY aún afectan la medición física.',
    },
    {
      question: '¿Qué debo hacer cuando el resultado es imposible?',
      answer: 'Usa una boquilla más pequeña, rediseña el grosor de pared como múltiplo de un ancho de línea seguro, o acepta que la característica será un camino de pared fina no estructural.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Introduce el diámetro de boquilla', text: 'Elige un tamaño de boquilla común o escribe el diámetro medido de la boquilla.' },
    { name: 'Configura el ancho de línea', text: 'Introduce el ancho de línea de pared del slicer; la herramienta lo limita a un rango seguro de boquilla.' },
    { name: 'Introduce el grosor de pared CAD', text: 'Usa el grosor de pared diseñado del modelo.' },
    { name: 'Copia los ajustes del slicer', text: 'Aplica el número de perímetros recomendado y el ancho de línea ajustado si es necesario.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Optimizador de Perímetros y Paredes',
      description: 'Calcula el número de perímetros FDM y un ancho de línea seguro para un grosor de pared CAD exacto.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuántos perímetros debe usar una pared de 1,2 mm con una boquilla de 0,4 mm?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Normalmente tres perímetros. Con un ancho de línea de 0,40 mm, tres perímetros equivalen exactamente a 1,20 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo optimizar el grosor de pared FDM para perímetros enteros',
      step: [
        { '@type': 'HowToStep', text: 'Introduce el diámetro de boquilla.' },
        { '@type': 'HowToStep', text: 'Introduce el ancho de línea del slicer.' },
        { '@type': 'HowToStep', text: 'Introduce el grosor de pared CAD.' },
        { '@type': 'HowToStep', text: 'Aplica los perímetros y el ancho de línea recomendados.' },
      ],
    },
  ],
};
