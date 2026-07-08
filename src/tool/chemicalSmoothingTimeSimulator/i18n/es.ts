import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'calculadora-tiempo-lijado-quimico-abs-pvb',
  title: 'Calculadora de Tiempo de Alisado Químico con Vapor de Acetona para ABS y Alcohol Isopropílico para PVB',
  description: 'Estima el tiempo conservador de exposición al vapor y secado para el alisado químico de ABS con acetona o de PVB con alcohol isopropílico a partir del volumen de la cámara, la temperatura, el volumen de la pieza y el detalle superficial.',
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    materialLabel: 'Material',
    absLabel: 'ABS + acetona',
    pvbLabel: 'PVB + alcohol isopropílico',
    chamberVolumeLabel: 'Cámara de vapor',
    chamberTemperatureLabel: 'Temp. de cámara',
    partVolumeLabel: 'Volumen de pieza',
    surfaceDetailLabel: 'Detalle superficial',
    fineDetailLabel: 'Detalles finos',
    balancedDetailLabel: 'Equilibrado',
    coarseDetailLabel: 'Capas gruesas',
    presetsLabel: 'Ajustes preestablecidos',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Pieza de exhibición',
    enclosurePresetLabel: 'Caja grande',
    exposureLabel: 'Exposición estimada',
    dryTimeLabel: 'Secado posterior',
    firstTrialLabel: 'Primera prueba',
    riskLabel: 'Riesgo para detalles',
    vaporMapLabel: 'Intensidad de vapor',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Entradas de alisado químico',
    resultsAriaLabel: 'Resultados de alisado químico',
    recommendationGentle: 'ventana suave',
    recommendationStandard: 'vigilar de cerca',
    recommendationAggressive: 'riesgo alto de pérdida de detalle',
    safetyNote: 'Úsalo solo como estimación conservadora de planificación. El vapor de disolvente es inflamable y peligroso: trabaja lejos de fuentes de ignición, usa ventilación y EPP, y comienza con una exposición de prueba corta.',
    copyButton: 'Copiar plan de alisado',
    copiedButton: 'Copiado',
    copiedSummaryTemplate: 'Estimación de alisado químico: {minutes} min ({seconds} s) de exposición, primera prueba a los {trialSeconds} s, secar durante aproximadamente {dryHours} h.',
  },
  seo: [
    { type: 'title', text: 'Cómo estimar el tiempo de alisado con vapor de acetona para ABS sin derretir los detalles', level: 2 },
    {
      type: 'paragraph',
      html: 'El alisado con vapor de acetona para ABS es un proceso controlado de disolución superficial. El vapor de acetona ablanda la capa externa del ABS, permitiendo que las marcas visibles de las capas FDM se relajen en una superficie más brillante. La ventana útil es estrecha: muy poca exposición deja las líneas de capa sin cambios, mientras que demasiada exposición redondea los bordes, ablanda el texto en relieve, cierra agujeros pequeños y puede hacer que las paredes finas se comben. Por lo tanto, es mejor tratar la estimación de tiempo como una <strong>ventana de inicio para pruebas cortas</strong>, no como una receta fija.',
    },
    {
      type: 'paragraph',
      html: 'La calculadora utiliza cinco variables prácticas que afectan fuertemente la duración del alisado: el par polímero-disolvente, el volumen de la cámara, la temperatura de la cámara, el volumen de la pieza impresa y el nivel de detalle superficial. La temperatura importa porque la presión de vapor y la actividad del disolvente aumentan rápidamente a medida que la cámara se calienta. El tamaño de la pieza importa porque las piezas más grandes presentan más superficie y masa térmica. El nivel de detalle importa porque el diente de un engranaje en miniatura, un logotipo o una lengüeta de ajuste a presión pueden arruinarse con un tiempo que se ve perfecto en una caja rectangular simple.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35%', label: 'primera prueba sensata del tiempo estimado' },
        { value: 'ABS/PVB', label: 'polímeros imprimibles comunes para alisado con vapor' },
        { value: 'horas', label: 'tiempo de secado antes de manipular o ensamblar' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'El alisado con vapor es una operación de acabado, no un paso de calibración dimensional',
      html: 'Si una pieza impresa debe alojar un rodamiento, una rosca, un sello, un ajuste a presión o un inserto, enmascara el área crítica o valida el proceso de alisado en una copia de sacrificio. El alisado químico cambia los bordes y puede modificar las tolerancias funcionales.',
    },
    { type: 'title', text: 'ABS con acetona vs PVB con alcohol isopropílico para alisado con vapor', level: 2 },
    {
      type: 'paragraph',
      html: 'El ABS generalmente se alisa con acetona porque la acetona es un disolvente eficaz para la superficie del acrilonitrilo butadieno estireno. El PVB, a menudo vendido como filamento destinado a impresiones transparentes o brillantes, se alisa comúnmente con alcohol isopropílico. El objetivo visual es similar, pero el comportamiento del proceso es diferente. El ABS con acetona puede volverse brillante y redondeado rápidamente, especialmente en una cámara cálida. El PVB con alcohol isopropílico suele ser más indulgente para el desarrollo gradual del brillo, pero aún puede perder nitidez si se expone durante demasiado tiempo.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS con vapor de acetona',
          description: 'Acción de alisado rápida y fuerte con alto riesgo de ablandar texto pequeño, esquinas, pasadores y paredes finas cuando la cámara está caliente.',
          points: ['Ideal para carcasas visibles y accesorios', 'Sensible a la temperatura', 'Necesita desgasificación prolongada antes de uso en espacios cerrados'],
        },
        {
          title: 'PVB con vapor de alcohol isopropílico',
          description: 'A menudo elegido para piezas visuales brillantes e impresiones translúcidas donde se desea una respuesta de alisado más lenta y controlable.',
          highlight: true,
          points: ['Útil para piezas de exhibición', 'Puede conservar mejor el detalle con ciclos cortos', 'Secar completamente antes de pulir o empaquetar'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Material', 'Disolvente típico', 'Carácter del proceso', 'Modo de fallo principal'],
      rows: [
        ['ABS', 'Acetona', 'Ablandamiento superficial rápido y brillo intenso', 'Bordes redondeados, paredes finas combadas, agujeros cerrados'],
        ['PVB', 'Alcohol isopropílico', 'Brillo gradual y reducción de velo más progresivos', 'Superficie pegajosa, textura manchada, detalle fino ablandado'],
        ['ASA', 'Acetona u otros disolventes', 'Familia similar al ABS pero dependiente de la formulación', 'Las piezas resistentes a UV aún pueden perder bordes nítidos'],
        ['PLA/PETG', 'No apto para esta calculadora', 'Los disolventes comunes no se comportan como el alisado ABS/PVB', 'Acabado deficiente o experimentación peligrosa con disolventes'],
      ],
    },
    {
      type: 'tip',
      title: 'Usa la configuración de material como un par disolvente, no solo como un nombre de plástico',
      html: 'Selecciona ABS cuando el proceso sea alisado con vapor de acetona y PVB cuando sea alisado con vapor de alcohol isopropílico. Diferentes mezclas de filamento, aditivos, pigmentos e historial de recocido pueden cambiar la respuesta real, así que prueba con el carrete exacto usado para la impresión final.',
    },
    { type: 'title', text: 'Por qué el volumen de la cámara cambia la duración del alisado químico', level: 2 },
    {
      type: 'paragraph',
      html: 'El volumen de la cámara afecta la rapidez con que se acumula la concentración de vapor y la uniformidad con que rodea la pieza impresa. Un frasco pequeño puede volverse agresivo rápidamente porque una pequeña cantidad de disolvente ocupa un pequeño espacio de cabeza. Una cámara más grande generalmente necesita más tiempo para alcanzar el mismo entorno de vapor efectivo, pero puede ser más uniforme si la fuente de disolvente está distribuida y la pieza está elevada sobre el contacto con el líquido. La calculadora aumenta el tiempo de exposición suavemente a medida que crece el volumen de la cámara, porque la relación es real pero no perfectamente lineal en configuraciones de acabado domésticas.',
    },
    {
      type: 'paragraph',
      html: 'La uniformidad importa tanto como la concentración media. Una pieza colocada demasiado cerca de una toalla empapada en disolvente, un charco o una placa caliente puede recibir un ataque direccional: una cara se vuelve brillante y blanda mientras que el lado opuesto permanece mate. Una cámara más alta también puede crear gradientes, especialmente si el vapor se condensa en la tapa y gotea. Por lo tanto, la interpretación más segura de un tiempo calculado es un intervalo de inspección programado: retira la pieza, inspecciona el brillo húmedo y detente antes de que los detalles nítidos comiencen a fluir.',
    },
    {
      type: 'list',
      items: [
        'Eleva la pieza sobre un soporte resistente a disolventes para que nunca toque el disolvente líquido.',
        'Mantén las fuentes absorbentes de disolvente alejadas de la superficie del modelo para evitar una sobreexposición unilateral.',
        'Usa una cámara lo suficientemente grande para que el vapor pueda circular alrededor de todas las caras visibles.',
        'Evita la condensación que gotea de la tapa; las gotas crean marcas, cráteres y puntos brillantes.',
        'No aumentes la cantidad de disolvente indefinidamente para compensar una cámara grande; la concentración y el riesgo de seguridad aumentan juntos.',
      ],
    },
    {
      type: 'card',
      title: 'Una cámara más grande no es automáticamente más segura',
      html: 'Los volúmenes sellados grandes pueden contener más vapor inflamable. Una cámara más grande puede ralentizar el alisado, pero también puede crear una atmósfera peligrosa más grande. Usa la cámara práctica más pequeña que le dé a la pieza espacio libre y exposición uniforme.',
    },
    { type: 'title', text: 'Temperatura, presión de vapor y pérdida de detalle', level: 2 },
    {
      type: 'paragraph',
      html: 'La temperatura es una de las variables más importantes porque la evaporación del disolvente aumenta a medida que la cámara se calienta. Unos pocos grados pueden cambiar el acabado de un alisado satinado lento a un brillo rápido y redondeo de bordes. El vapor de acetona caliente alrededor del ABS es especialmente implacable: la superficie puede pasar de mate a aspecto húmedo a blanda en un intervalo corto. La calculadora acorta el tiempo de exposición a medida que aumenta la temperatura de la cámara y eleva la puntuación de riesgo cuando las temperaturas superan una referencia ambiente normal.',
    },
    {
      type: 'paragraph',
      html: 'La calefacción activa es donde muchos procesos de alisado de aficionados se vuelven inseguros. Los vapores de acetona y alcohol isopropílico son inflamables, y los calentadores improvisados, interruptores, relés, chispas, placas calientes y electrónica mal sellada pueden crear un grave riesgo de incendio. Si la temperatura se controla, debe hacerse con equipos diseñados para contextos de vapor peligrosos, no con un calentador expuesto dentro de un recipiente sellado. Para la mayoría de los usuarios, el alisado a temperatura ambiente con inspecciones cortas es el flujo de trabajo más defendible.',
    },
    {
      type: 'table',
      headers: ['Condición de cámara', 'Comportamiento esperado', 'Respuesta práctica'],
      rows: [
        ['Habitación fría por debajo de 18 °C', 'Acción de vapor lenta y brillo retardado', 'Usa intervalos más largos pero inspecciona la condensación desigual'],
        ['Temperatura ambiente 20-25 °C', 'Línea base predecible para la mayoría de pruebas', 'Comienza con la estimación de la calculadora y la primera prueba'],
        ['Cámara cálida 26-32 °C', 'Ablandamiento más rápido y mayor riesgo para detalles', 'Acorta los ciclos y evita piezas funcionales delicadas'],
        ['Cámara caliente o con calefacción activa', 'Entorno de vapor muy agresivo', 'No improvises; el riesgo de incendio y sobreexposición aumentan drásticamente'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Nunca uses llama abierta ni elementos calefactores expuestos',
      html: 'Los vapores de acetona y alcohol isopropílico pueden inflamarse. Mantén las cámaras de alisado alejadas de llamas, chispas, herramientas calientes, interruptores que generen arco, motores con escobillas, calentadores no clasificados para servicio con vapor y manipulación propensa a estática.',
    },
    { type: 'title', text: 'Volumen de pieza, superficie y sensibilidad geométrica', level: 2 },
    {
      type: 'paragraph',
      html: 'La entrada etiquetada como volumen de pieza es un indicador práctico del tamaño general de la pieza. No es un sustituto perfecto del área superficial, pero es fácil de estimar a partir de las estadísticas del slicer y generalmente indica si la impresión es un botón pequeño, una figurita de exhibición o un panel de caja grande. Las piezas más grandes a menudo necesitan una exposición más prolongada para desarrollar un acabado visual uniforme, pero también tienen más bordes, esquinas y secciones delgadas que pueden mostrar una absorción desigual del disolvente.',
    },
    {
      type: 'paragraph',
      html: 'La geometría puede dominar el resultado. Un jarrón cilíndrico liso y un soporte de celosía pueden tener el mismo volumen pero una tolerancia al alisado completamente diferente. Las nervaduras finas, las letras en relieve marcadas, los agujeros pequeños, los canales internos, las colas de milano y las pinzas se ablandan más rápido que las superficies planas anchas. Cuando la pieza tiene geometría crítica, usa la configuración de detalle fino incluso si las líneas de capa son visibles, luego repite ciclos cortos en lugar de intentar una exposición larga.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Alisado con vapor', definition: 'Un proceso de acabado donde el vapor de disolvente ablanda solo la superficie externa de una impresión de polímero.' },
        { term: 'Sobreexposición', definition: 'Un intervalo de alisado suficientemente largo para redondear detalles, deformar paredes finas o dejar una superficie pegajosa.' },
        { term: 'Desgasificación', definition: 'El período posterior al alisado en que el disolvente absorbido se evapora de la superficie ablandada.' },
        { term: 'Detalle superficial', definition: 'Geometría pequeña como texto, textura, agujeros, crestas, pinzas y bordes afilados que pueden perderse durante el alisado.' },
        { term: 'Probeta de sacrificio', definition: 'Una pequeña impresión de prueba hecha del mismo filamento y configuración para validar la respuesta al disolvente antes de terminar la pieza real.' },
      ],
    },
    {
      type: 'summary',
      title: 'Reglas de geometría para elegir el nivel de detalle',
      items: [
        'Usa detalle fino para texto, engranajes, agujeros pequeños, ajustes a presión, roscas o paredes finas.',
        'Usa equilibrado para piezas decorativas con líneas de capa moderadas y sin ajustes apretados.',
        'Usa capas gruesas solo para formas simples donde los bordes redondeados sean aceptables.',
        'Divide modelos complejos en zonas enmascaradas y no enmascaradas cuando solo la carcasa exterior necesite brillo.',
      ],
    },
    { type: 'title', text: 'Cómo leer los resultados de la calculadora', level: 2 },
    {
      type: 'paragraph',
      html: 'El resultado de exposición es el tiempo total de vapor estimado para una primera pasada conservadora. Se muestra en minutos y segundos porque las ventanas de acabado cortas son más fáciles de gestionar con un temporizador. La primera prueba es deliberadamente más corta, generalmente alrededor de un tercio de la exposición calculada. Sacar la pieza temprano te permite verificar si la superficie está comenzando a brillar antes de que la pérdida de detalle sea permanente.',
    },
    {
      type: 'paragraph',
      html: 'El tiempo de secado estima cuánto tiempo debe reposar la impresión antes de manipularla, ensamblarla, pintarla, empaquetarla o sellarla. El secado no se trata solo de que la superficie se sienta seca. El disolvente puede permanecer en el polímero ablandado y continuar afectando el ajuste, el olor, la adherencia de la pintura y la sensación mecánica. Las piezas de ABS alisadas con acetona a menudo necesitan una desgasificación más prolongada que las piezas de PVB alisadas con alcohol isopropílico, especialmente cuando la pieza es gruesa o la exposición fue agresiva.',
    },
    {
      type: 'proscons',
      title: 'Una exposición larga vs varios ciclos cortos',
      items: [
        { pro: 'Una sola exposición es más rápida y fácil de programar.', con: 'Da poca advertencia antes de que los detalles finos se ablanden.' },
        { pro: 'Los ciclos cortos facilitan detenerse en un acabado satinado o semibrillante.', con: 'Requieren más manipulación y apertura repetida de la cámara.' },
        { pro: 'Las inspecciones múltiples reducen la posibilidad de destruir una impresión única.', con: 'El acabado puede ser ligeramente menos uniforme si la pieza se enfría o se seca entre ciclos.' },
      ],
    },
    {
      type: 'message',
      title: 'Mejor uso de la estimación',
      html: 'Configura un temporizador para la primera prueba, inspecciona la pieza con luz rasante, luego continúa en incrementos cortos. Detente mientras las líneas de capa aún sean apenas visibles; la superficie a menudo continúa relajándose por un corto tiempo después de la extracción.',
    },
    { type: 'title', text: 'Flujo de trabajo seguro para el alisado químico de ABS y PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'Un flujo de trabajo seguro comienza antes de abrir el disolvente. Imprime una pequeña probeta con el mismo filamento, altura de capa, número de paredes y configuración de enfriamiento. Limpia la pieza final para que el polvo y los aceites no queden atrapados bajo la piel ablandada. Prepara un soporte no reactivo, temporizador, guantes compatibles con el disolvente, protección ocular, ventilación y un lugar donde la pieza pueda secarse sin ser tocada. Mantén los recipientes de disolvente cerrados cuando no estés cargando activamente la cámara.',
    },
    {
      type: 'list',
      items: [
        'Confirma que el filamento sea realmente ABS o PVB, no PLA, PETG, mezcla de PC o material reciclado desconocido.',
        'Retira los soportes y lija solo antes del alisado; lijar después del alisado puede cortar el brillo de manera desigual.',
        'Enmascara agujeros, asientos de rodamientos, roscas y superficies de contacto si las dimensiones importan.',
        'Comienza con el tiempo de la primera prueba, luego añade intervalos cortos si el acabado sigue siendo demasiado mate.',
        'Seca la pieza en un área ventilada hasta que desaparezcan el olor a disolvente y la pegajosidad.',
        'Desecha los paños de disolvente y los materiales contaminados según las normas locales de residuos peligrosos.',
      ],
    },
    {
      type: 'tip',
      title: 'No juzgues el acabado mientras la superficie está húmeda',
      html: 'Una superficie de ABS o PVB recién expuesta puede verse más brillante de lo que estará después del secado. Inspecciona tanto el brillo como la geometría: si las esquinas parecen hinchadas o el texto pequeño se está ablandando, detente incluso si las líneas de capa aún son débilmente visibles.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La ventilación es parte del tiempo de proceso',
      html: 'El secado posterior al alisado debe ocurrir donde los vapores no puedan acumularse. Una pieza colocada inmediatamente en un cajón, bolsa de envío, vitrina o carcasa electrónica puede retener el olor y el disolvente más tiempo de lo esperado.',
    },
    { type: 'title', text: 'Problemas comunes y acciones correctivas', level: 2 },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa probable', 'Próximo ajuste'],
      rows: [
        ['Líneas de capa aún marcadas', 'Exposición demasiado corta o cámara demasiado fría', 'Repite con incrementos cortos en lugar de duplicar el tiempo'],
        ['Bordes redondeados o texto borroso', 'Sobreexposición para el nivel de detalle', 'Usa configuración de detalle fino, temperatura más baja o enmascara las características'],
        ['Superficie pegajosa después del secado', 'Demasiado disolvente absorbido o ventilación insuficiente', 'Extiende el tiempo de secado y reduce la exposición futura'],
        ['Un lado más brillante que el otro', 'Fuente de vapor desigual o pieza demasiado cerca del disolvente', 'Eleva la pieza, distribuye la fuente, rota solo entre ciclos'],
        ['Velo blanco o manchas nubladas', 'Condensación, humedad o evaporación desigual', 'Reduce la saturación de la cámara y evita goteos de la tapa'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Si una pieza se vuelve pegajosa, no intentes arreglarla añadiendo más vapor inmediatamente. Más disolvente generalmente profundiza la zona ablandada. Deja que la pieza se seque completamente, luego decide si un ciclo de seguimiento muy breve vale la pena. Si los bordes ya han fluido, la forma no se puede restaurar con el secado. Para piezas críticas, la solución más fiable es reimprimir con ajustes de slicer modificados y usar una ventana de acabado más corta.',
    },
    {
      type: 'card',
      title: 'Ajustes del slicer que reducen el tiempo de alisado',
      html: 'Una altura de capa más baja, extrusión estable, filamento seco, enfriamiento adecuado y un pressure advance bien ajustado reducen la cantidad de trabajo químico necesario. El alisado químico debe refinar una impresión, no ocultar ringings graves, huecos, burbujas, textura de filamento húmedo o subextrusión.',
    },
    {
      type: 'summary',
      title: 'Lista de verificación práctica de acabado',
      items: [
        'Estima la exposición con el material, cámara, temperatura, tamaño de pieza y nivel de detalle exactos.',
        'Ejecuta una probeta de sacrificio o primera prueba antes de comprometer la pieza final.',
        'Usa ciclos cortos cuando el detalle importe y detente antes de que la superficie pierda nitidez.',
        'Permite suficiente tiempo de secado para que el olor a disolvente, la pegajosidad y la blandura dimensional desaparezcan.',
        'Trata el control de vapor inflamable como un requisito de seguridad, no como una conveniencia opcional.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Cuánto tiempo debe permanecer el ABS en vapor de acetona?',
      answer: 'No hay un tiempo universal porque importan el tamaño de la cámara, la temperatura, la geometría de la pieza y la formulación del filamento. Usa la estimación de la calculadora como punto de partida, luego inspecciona en el tiempo más corto de la primera prueba antes de continuar.',
    },
    {
      question: '¿Se puede alisar el PVB con vapor de alcohol isopropílico?',
      answer: 'Sí, muchos filamentos de PVB están diseñados para alisarse con alcohol isopropílico. El proceso suele ser más gradual que el ABS con acetona, pero la sobreexposición aún puede volver la superficie pegajosa o borrar los detalles finos.',
    },
    {
      question: '¿Una cámara más cálida reduce el tiempo de alisado?',
      answer: 'Sí. El vapor de disolvente más cálido generalmente actúa más rápido, pero también aumenta la inflamabilidad y el riesgo de pérdida de detalle. Evita los calentadores improvisados y mantén el vapor alejado de fuentes de ignición.',
    },
    {
      question: '¿Cuánto tiempo debe secarse una pieza alisada?',
      answer: 'Planifica horas, no minutos. El ABS alisado con acetona a menudo necesita una desgasificación más prolongada que el PVB alisado con alcohol isopropílico, especialmente para piezas gruesas o exposiciones agresivas.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Elige el par material y disolvente', text: 'Selecciona ABS para alisado con vapor de acetona o PVB para alisado con vapor de alcohol isopropílico.' },
    { name: 'Introduce las condiciones de la cámara', text: 'Añade el volumen de la cámara de vapor y la temperatura de la cámara usando unidades métricas o US.' },
    { name: 'Describe la pieza', text: 'Introduce el volumen aproximado de la pieza y elige un nivel de detalle superficial que coincida con las características más pequeñas.' },
    { name: 'Usa la primera prueba', text: 'Inspecciona la pieza en el tiempo de prueba más corto antes de ejecutar la exposición completa estimada.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Tiempo de Alisado Químico con Vapor de Acetona para ABS y Alcohol Isopropílico para PVB',
      description: 'Estima el tiempo de exposición al vapor químico y secado para el acabado de ABS con acetona y PVB con alcohol isopropílico.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo debe permanecer el ABS en vapor de acetona?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usa una estimación conservadora basada en el volumen de la cámara, la temperatura, el tamaño de la pieza y el nivel de detalle, luego inspecciona en un tiempo de primera prueba más corto.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo estimar el tiempo de alisado químico para impresiones de ABS o PVB',
      step: [
        { '@type': 'HowToStep', text: 'Selecciona ABS con acetona o PVB con alcohol isopropílico.' },
        { '@type': 'HowToStep', text: 'Introduce el volumen y la temperatura de la cámara.' },
        { '@type': 'HowToStep', text: 'Introduce el volumen de la pieza y el nivel de detalle superficial.' },
        { '@type': 'HowToStep', text: 'Comienza con la primera prueba y continúa solo si el detalle sigue siendo seguro.' },
      ],
    },
  ],
};
