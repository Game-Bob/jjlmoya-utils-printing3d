import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'calculadora-de-purga-multimaterial';
const title = 'Calculadora de Purga Multimaterial: Analiza y Optimiza el Desperdicio de Filamento';
const description = 'Estima el volumen de la torre de purga de AMS y MMU, la masa de filamento desperdiciado y el costo de transición con una matriz de intensidad de pigmento para cambios de color.';

const faqData = [
  {
    question: '¿Por qué se asigna un factor de purga más alto al negro sobre blanco que al blanco sobre negro?',
    answer: 'Los pigmentos oscuros contaminan los polímeros claros de forma más visible que los pigmentos claros contaminan los polímeros oscuros. Por lo tanto, la calculadora modela el negro sobre blanco como una transición de factor alto y el blanco sobre negro como una transición de factor más bajo.',
  },
  {
    question: '¿Esta calculadora reemplaza los volúmenes de purgado del slicer?',
    answer: 'No. Es un planificador de diagnóstico que estima la economía del purgado antes de slicear o presupuestar. Use el resultado de calibración del slicer para el ajuste final específico de la máquina.',
  },
  {
    question: '¿Qué proporción de purga debería considerar demasiado alta?',
    answer: 'La herramienta marca una proporción alta de desperdicio por encima del 30 por ciento del volumen total extruido. Ese umbral generalmente significa que se debe revisar el orden de colores, la agrupación, el purgado a relleno o la división del modelo.',
  },
  {
    question: '¿Puedo usarlo para cambios de material, no solo para cambios de color?',
    answer: 'La matriz actual se centra en la contaminación por pigmentos. Los polímeros mixtos, los soportes solubles, los materiales abrasivos y los cambios de temperatura pueden requerir purga adicional más allá del factor de color.',
  },
];

const howToData = [
  {
    name: 'Ingresar el volumen del objeto y la purga base',
    text: 'Escriba el volumen real del modelo y el volumen de purga estándar que usa su perfil de AMS o MMU para un cambio de filamento normal.',
  },
  {
    name: 'Elegir colores de origen y destino',
    text: 'Use los selectores de color circulares para cada transición. El factor de transición se actualiza inmediatamente desde la matriz de pigmentos.',
  },
  {
    name: 'Establecer recuentos de transición',
    text: 'Ingrese cuántas veces ocurre cada par de colores en el trabajo. Los intercambios repetidos de oscuro a claro dominarán la estimación total de purga.',
  },
  {
    name: 'Leer proporción, masa y costo',
    text: 'Use la barra de objeto versus purga, la masa de desperdicio y el resultado de costo para decidir si la impresión debe reorganizarse antes de la producción.',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    currencyLabel: 'Moneda',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Modelo de costos',
    objectVolumeLabel: 'Volumen del objeto',
    basePurgeLabel: 'Purga base por cambio',
    densityLabel: 'Densidad g/cm3',
    priceLabel: 'Precio por kg',
    transitionsTitle: 'Matriz de transición de pigmentos',
    fromLabel: 'Desde',
    toLabel: 'Hasta',
    colorLabels: {
      white: 'Blanco',
      natural: 'Natural',
      yellow: 'Amarillo',
      red: 'Rojo',
      blue: 'Azul',
      green: 'Verde',
      gray: 'Gris',
      black: 'Negro',
    },
    countLabel: 'Cambios',
    objectLabel: 'Plástico real del objeto',
    purgeTowerLabel: 'Desperdicio de torre de purga',
    totalWasteLabel: 'Volumen de purga',
    wasteCostLabel: 'Costo del desperdicio',
    purgeRatioLabel: 'Proporción de purga',
    massLabel: 'Masa de desperdicio',
    loadbarAriaLabel: 'Volumen del objeto comparado con el volumen de la torre de purga',
    alertTitle: 'Alta proporción de desperdicio detectada',
    alertText: 'Alta proporción de desperdicio detectada: se recomienda agrupar colores similares.',
    efficientText: 'Proporción de purga dentro del límite de planificación.',
    factorGuideTitle: 'Guía de factores de purga por transición',
    transitionLabel: 'Transición',
    factorLabel: 'Factor',
    volumeLabel: 'Volumen de purga',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Cómo el desperdicio de purga de AMS y MMU se convierte en un costo de producción real',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una impresión multimaterial no consume filamento solo en el objeto visible. Cada cambio de color o material deja polímero fundido en el hotend, la zona de fusión, la boquilla y, a veces, al inicio de la siguiente trayectoria de extrusión. La impresora debe empujar suficiente filamento nuevo a través de esa trayectoria antes de que la siguiente superficie visible esté limpia. En flujos de trabajo de AMS, MMU, cambiador de cabezal y estilo paleta, esa extrusión de limpieza a menudo se convierte en una torre de purga, bloque de purga, línea de purga o depósito de vertedero. El punto económico importante es simple: la torre se puede valorar como cualquier otra pieza porque tiene volumen, masa y costo de material.',
    },
    {
      type: 'paragraph',
      html: 'Las calculadoras genéricas a menudo multiplican el número de intercambios por un volumen de purgado fijo. Eso es útil para un presupuesto aproximado, pero omite el modo de fallo más costoso en la impresión en color: <strong>contaminación asimétrica</strong>. El blanco sobre negro no requiere la misma limpieza que el negro sobre blanco. Una pequeña cantidad de pigmento negro transportada a PLA, PETG o ABS blanco es visible rápidamente, mientras que una pequeña cantidad de blanco transportada a negro suele quedar oculta por la carga de pigmento más oscura. Esta herramienta utiliza una matriz de transición para que cada dirección tenga su propio multiplicador.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Umbral de alerta de proporción de purga alta usado por el panel' },
        { value: '1,6x', label: 'Multiplicador de transición predeterminado de negro a blanco' },
        { value: '0,8x', label: 'Multiplicador de transición predeterminado de blanco a negro' },
        { value: '0 botones', label: 'Todos los cálculos se actualizan al instante mientras se edita' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'El síntoma costoso a vigilar',
      badge: 'Auditoría de desperdicios',
      html: 'Cuando la torre de purga supera el 30 por ciento del volumen combinado del objeto y la purga, el trabajo ya no es solo una impresión colorida. Es un proceso de conversión de material donde una gran fracción del filamento comprado se convierte en producción no productiva. Ese es el punto donde el orden de colores, la división del modelo, el purgado a relleno y la agrupación merecen atención antes de que la máquina comience.',
    },
    {
      type: 'title',
      text: 'La matriz de transición detrás de la calculadora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El modelo central es <code>Vtotal = suma(Vbase x Ka,b)</code>. <code>Vbase</code> es el volumen de purga base para un cambio de filamento estándar. <code>Ka,b</code> es el factor para pasar del color <code>a</code> al color <code>b</code>. Un factor inferior a 1 significa que la transición suele ser más fácil que la línea base. Un factor superior a 1 significa que el siguiente color es sensible a la contaminación o que el color anterior tiene un fuerte arrastre de pigmento. El resultado es un volumen de purga en centímetros cúbicos, que luego se convierte a masa usando la densidad del filamento.',
    },
    {
      type: 'paragraph',
      html: 'La fórmula de costo es <code>Cwaste = ((Vtotal x densidad) / 1000) x priceKg</code>. Si la torre de purga usa 80 cm3 de PLA a 1,24 g/cm3, consume 99,2 g de filamento. A 24 por kilogramo, esa torre cuesta 2,38 en material antes de considerar electricidad, tiempo de máquina, transiciones de color fallidas o posprocesamiento. Para una impresión de hobby puede ser aceptable. Para producción repetida, es una partida presupuestaria.',
    },
    {
      type: 'table',
      headers: ['Transición', 'Factor predeterminado', 'Por qué está ponderado así'],
      rows: [
        ['Blanco a negro', '0,80x', 'El negro oculta pequeños residuos claros, por lo que la tolerancia a la contaminación visible es mayor.'],
        ['Negro a blanco', '1,60x', 'El residuo oscuro en blanco es inmediatamente visible y generalmente necesita un purgado más largo.'],
        ['Natural a blanco', '1,15x', 'El material translúcido o natural puede teñir el blanco opaco hasta que la trayectoria de fusión esté más limpia.'],
        ['Amarillo a blanco', '1,35x', 'Los pigmentos amarillos pueden calentar o manchar superficies claras, aunque son menos severos que el negro.'],
        ['Rojo a amarillo', '1,08x', 'El arrastre de rojo cambia fuertemente el tono en amarillo y colores adyacentes al naranja.'],
        ['Gris a negro', '0,72x', 'El residuo gris suele quedar oculto por el pigmento negro, por lo que la purga puede ser menor.'],
      ],
    },
    {
      type: 'tip',
      title: 'Use la calibración de su slicer como volumen base',
      html: 'Ejecute primero la calibración de purgado del proveedor o de la comunidad para su impresora, luego ingrese ese resultado como el volumen de purga base. La matriz debe escalar una línea base conocida, no reemplazar el ajuste específico de la máquina para el diámetro de la boquilla, el volumen del hotend, la longitud de la trayectoria del filamento y el comportamiento del slicer.',
    },
    {
      type: 'title',
      text: 'Por qué la opacidad del polímero cambia el volumen de purga requerido',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La opacidad controla cuán visible es la contaminación del color anterior en el siguiente material. El blanco opaco es exigente porque refleja fuertemente la luz y muestra partículas oscuras o rayas cerca de la superficie. Los filamentos naturales y translúcidos se comportan de manera diferente: pueden ocultar menos masa pero mostrar tinte a través de la profundidad, especialmente en paredes delgadas o piezas retroiluminadas. Los colores saturados como el rojo y el azul también pueden manchar los colores claros siguientes porque la concentración de pigmento necesaria para una croma fuerte permanece visible en niveles bajos de residuo.',
    },
    {
      type: 'paragraph',
      html: 'La impresora no sabe de ciencia del color. Solo extruye una longitud o volumen. El usuario tiene que decidir si el resultado visible necesita pureza cosmética, separación funcional o solo un cambio de color aproximado. Un juguete, logotipo, cara de señalización, marco de litofanía o gabinete orientado al cliente puede necesitar un purgado agresivo. Un soporte interno oculto, un prototipo borrador o la parte posterior de una plantilla pueden tolerar más arrastre. La calculadora expone esa compensación haciendo que la torre de purga crezca cuando la dirección de transición es más difícil.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Destino claro',
          description: 'El blanco, natural, amarillo y gris pálido son destinos sensibles. Los colores previos oscuros o saturados necesitan una purga más larga antes de que estos colores se vean limpios.',
          points: ['Usar factores más altos', 'Agrupar secciones claras juntas', 'Evitar volver de negro a blanco repetidamente'],
        },
        {
          title: 'Destino oscuro',
          description: 'El negro, azul marino, verde oscuro y gris oscuro pueden ocultar residuos de colores más claros. Estas transiciones a menudo pueden usar multiplicadores más pequeños.',
          points: ['Menor riesgo visible', 'Buen objetivo después de colores claros', 'Color final útil en una secuencia'],
        },
        {
          title: 'Transición de tono similar',
          description: 'Moverse entre colores relacionados generalmente cuesta menos que cruzar de oscuro a claro. Rojo a naranja o gris a negro es normalmente más fácil que azul a amarillo.',
          points: ['El orden de colores importa', 'Las familias de tonos reducen el desperdicio', 'Procesar objetos similares juntos'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volumen de purga base', definition: 'El volumen normal que su slicer o perfil de calibración extruye para un cambio de filamento ordinario antes del escalado de la matriz.' },
        { term: 'Factor de transición', definition: 'Un multiplicador asignado a una dirección de un cambio de color, como negro a blanco o blanco a negro.' },
        { term: 'Proporción de purga', definition: 'Volumen de purga dividido por el volumen total extruido, incluyendo tanto el objeto como la torre de purga.' },
        { term: 'Arrastre de pigmento', definition: 'Residuo visible del color de filamento anterior que permanece en el hotend y aparece en la siguiente extrusión.' },
        { term: 'Purgado a relleno', definition: 'Una estrategia del slicer que redirige parte de la extrusión de limpieza al relleno oculto en lugar de a una torre o vertedero.' },
      ],
    },
    {
      type: 'title',
      text: 'Cómo reducir el desperdicio de filamento AMS sin arruinar la calidad del color',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La primera optimización es el orden de colores. Si un modelo se puede dividir, imprimir en grupos o disponer de modo que las transiciones de oscuro a claro ocurran menos veces, la torre de purga puede reducirse drásticamente. Los cambios repetidos de negro a blanco son costosos porque cada ciclo obliga a la impresora a eliminar un pigmento fuerte antes de un destino sensible. Si el mismo diseño visual se puede imprimir como blanco a negro una vez, o como piezas separadas ensambladas después, el presupuesto de material cambia inmediatamente.',
    },
    {
      type: 'paragraph',
      html: 'La segunda optimización es la elección del destino. Cuando varios colores son opcionales, elija un color final oscuro para los detalles que aparecen después de las regiones claras. Por ejemplo, el texto negro sobre una placa blanca suele ser más barato que el texto blanco sobre una placa negra porque esto último obliga a la impresora a limpiar el residuo oscuro antes de cada segmento blanco. Esta no es solo una decisión estética; cambia la cantidad física de polímero que debe empujarse a través del hotend.',
    },
    {
      type: 'list',
      items: [
        'Agrupe colores similares en el modelo o la cola de impresión para que los tonos relacionados compartan transiciones.',
        'Use el purgado a relleno cuando la contaminación interna del color sea aceptable y la pieza tenga suficiente volumen de relleno.',
        'Reduzca los intercambios de color dividiendo insignias, logotipos, etiquetas o inserciones decorativas en piezas impresas separadas.',
        'Use colores más oscuros después de colores más claros cuando el diseño lo permita.',
        'Ajuste los multiplicadores de purgado con muestras físicas, no solo con los valores predeterminados del slicer.',
        'Presupueste el costo de purga por separado en las cotizaciones al cliente para que el trabajo multicolor decorativo no se infravalore.',
      ],
    },
    {
      type: 'proscons',
      title: 'Compensaciones de optimización',
      items: [
        { pro: 'Factores de purga más bajos reducen la masa de la torre y el costo del filamento.', con: 'Muy poca purga puede crear rayas, tintes o superficies inaceptables orientadas al cliente.' },
        { pro: 'Dividir modelos puede eliminar muchos cambios de color.', con: 'El ensamblaje agrega mano de obra, gestión de tolerancias, pegamento, sujetadores o costuras visibles.' },
        { pro: 'El purgado a relleno convierte algo de desperdicio en plástico interno útil.', con: 'Funciona mejor solo cuando el objeto tiene suficiente volumen oculto y la contaminación es estructuralmente aceptable.' },
        { pro: 'Agrupar colores similares mejora la economía de la granja de impresión.', con: 'Puede retrasar trabajos urgentes únicos que necesitan una secuencia de color específica.' },
      ],
    },
    {
      type: 'title',
      text: 'Presupuestando impresiones multimaterial para clientes y granjas de impresión',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una cotización de impresión que valora solo el volumen final del objeto es incorrecta para trabajos de AMS y MMU. El cliente está comprando el proceso de fabricación, y el proceso incluye extrusión no productiva. Un pequeño llavero con muchos intercambios de color capa por capa puede desperdiciar más material que un soporte monocromático más grande. La calculadora hace visible esto comparando el volumen del objeto y el volumen de la torre de purga como dos bloques en competencia, en lugar de ocultar el desperdicio dentro de un solo número.',
    },
    {
      type: 'paragraph',
      html: 'Para una granja, la proporción de purga también es una señal de programación. Los trabajos de purga alta ocupan la impresora mientras convierten filamento en plástico de torre, por lo que la pérdida económica no es solo material. El tiempo de máquina dedicado a cambiar filamento, cortar, cargar, limpiar y reconstruir la presión es tiempo que no se dedica a producir volumen vendible. Cuando la proporción de purga es alta, considere si el artículo debe tener un recargo multicolor, si los colores deben limitarse, o si una solución pintada, con etiqueta impresa o ensamblada es más barata.',
    },
    {
      type: 'card',
      title: 'Regla de cotización para trabajo multicolor',
      html: 'Valore el objeto, luego valore la torre de purga como una línea de desperdicio separada. Si el cliente cambia de dos colores a cuatro, o agrega pequeños detalles aislados en muchas capas, actualice la cotización porque el recuento de transiciones cambia incluso cuando el volumen del modelo visible apenas se mueve.',
    },
    {
      type: 'table',
      headers: ['Proporción de purga', 'Interpretación', 'Acción recomendada'],
      rows: [
        ['Menos del 15%', 'Trabajo multicolor eficiente', 'Los supuestos de cotización normales suelen ser aceptables.'],
        ['15% al 30%', 'La pérdida de material es visible', 'Revise las transiciones y verifique si el purgado a relleno ayuda.'],
        ['Por encima del 30%', 'Alta proporción de desperdicio', 'Agrupe colores, divida el modelo, aumente la cotización o rediseñe la disposición de colores.'],
        ['Por encima del 50%', 'La torre domina la economía', 'Trate la impresión como un trabajo de producción especial, no como una impresión de objeto rutinaria.'],
      ],
    },
    {
      type: 'title',
      text: 'Leyendo los resultados del panel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los dos bloques horizontales son intencionalmente severos. El verde es el volumen real del objeto. El bloque de purga rayado es material que no se convierte en el producto visible. Si el bloque rayado comienza a verse físicamente comparable al bloque del objeto, la impresión merece escrutinio. Esta proporción visual suele ser más persuasiva que los gramos o la moneda porque muestra al usuario exactamente cuánto plástico se está asignando a la limpieza.',
    },
    {
      type: 'paragraph',
      html: 'El resultado de masa proviene del volumen multiplicado por la densidad. El PLA suele rondar 1,24 g/cm3, el PETG está comúnmente cerca de 1,27 g/cm3, el ABS es más bajo y los filamentos rellenos varían ampliamente. El resultado de precio usa el precio seleccionado por kilogramo. Si usa PLA seda especial, mezclas de fibra de carbono, soporte soluble o filamento de ingeniería, reemplace el precio y la densidad predeterminados. El mismo volumen de purga puede tener un peso económico muy diferente dependiendo del material.',
    },
    {
      type: 'summary',
      title: 'Lista de verificación de decisiones',
      items: [
        'Use la calibración de purga medida del slicer como volumen base.',
        'Cuente las transiciones repetidas, no solo la cantidad de colores cargados en el AMS o MMU.',
        'Vigile primero las transiciones de negro a blanco, de saturado a claro y de destino translúcido.',
        'Trate una proporción de purga superior al 30 por ciento como una advertencia de rediseño o recotización.',
        'Use el resultado de costo para la presupuestación de materiales y la barra visual para una revisión rápida del diseño.',
      ],
    },
    {
      type: 'message',
      title: 'Resultado práctico',
      html: 'Una impresión multimaterial es eficiente cuando los cambios de color están dispuestos de modo que la torre de purga se mantenga pequeña en relación con el objeto. Si la torre crece más allá de la línea de advertencia del 30 por ciento, la optimización más barata no suele ser un nuevo carrete o un perfil más rápido; es una mejor estrategia de color.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
