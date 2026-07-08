import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: 'calculadora-dimensionamiento-fuente-alimentacion-impresora-3d',
  title: 'Calculadora de Dimensionamiento de Fuente de Alimentación para Impresora 3D: Hotends, Camas Calientes, Motores y Actualizaciones de 12V a 24V',
  description: 'Calcula la potencia y la corriente máxima de la fuente de alimentación para una actualización de impresora 3D añadiendo cama caliente, cartucho del hotend, motores paso a paso, carga auxiliar y margen de seguridad.',
  ui: {
    systemVoltageLabel: 'Tensión del sistema',
    bedPowerLabel: 'Cama caliente',
    hotendPowerLabel: 'Cartucho del hotend',
    motorsLabel: 'Motores',
    motorPowerLabel: 'Por motor',
    auxiliaryPowerLabel: 'Carga auxiliar',
    safetyMarginLabel: 'Margen de seguridad',
    totalLoadLabel: 'Carga directa',
    psuRequiredLabel: 'Fuente requerida',
    currentRequiredLabel: 'Corriente máxima',
    recommendedPsuLabel: 'fuente estándar más cercana',
    utilizationLabel: 'carga sobre la potencia elegida',
    thermalMapLabel: 'Mapa de potencia térmica',
    bedSegmentLabel: 'Cama',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motores',
    auxiliarySegmentLabel: 'Aux',
    headroomSegmentLabel: 'Margen',
    scenarioLabel: 'Perfiles',
    scenarioBedSlinger: 'Cama móvil',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Gran formato',
    copyButton: 'Copiar resumen',
    copiedButton: 'Copiado',
    controlsAriaLabel: 'Parámetros de la fuente',
    resultsAriaLabel: 'Resultados de la fuente',
    copiedSummaryTemplate: 'Fuente para impresora 3D: {requiredWatts} W necesarios, {currentAmps} A a {voltage} V, se recomienda {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Cómo Dimensionar una Fuente de Impresora 3D Sin Adivinar', level: 2 },
    {
      type: 'paragraph',
      html: 'Una fuente de alimentación para impresora 3D se dimensiona a partir de las cargas que pueden estar activas al mismo tiempo: la cama caliente, el cartucho calefactor del hotend, los motores paso a paso, la placa controladora, ventiladores, LEDs, sensores, relés de calefactor de cámara y cualquier electrónica auxiliar. La relación eléctrica básica es sencilla: <strong>los vatios son igual a los voltios multiplicados por los amperios</strong>. Una impresora que necesita 420 W en un sistema de 24 V puede demandar alrededor de 17,5 A antes de considerar cualquier margen extra para el arranque, pérdidas de regulación o futuras ampliaciones.',
    },
    {
      type: 'paragraph',
      html: 'El error que provoca muchas impresoras inestables es usar el consumo medio de impresión en lugar de la carga máxima controlada. Durante una impresión normal de PLA la cama puede ciclar a una potencia parcial una vez alcanzada la temperatura, pero durante el calentamiento tanto la cama como el hotend pueden funcionar al 100% al mismo tiempo. Si la fuente se dimensiona solo a partir de la lectura de un enchufe inteligente tomada a mitad de la impresión, puede parecer suficiente cuando en realidad se queda justa durante el calentamiento, el uso con cámara cerrada de ABS o un ciclo de recuperación en una habitación fría.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'fórmula básica de dimensionamiento' },
        { value: '20-35%', label: 'margen práctico habitual' },
        { value: '24V', label: 'menos corriente que 12V para la misma potencia' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No trates la potencia de la fuente como permiso para sobrecargar conectores',
      html: 'Una fuente de 500 W no convierte cada terminal, pista de PCB, conector XT, conector cilíndrico o bornero atornillable en seguro para 500 W. La corriente debe verificarse a nivel de cable y conector, especialmente en camas calientes y calefactores de cámara.',
    },
    { type: 'title', text: '¿Qué Cargas Deben Incluirse en un Cálculo de Potencia de Fuente?', level: 2 },
    {
      type: 'paragraph',
      html: 'Para una impresora FDM, la cama caliente suele ser la carga de potencia dominante. Una cama común de 220 x 220 mm puede estar en torno a 180-250 W, mientras que una más grande de 300 x 300 mm puede alcanzar 300-500 W dependiendo de la tensión y la construcción. Las camas de CA son diferentes porque su potencia de calefacción no la suministra la fuente de CC de la impresora; en ese caso incluye solo la electrónica de control de CC, ventiladores, hotend, motores y la pequeña corriente que consume la entrada del relé de estado sólido.',
    },
    {
      type: 'paragraph',
      html: 'El cartucho calefactor del hotend es la siguiente carga evidente. Los cartuchos de serie suelen ser de 30 W o 40 W, los hotends de alto flujo a menudo usan 50 W o 60 W, y algunas configuraciones de alta temperatura usan 80 W o más. Un cartucho con más vatios no consume automáticamente esa potencia de forma constante, pero la fuente debe soportar la potencia nominal completa porque el firmware puede ordenar un ciclo de trabajo del 100% durante el calentamiento o la recuperación tras una gran demanda de extrusión.',
    },
    {
      type: 'list',
      items: [
        'Potencia de la cama caliente según su especificación o midiendo tensión y resistencia.',
        'Potencia del cartucho del hotend según su valor nominal, no según el ciclo de trabajo medio.',
        'Margen para motores paso a paso según el número de motores y los ajustes de corriente del driver.',
        'Potencia auxiliar para controladora, ventiladores, Raspberry Pi, LEDs, sensores, relés y placas del cabezal.',
        'Margen de seguridad para cargas transitorias, envejecimiento de condensadores, calor del recinto y futuras ampliaciones.',
      ],
    },
    {
      type: 'table',
      headers: ['Componente', 'Rango típico', 'Nota de dimensionamiento'],
      rows: [
        ['Cama caliente 220 mm', '180-250 W', 'Suele ser la mayor carga de CC en una impresora de sobremesa.'],
        ['Cama caliente 300 mm', '300-500 W', 'Comprueba cuidadosamente la sección del cable y el MOSFET de la cama.'],
        ['Cartucho del hotend', '30-80 W', 'Usa el valor nominal del cartucho, no la potencia media observada.'],
        ['Motores paso a paso', '6-15 W cada uno', 'Depende del límite de corriente, tensión, modo del driver y corriente de retención.'],
        ['Ventiladores y electrónica', '10-60 W', 'Las placas del cabezal, LEDs y ordenadores monoplaca suman rápido.'],
      ],
    },
    { type: 'title', text: 'Necesidades de Fuente: 12V frente a 24V', level: 2 },
    {
      type: 'paragraph',
      html: 'Para la misma potencia, una impresora de 24 V necesita la mitad de corriente que una de 12 V. Una carga de 360 W consume 30 A a 12 V pero solo 15 A a 24 V. Una corriente menor reduce la caída de tensión en los cables, reduce el calor en los conectores y da a los circuitos de cama y hotend un margen práctico mayor. Por eso muchas impresoras 3D modernas y placas de actualización prefieren 24 V para calefactores y electrónica de movimiento.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sistemas de 12V',
          description: 'Útiles para impresoras antiguas y accesorios de tipo automotriz, pero la alta potencia de cama puede requerir corrientes muy elevadas.',
          points: ['Mayor amperaje para los mismos vatios', 'Más sensibles a la resistencia de los conectores', 'Comunes en máquinas antiguas de la era RepRap'],
        },
        {
          title: 'Sistemas de 24V',
          description: 'Preferidos para muchas impresoras modernas porque la misma potencia de calefacción se entrega con menor corriente.',
          highlight: true,
          points: ['Menor amperaje para los mismos vatios', 'Menos caída de tensión en el cableado', 'Más adecuados para camas calientes de CC grandes'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Usa la corriente como verificación práctica del cableado',
      html: 'Después de calcular los vatios necesarios, divide por la tensión para obtener la corriente máxima. Ese valor en amperios es lo que importa para los terminales de la fuente, fusibles, interruptores, sección de cable, conectores de cama y valores nominales de entrada de la placa.',
    },
    {
      type: 'proscons',
      title: 'Cambiar la tensión durante una actualización',
      items: [
        { pro: 'Pasar de 12 V a 24 V puede reducir la corriente y el calentamiento de conectores para la misma potencia de cama.', con: 'Los ventiladores, LEDs, bombas y algunas placas controladoras pueden necesitar reemplazo o convertidores reductores.' },
        { pro: 'Los hotends y camas de 24 V suelen alcanzar la temperatura más rápido si están correctamente especificados.', con: 'Un calefactor de 12 V mal emparejado a 24 V puede resultar peligrosamente sobrealimentado.' },
        { pro: 'Los sistemas de drivers y movimiento suelen comportarse mejor con electrónica moderna de 24 V.', con: 'Hay que auditar la tensión de cada accesorio antes de la primera puesta en marcha.' },
      ],
    },
    { type: 'title', text: '¿Cuánto Margen de Seguridad Debe Tener una Fuente de Impresora 3D?', level: 2 },
    {
      type: 'paragraph',
      html: 'Un margen de seguridad no es capacidad desperdiciada; es espacio de operación. Las fuentes conmutadas están más cómodas cuando no se llevan permanentemente a su potencia nominal en un recinto caluroso. Una fuente de impresora montada bajo una cámara calefactada, junto a una cadena portacables de cama o dentro de una base mal ventilada puede funcionar más caliente que la misma fuente en un banco abierto. El calor acorta la vida de los condensadores y puede provocar desconexiones bajo carga.',
    },
    {
      type: 'paragraph',
      html: 'Para una impresora de sobremesa típica, un 20% de margen es un mínimo razonable cuando la estimación de carga es precisa. Para camas grandes, hotends de alto flujo, ventiladores de cámara, iluminación LED o futuras mejoras del cabezal, un 30-35% es más holgado. Para impresoras experimentales, máquinas de alta temperatura o montajes que puedan añadir un segundo hotend, controles activos de calefacción de cámara o muchos accesorios, elegir un escalón estándar de fuente por encima del requisito calculado suele ser la decisión de ingeniería más tranquila.',
    },
    {
      type: 'table',
      headers: ['Margen', 'Caso de uso', 'Significado práctico'],
      rows: [
        ['10%', 'Cargas muy conocidas, marco abierto, fuente de calidad', 'Solo funciona cuando cada carga y ruta de cable ya está verificada.'],
        ['20%', 'Impresora de sobremesa normal', 'Buena base para un montaje estable de tipo estándar.'],
        ['30%', 'Cama mejorada, hotend de alto flujo, electrónica cerrada', 'Mejor confort térmico y flexibilidad futura.'],
        ['40%+', 'Impresora de gran formato o experimental', 'Útil cuando las hipótesis de carga pueden cambiar más adelante.'],
      ],
    },
    {
      type: 'card',
      title: 'Por qué una fuente más grande no fuerza más potencia hacia la impresora',
      html: 'Una fuente de CC regulada ofrece tensión; las cargas conectadas consumen corriente según la resistencia, el ciclo de trabajo y la electrónica de control. Una fuente de 600 W en una impresora que necesita 300 W no empuja 600 W hacia la cama. Simplemente tiene capacidad suficiente para suministrar la corriente sin operar en su límite.',
    },
    { type: 'title', text: 'Consumo de Potencia de la Cama Caliente y Comportamiento Térmico', level: 2 },
    {
      type: 'paragraph',
      html: 'Las camas calientes son cargas resistivas, por lo que su potencia teórica puede estimarse a partir de la tensión y la resistencia usando <code>P = V^2 / R</code>. Si una cama de 24 V tiene 2,4 ohmios de resistencia, es aproximadamente una cama de 240 W. La potencia real varía con la tensión de alimentación, las pérdidas en el cableado, la resistencia del MOSFET y la temperatura de la cama, porque la resistencia puede cambiar ligeramente al calentarse el calefactor.',
    },
    {
      type: 'paragraph',
      html: 'Una cama que cicla al 35% de ciclo de trabajo durante una impresión estable de PLA puede aún demandar el 100% en el arranque. Para dimensionar la fuente, usa la potencia nominal completa del calefactor. Para estimar el coste eléctrico, el ciclo de trabajo medio es más útil. Mezclar esas dos preguntas es una fuente común de fuentes subdimensionadas: el consumo energético durante una impresión de dos horas no es lo mismo que la capacidad eléctrica instantánea.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Excepción de cama de CA',
      html: 'Si la impresora usa una cama de CA alimentada por la red, no incluyas la potencia de la cama en la carga de la fuente de CC. En su lugar, dimensiona por separado el cableado de CA, el fusible, el relé, el alivio de tracción, la puesta a tierra y la protección térmica. La fuente de CC sigue alimentando la controladora, el hotend, los motores y los accesorios.',
    },
    {
      type: 'list',
      items: [
        'Parte inferior de la cama aislada: menos pérdida de calor y menor ciclo de trabajo medio tras el calentamiento.',
        'Placa gruesa de aluminio mecanizada: calentamiento más lento pero distribución de calor más uniforme.',
        'Plancha de vidrio grande: más masa térmica, a menudo calentamiento más largo para la misma potencia.',
        'Habitación fría o marco abierto: más potencia de recuperación necesaria para mantener la temperatura.',
      ],
    },
    { type: 'title', text: 'Hotend, Motores, Ventiladores y Cargas Auxiliares', level: 2 },
    {
      type: 'paragraph',
      html: 'Los motores paso a paso se suelen sobrestimar o subestimar porque su comportamiento eléctrico no es tan simple como sumar la tensión y corriente nominales. Los drivers chopper modernos regulan la corriente del devanado, y la potencia tomada de la fuente depende de los ajustes del driver, la velocidad del motor, la reducción de corriente de retención y la carga mecánica. Para dimensionar la fuente, un margen práctico de 8-15 W por paso a paso activo suele ser adecuado para impresoras de sobremesa comunes, pero los motores de corriente muy alta o muchos motores Z merecen un cálculo directo a partir de la configuración del driver.',
    },
    {
      type: 'paragraph',
      html: 'Las cargas auxiliares son fáciles de olvidar porque cada elemento es pequeño: ventilador del hotend, ventilador de capa, ventilador de la controladora, ventiladores de circulación de cámara, LEDs, sensor de filamento, sonda, placa base, pantalla, placa del cabezal, Raspberry Pi, cámara, concentrador USB y pérdidas del convertidor reductor. Una impresora con un ordenador monoplaca e iluminación de recinto puede sumar 20-40 W sin que parezca un gran cambio eléctrico.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Potencia continua', definition: 'La carga que una fuente de alimentación está diseñada para suministrar durante períodos prolongados en condiciones especificadas de refrigeración y temperatura.' },
        { term: 'Carga de pico', definition: 'Una demanda de corta duración que puede ser superior a la carga media, como el calentamiento o la recuperación simultánea de calefactores.' },
        { term: 'Caída de tensión', definition: 'La tensión perdida en cables y conectores porque los conductores reales tienen resistencia.' },
        { term: 'Ciclo de trabajo', definition: 'El porcentaje de tiempo que un calefactor controlado está encendido durante un período de control.' },
        { term: 'Margen de seguridad', definition: 'Capacidad extra por encima de la carga calculada que mantiene la fuente alejada de su límite.' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista de comprobación de carga auxiliar',
      items: [
        'Suma todos los ventiladores por su potencia nominal o tensión por corriente.',
        'Incluye ordenadores monoplaca y cámaras si se alimentan desde la fuente de la impresora.',
        'Reserva potencia para tiras LED, placas del cabezal, relés, sondas y pérdidas de convertidores reductores.',
        'Recalcula después de añadir calefactores de recinto, extrusores extra o ventilación de capa de alta corriente.',
      ],
    },
    { type: 'title', text: 'Interpretando los Resultados de la Calculadora', level: 2 },
    {
      type: 'paragraph',
      html: 'La carga directa es la suma de la cama, el hotend, los motores y las entradas auxiliares antes del margen. El valor de fuente requerida añade el margen de seguridad seleccionado. El valor de corriente máxima divide ese requisito por la tensión del sistema, respondiendo así a la pregunta práctica de cableado: ¿cuántos amperios deben soportar de forma segura la fuente y la ruta de entrada a la tensión elegida?',
    },
    {
      type: 'paragraph',
      html: 'El tamaño de fuente recomendado redondea hacia arriba a una clase de potencia común. Si el valor requerido es 382 W, una fuente de 400 W puede parecer suficiente matemáticamente, pero un modelo de 450 W o 500 W puede ser preferible si tiene mejor refrigeración, mejores terminales, certificaciones de seguridad reconocidas o una potencia continua más honesta. La potencia de la etiqueta es solo una parte de la calidad de una fuente.',
    },
    {
      type: 'table',
      headers: ['Resultado', 'Usarlo para', 'Señal de advertencia'],
      rows: [
        ['Vatios requeridos', 'Elegir capacidad de la fuente', 'El valor está a pocos vatios de la etiqueta de la fuente.'],
        ['Corriente máxima', 'Comprobación de cables, fusibles y conectores', 'La corriente supera los valores nominales de la placa o los terminales.'],
        ['Tamaño recomendado', 'Lista corta de compra', 'Fuente barata sin marca que promete altos vatios con terminales minúsculos.'],
        ['Utilización', 'Estimación del confort térmico', 'La carga continua supera aproximadamente el 80-85%.'],
      ],
    },
    {
      type: 'message',
      title: 'Regla práctica de compra',
      html: 'Elige la primera fuente de calidad por encima del requisito calculado, luego verifica la tensión de salida, la capacidad de corriente, la orientación de refrigeración, la ventilación del recinto, la puesta a tierra, la estrategia de fusibles y las capacidades de los conectores antes de la instalación.',
    },
    { type: 'title', text: 'Errores Comunes al Dimensionar Fuentes en Actualizaciones de Impresoras 3D', level: 2 },
    {
      type: 'list',
      items: [
        'Usar los vatios medios del enchufe inteligente en lugar de la carga máxima de CC de los calefactores.',
        'Olvidar que los sistemas de 12 V necesitan el doble de corriente que los de 24 V para la misma potencia.',
        'Añadir una cama más grande manteniendo el conector de entrada y la sección de cable originales de la placa.',
        'Instalar un cartucho de hotend de alta potencia sin comprobar las protecciones térmicas del MOSFET, fusible y firmware.',
        'Alimentar una Raspberry Pi, cámara, LEDs y ventiladores desde la impresora sin añadir carga auxiliar.',
        'Comprar una fuente por la potencia de pico anunciada en lugar de la potencia continua y la certificación de seguridad.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Detente si los cables o conectores se calientan',
      html: 'Cables calientes, terminales oscurecidos, carcasas derretidas, reinicios intermitentes o caídas de temperatura de la cama durante el movimiento no son problemas de ajuste. Son síntomas eléctricos que requieren inspección antes de seguir imprimiendo.',
    },
    {
      type: 'paragraph',
      html: 'La calculadora estima la capacidad de la fuente; no certifica todo el sistema eléctrico. Una impresora segura también necesita una correcta puesta a tierra, alivio de tracción, fusibles, terminales engarzados adecuadamente, conectores crimpados dimensionados para la corriente real, protección de fuga térmica en el firmware y un trazado de cableado que mantenga la tensión de red separada de la electrónica de baja tensión.',
    },
    {
      type: 'card',
      title: 'Cuándo dividir las fuentes de alimentación',
      html: 'Las impresoras grandes a veces usan fuentes separadas para la cama, la electrónica de movimiento y los accesorios. Dividir puede reducir la corriente a través de una sola placa y simplificar el mantenimiento, pero las masas, la lógica de conmutación, los fusibles y el comportamiento de parada de emergencia deben diseñarse deliberadamente.',
    },
    { type: 'title', text: 'Ejemplos Prácticos: Impresora Estándar, Actualización CoreXY y Cama Grande', level: 2 },
    {
      type: 'paragraph',
      html: 'Una impresora compacta de cama móvil con cama de 220 W, hotend de 40 W, cuatro motores a 10 W y 25 W de electrónica tiene una carga directa de 325 W. Con un 25% de margen, la capacidad de fuente requerida es de unos 406 W. A 24 V eso son aproximadamente 16,9 A, por lo que una fuente de calidad de 450 W o 500 W a 24 V es un objetivo sensato dependiendo de la disposición de conectores y la refrigeración.',
    },
    {
      type: 'paragraph',
      html: 'Una actualización CoreXY con cama de 300 W, hotend de alto flujo de 60 W, cinco motores a 12 W y 45 W de carga auxiliar totaliza 465 W antes del margen. Con un 30% de margen necesita unos 605 W, o 25,2 A a 24 V. Ese montaje pertenece a la clase de 600-750 W, y el cableado de la cama debe tratarse como una ruta de corriente principal en lugar de un detalle secundario.',
    },
    {
      type: 'paragraph',
      html: 'Una impresora de gran formato con cama de CC de 600 W, hotend de 80 W, seis motores a 14 W y 80 W de carga auxiliar alcanza 844 W antes del margen. Con un 35% de margen el requisito es de unos 1139 W. Llegados a ese punto, muchos constructores consideran una cama de CA o una arquitectura de alimentación separada porque la corriente de CC, el cableado, los fusibles y la gestión térmica se convierten en las principales limitaciones de diseño.',
    },
    {
      type: 'summary',
      title: 'Flujo de trabajo final de dimensionamiento',
      items: [
        'Enumera cada carga que puede funcionar durante el calentamiento o la recuperación.',
        'Calcula los vatios directos y añade un margen realista.',
        'Convierte los vatios a amperios a la tensión real del sistema.',
        'Elige una fuente de calidad de potencia continua por encima del resultado.',
        'Verifica cables, conectores, fusibles, capacidades de la placa y refrigeración antes de encender la impresora.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Cuántos vatios necesita la fuente de alimentación de mi impresora 3D?',
      answer: 'Suma la cama caliente, el cartucho del hotend, los motores, la electrónica, los ventiladores y los accesorios, luego añade un margen de seguridad. Muchas impresoras de sobremesa de 24 V mejoradas se sitúan entre 400 W y 600 W, mientras que las camas grandes pueden necesitar mucho más.',
    },
    {
      question: '¿Es 24V mejor que 12V para la fuente de una impresora 3D?',
      answer: 'Para la misma potencia, 24 V usa la mitad de corriente que 12 V. Una corriente menor suele significar menos caída de tensión y menos calentamiento de conectores, pero todos los calefactores, ventiladores, placas y accesorios deben ser compatibles con la tensión elegida.',
    },
    {
      question: '¿Debo incluir la cama caliente en el cálculo de la fuente de CC?',
      answer: 'Inclúyela si es una cama caliente de CC alimentada por la fuente de la impresora. No incluyas una cama de CA conectada a la red en la potencia de la fuente de CC; dimensiona por separado su cableado de red, relé, fusible y protecciones de seguridad.',
    },
    {
      question: '¿Qué margen de seguridad debo usar como holgura para la fuente?',
      answer: 'Usa al menos un 20% para un montaje normal y conocido. Usa un 30-35% para camas mejoradas, hotends de alto flujo, electrónica cerrada o futuros accesorios.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Introduce las cargas de calefacción', text: 'Añade la potencia nominal de la cama caliente y del cartucho del hotend.' },
    { name: 'Añade movimiento y accesorios', text: 'Introduce el número de motores, el margen por motor, ventiladores, placas, LEDs y otras cargas auxiliares.' },
    { name: 'Elige tensión y margen', text: 'Selecciona 12 V o 24 V y establece un margen de seguridad acorde al riesgo del montaje.' },
    { name: 'Comprueba vatios y amperios', text: 'Usa los vatios requeridos para elegir la fuente y los amperios máximos para comprobar cables, fusibles y conectores.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Dimensionamiento de Fuente de Alimentación para Impresora 3D',
      description: 'Calcula la potencia y corriente de la fuente de una impresora 3D a partir de las cargas de cama, hotend, motores, auxiliares y margen de seguridad.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuántos vatios necesita la fuente de alimentación de mi impresora 3D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Suma la cama caliente, el cartucho del hotend, los motores, la electrónica, los ventiladores y los accesorios, luego añade un margen de seguridad.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo dimensionar la fuente de alimentación de una impresora 3D',
      step: [
        { '@type': 'HowToStep', text: 'Introduce las cargas de los calefactores.' },
        { '@type': 'HowToStep', text: 'Añade las cargas de movimiento y accesorios.' },
        { '@type': 'HowToStep', text: 'Selecciona la tensión del sistema y el margen de seguridad.' },
        { '@type': 'HowToStep', text: 'Elige una fuente de calidad por encima del requisito calculado.' },
      ],
    },
  ],
};
