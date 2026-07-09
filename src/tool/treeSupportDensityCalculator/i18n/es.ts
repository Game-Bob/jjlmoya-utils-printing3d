import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'calculadora-densidad-soportes-arbol',
  title: 'Calculadora de Densidad de Soportes Árbol',
  description: 'Estima el diámetro del dosel, volumen de soporte, número de ramas, diámetro de contacto y estabilidad de los soportes árbol a partir de la altura del punto de apoyo, el ángulo de ramificación, la densidad de ramas y el diámetro basal del tronco.',
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    presetsLabel: 'Ejemplos',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Equilibrado',
    tallPresetLabel: 'Alto',
    supportHeightLabel: 'Altura del soporte',
    branchAngleLabel: 'Ángulo de rama',
    branchDensityLabel: 'Densidad de ramas',
    baseTrunkDiameterLabel: 'Diámetro basal del tronco',
    canopyDiameterLabel: 'Dosel superior',
    supportVolumeLabel: 'Volumen estimado',
    stabilityLabel: 'Estabilidad',
    filamentMassLabel: 'Masa de filamento',
    branchCountLabel: 'Número de ramas',
    contactDiameterLabel: 'Diámetro de contacto',
    trunkVolumeLabel: 'Volumen del tronco',
    branchVolumeLabel: 'Volumen de ramas',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'estabilidad baja',
    stabilityBalanced: 'estabilidad equilibrada',
    stabilityHigh: 'estabilidad alta',
    controlsAriaLabel: 'Controles de densidad de soporte árbol',
    resultsAriaLabel: 'Resultados de densidad de soporte árbol',
    copyButton: 'Copiar configuración',
    copiedButton: 'Copiado',
    copiedSummaryTemplate: 'Estimación de soporte árbol: dosel {canopy}, volumen {volume}, estabilidad {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'in',
    cubicCentimetersUnit: 'cm3',
    cubicInchesUnit: 'in3',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: '°',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Cómo la Densidad de los Soportes Árbol Afecta al Uso de Filamento y la Estabilidad', level: 2 },
    {
      type: 'paragraph',
      html: 'Los soportes árbol son eficientes porque separan el trabajo en un <strong>camino de carga</strong> y un <strong>patrón de contacto</strong>. El tronco soporta la mayor parte de la carga vertical desde la base, mientras que las ramas más pequeñas se extienden hacia los voladizos solo donde se necesita contacto. Una calculadora de densidad de soportes árbol resulta útil porque los controles más visibles del laminador, como el ángulo de ramificación y la densidad de ramas, interactúan con la altura del punto de apoyo y el diámetro basal del tronco. Una densidad de ramas baja puede ahorrar filamento, pero también reduce el número de trayectorias que resisten el bamboleo. Un ángulo de ramificación pronunciado puede alcanzar piezas altas con menos extensión horizontal, pero concentra la carga cerca del tronco y puede fallar en soportes altos y estrechos.',
    },
    {
      type: 'paragraph',
      html: 'La calculadora estima tres valores difíciles de juzgar a simple vista en la vista previa del laminador: el diámetro del dosel superior, el volumen de soporte y la puntuación de estabilidad. El diámetro del dosel superior indica cuán ancha se vuelve la corona de ramas cerca del modelo. El volumen de soporte estima el material impreso necesario para el tronco y las ramas. La estabilidad combina el ángulo, la densidad, el diámetro basal, la altura y la extensión del dosel en una puntuación práctica. El objetivo no es reemplazar el motor del laminador; el objetivo es elegir valores de partida antes de laminar para dedicar menos tiempo a iterar previsualizaciones de soportes.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50°', label: 'rango de ángulo de rama común para alcance y resistencia equilibrados' },
        { value: '25-55%', label: 'banda práctica de densidad de ramas para muchas impresiones FDM' },
        { value: '2-8 mm', label: 'rango típico de diámetro basal del tronco en soportes árbol para impresoras domésticas' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Esto es una calculadora de planificación, no una exportación geométrica del laminador',
      html: 'Cada laminador genera los soportes árbol de forma distinta. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer y otras herramientas usan nombres y algoritmos diferentes para la generación de ramas, la evasión de colisiones, la interfaz de soporte y los puntos de contacto. Usa los resultados como una dirección de ajuste y confirma la geometría final en la vista previa del laminador antes de imprimir.',
    },
    { type: 'title', text: 'Ángulo de Ramificación: Alcance, Camino de Carga y Riesgo de Fallo', level: 2 },
    {
      type: 'paragraph',
      html: 'El ángulo de ramificación controla cuán agresivamente se extiende un soporte árbol desde el tronco hacia el modelo. Un ángulo más bajo mantiene las ramas más verticales, lo que generalmente mejora la rigidez y reduce el bamboleo lateral. Un ángulo más alto alcanza más lejos sobre el espacio vacío, lo que puede reducir el número de troncos necesarios, pero aumenta la carga de flexión y puede crear segmentos de rama largos sin soporte. En soportes altos, un pequeño cambio de 50 a 60 grados puede convertir un árbol estable en una estructura flexible que vibra cuando la boquilla lo roza.',
    },
    {
      type: 'paragraph',
      html: 'El mejor ángulo de ramificación depende de la altura del punto de apoyo. Un árbol corto bajo un voladizo pequeño puede usar un ángulo más amplio porque la longitud de la rama es limitada. Un punto de apoyo alto necesita un ángulo más conservador, especialmente con materiales flexibles, movimientos de viaje rápidos o una superficie de cama que libera los soportes fácilmente. Si el punto de apoyo es alto y el ángulo de ramificación es amplio, aumenta el diámetro basal del tronco o la densidad para que la corona de ramas no esté sostenida por una columna delgada.',
    },
    {
      type: 'table',
      headers: ['Ángulo de rama', 'Mejor uso', 'Riesgo si se excede', 'Ajuste'],
      rows: [
        ['20-35°', 'Soportes altos y torres estrechas', 'Puede requerir más troncos porque el alcance es limitado', 'Aumenta la densidad solo donde la cobertura de contacto es pobre'],
        ['36-50°', 'Ajuste general de soportes árbol', 'Generalmente equilibrado, pero aún depende de la altura', 'Empieza aquí para la mayoría de impresiones en PLA y PETG'],
        ['51-65°', 'Voladizos amplios con altura moderada', 'Las ramas pueden flexionarse durante viajes o contactos', 'Usa un tronco basal más grueso y densidad moderada'],
        ['66-75°', 'Casos especiales con alcance muy amplio', 'Alta carga de flexión y raíces de rama débiles', 'Previsualiza con cuidado y ralentiza la impresión de soportes'],
      ],
    },
    {
      type: 'tip',
      title: 'No busques el alcance solo con el ángulo',
      html: 'Si las ramas deben viajar lejos, prueba añadir un tronco extra o aumentar la densidad del dosel antes de llevar el ángulo al límite superior. Un segundo tronco cercano suele usar menos material que un árbol sobreextendido que necesita una base pesada para sobrevivir.',
    },
    { type: 'title', text: 'Densidad de Ramas: Cobertura de Contacto Sin Marcas de Soporte', level: 2 },
    {
      type: 'paragraph',
      html: 'La densidad de ramas describe cuánta estructura de ramas se crea cerca del área soportada. Una densidad baja reduce el filamento y facilita la extracción, pero puede dejar bordes de voladizo mal soportados. Una densidad alta mejora la cobertura y distribuye la carga entre más contactos, pero aumenta el tiempo de impresión, las marcas de contacto y la probabilidad de que los soportes se fusionen con superficies delicadas. La densidad adecuada no es el número más alto que parezca seguro; es el número más bajo que evita que los voladizos se comben mientras mantiene suficiente rigidez.',
    },
    {
      type: 'paragraph',
      html: 'Para modelos decorativos, la densidad a menudo puede reducirse porque una ligera textura en la parte inferior puede ser aceptable. Para piezas mecánicas, la densidad necesita más cuidado porque los agujeros sin soporte, los chaflanes y las superficies de acoplamiento pueden afectar el ajuste. Los materiales también importan. El PLA tolera soportes más ligeros porque es rígido y hace puentes limpios. El PETG a menudo necesita espacios de aire más grandes y un diámetro de contacto cuidado porque se adhiere fuertemente a los soportes. El TPU y los filamentos flexibles necesitan una geometría conservadora porque las ramas delgadas pueden desviarse en lugar de mantener el voladizo en posición.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Densidad baja',
          description: 'Ideal cuando la calidad de extracción y el ahorro de filamento importan más que el acabado perfecto de la cara inferior.',
          points: ['Impresión de soportes más rápida', 'Cobertura de contacto más débil', 'Útil para miniaturas orgánicas'],
        },
        {
          title: 'Densidad equilibrada',
          description: 'Un valor predeterminado práctico para geometría mixta donde los voladizos necesitan soporte pero la superficie del modelo debe mantenerse limpia.',
          highlight: true,
          points: ['Buena eficiencia de material', 'Esfuerzo de extracción moderado', 'Funciona para muchos trabajos en PLA y PETG'],
        },
        {
          title: 'Densidad alta',
          description: 'Útil para voladizos pesados, puntos de apoyo altos y regiones de contacto frágiles, pero aumenta las marcas.',
          points: ['Mejor distribución de carga', 'Más volumen y tiempo de impresión', 'Mayor riesgo de contactos fusionados'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Aumentar la densidad de ramas',
      items: [
        { pro: 'Más puntos de contacto reducen el combado bajo voladizos curvos.', con: 'Más puntos de contacto pueden dejar marcas más visibles tras la extracción.' },
        { pro: 'Un dosel más denso distribuye la carga entre varias ramas.', con: 'El laminador puede generar una corona voluminosa difícil de alcanzar con cortadores de flush.' },
        { pro: 'Los soportes altos se vuelven menos sensibles a los roces de la boquilla.', con: 'El tiempo de impresión y el uso de filamento aumentan rápidamente cuando la densidad se combina con un dosel grande.' },
      ],
    },
    { type: 'title', text: 'Diámetro Basal del Tronco y por Qué FAllan los Soportes Árbol Altos', level: 2 },
    {
      type: 'paragraph',
      html: 'El diámetro basal del tronco es la base del árbol. Un tronco delgado puede ser perfectamente adecuado para un soporte corto, pero el mismo diámetro se vuelve arriesgado cuando el punto soportado es alto. La altura aumenta el apalancamiento: un pequeño impacto de boquilla, un roce de viaje o la vibración del ventilador de enfriamiento producen más movimiento en el dosel. Si el tronco es demasiado delgado para la altura, el soporte puede no romperse de inmediato; puede inclinarse lentamente, desplazar el punto de contacto o despegarse de la cama antes de que el voladizo esté terminado.',
    },
    {
      type: 'paragraph',
      html: 'Un diámetro de tronco mayor mejora la rigidez y la adhesión a la cama, pero también consume material. La calculadora trata el diámetro del tronco como una entrada de estabilidad, no como un ajuste cosmético. Si la puntuación de estabilidad es baja, aumentar el diámetro suele ser más efectivo que aumentar la densidad de ramas porque fortalece el camino de carga desde la base. Si la puntuación ya es alta, un tronco más grande solo puede dificultar la extracción y desperdiciar filamento.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Altura del punto de apoyo', definition: 'La distancia vertical desde la cama hasta la región del modelo que necesita soporte.' },
        { term: 'Ángulo de ramificación', definition: 'El ángulo que usan las ramas al extenderse desde el tronco hacia los puntos de contacto del soporte.' },
        { term: 'Densidad de ramas', definition: 'La cantidad relativa de estructura de ramas y cobertura de contacto creada cerca del área soportada.' },
        { term: 'Diámetro basal del tronco', definition: 'El diámetro aproximado de la columna principal del soporte árbol donde comienza en la cama.' },
        { term: 'Dosel', definition: 'La anchura estimada de la corona superior de ramas cerca del voladizo del modelo.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Un dosel alto sobre un tronco delgado es el modo de fallo clásico de los soportes árbol',
      html: 'Si el diámetro del dosel es muchas veces mayor que el diámetro del tronco, el soporte se comporta como una estructura con centro de gravedad alto. Añade otro tronco, reduce el ángulo de ramificación o aumenta el diámetro basal antes de simplemente añadir más densidad de ramas.',
    },
    { type: 'title', text: 'Diámetro del Dosel Superior y Espacio Libre del Modelo', level: 2 },
    {
      type: 'paragraph',
      html: 'El diámetro del dosel superior es importante porque los soportes árbol deben encajar alrededor del modelo, evitar colisiones y seguir siendo extraíbles. Un dosel grande puede soportar bien el voladizo, pero también puede envolver detalles, entrar en cavidades o crear ramas difíciles de romper. Un dosel pequeño es más fácil de extraer, pero puede concentrar la fuerza de contacto en pocos puntos y permitir que los bordes se comben. La calculadora estima el diámetro del dosel a partir de la altura del soporte, el ángulo de ramificación, la densidad y el diámetro basal para que puedas predecir si la corona de soporte generada será compacta o expansiva.',
    },
    {
      type: 'paragraph',
      html: 'La vista previa del laminador es esencial para la holgura del dosel. Observa si las ramas pasan a través de agujeros pequeños, bajo texto en relieve, alrededor de dedos en figuritas o entre características mecánicas. Si una rama puede alcanzar un área, también puede atraparse allí. Una densidad más baja, un diámetro de contacto más pequeño, bloqueadores de soporte más ajustados o el pintado manual pueden evitar que los soportes árbol sean más difíciles de extraer que los soportes de rejilla estándar.',
    },
    {
      type: 'table',
      headers: ['Comportamiento del dosel', 'Causa probable', 'Consecuencia en impresión', 'Solución'],
      rows: [
        ['El dosel es demasiado estrecho', 'El ángulo y la densidad son conservadores', 'Los bordes del voladizo se comban entre los puntos de contacto', 'Aumenta la densidad o añade puntos de soporte manuales'],
        ['El dosel es amplio pero inestable', 'Ángulo alto en un soporte alto', 'El contacto de la boquilla puede sacudir la estructura', 'Reduce el ángulo o aumenta el diámetro del tronco'],
        ['El dosel rodea los detalles', 'Densidad alta alrededor de geometría compleja', 'Las marcas de extracción son visibles en las superficies', 'Usa bloqueadores de soporte o reduce la densidad'],
        ['El dosel toca las paredes laterales', 'La holgura del soporte es demasiado pequeña', 'Las ramas pueden fusionarse con la pieza', 'Aumenta la distancia X/Y o reduce el diámetro de contacto'],
      ],
    },
    {
      type: 'card',
      title: 'El diámetro del dosel es una advertencia previa',
      html: 'Un dosel estimado grande no es automáticamente malo. Significa que la vista previa del laminador merece atención porque la corona de soporte puede convertirse en el principal desafío de extracción.',
    },
    { type: 'title', text: 'Volumen de Soporte, Longitud de Filamento y Tiempo de Impresión', level: 2 },
    {
      type: 'paragraph',
      html: 'El volumen de soporte es el coste práctico de la configuración elegida. Un soporte árbol puede parecer ligero en la vista previa, pero un dosel denso y un tronco grueso aún pueden consumir filamento significativo. La calculadora informa del volumen estimado en centímetros cúbicos. Esto ayuda a comparar configuraciones antes de laminar, especialmente cuando decides si un tronco más alto, una densidad mayor o un alcance extra de ramas vale el material.',
    },
    {
      type: 'paragraph',
      html: 'El volumen no se traduce perfectamente en tiempo de impresión porque los laminadores usan diferentes anchos de línea, recuentos de paredes, patrones de relleno, límites de aceleración y velocidades de soporte. Sin embargo, el volumen sigue siendo un indicador sólido. Si dos configuraciones producen una estabilidad similar pero una usa mucho menos volumen, la configuración de menor volumen suele ser el mejor punto de partida. Si la configuración de menor volumen también produce una puntuación de estabilidad baja, el ahorro puede desaparecer cuando la impresión falla o la cara inferior necesita retoques.',
    },
    {
      type: 'summary',
      title: 'Cómo reducir el volumen de soporte de forma segura',
      items: [
        'Reduce primero la densidad de ramas cuando la puntuación de estabilidad ya es alta.',
        'Reduce el ángulo de ramificación cuando el dosel es muy ancho y con centro de gravedad alto.',
        'Usa un tronco basal más pequeño solo en soportes cortos con cargas de voladizo modestas.',
        'Divide un árbol grande en dos árboles más pequeños cuando el alcance crea una corona voluminosa.',
        'Ajusta el diámetro de contacto por separado para que las marcas superficiales no fuercen una densidad innecesaria.',
      ],
    },
    {
      type: 'message',
      title: 'El ahorro de material solo es útil si el soporte sobrevive',
      html: 'Un soporte fallido suele costar más filamento que uno ligeramente más resistente. Trata los grandes porcentajes de ahorro como una invitación a previsualizar con cuidado, no como una prueba de que el soporte más ligero es automáticamente correcto.',
    },
    { type: 'title', text: 'Diámetro de Contacto del Soporte Árbol y Calidad de Superficie', level: 2 },
    {
      type: 'paragraph',
      html: 'El diámetro de contacto controla cuánto del soporte árbol toca el modelo. Los contactos pequeños se limpian bien y reducen las marcas, pero pueden desprenderse de voladizos pesados o calientes. Los contactos más grandes sujetan mejor y distribuyen el calor, pero pueden soldarse al PETG, dejar puntos elevados en el PLA o dañar el detalle similar a resina en impresiones decorativas. Esta calculadora estima un diámetro de contacto a partir del diámetro de rama y la densidad para que el resultado se mantenga conectado a la estructura de soporte en lugar de tratarse como un valor cosmético aislado.',
    },
    {
      type: 'paragraph',
      html: 'Los ajustes de contacto deben afinarse junto con la distancia Z superior y el comportamiento de la interfaz. Si el espacio vertical es demasiado pequeño, incluso un contacto diminuto puede adherirse fuertemente. Si el espacio vertical es demasiado grande, un contacto ancho puede seguir sin soportar el voladizo porque el filamento tiene espacio para combarse. Para piezas funcionales, prueba el diámetro de contacto en un voladizo de calibración hecho del mismo material, tamaño de boquilla, altura de capa y ajustes de enfriamiento que los del modelo real.',
    },
    {
      type: 'list',
      items: [
        'Usa diámetros de contacto más pequeños en superficies cosméticas visibles.',
        'Usa contactos más grandes bajo puentes pesados, voladizos gruesos o materiales de alta temperatura.',
        'Aumenta la distancia Z superior antes de culpar a la densidad del árbol cuando los soportes son difíciles de extraer.',
        'Reduce la velocidad de la interfaz de soporte si los puntos de contacto se sueltan durante la impresión.',
        'Verifica si el laminador llama a este ajuste diámetro de contacto, diámetro de punta o contacto de interfaz de soporte.',
      ],
    },
    {
      type: 'tip',
      title: 'El PETG necesita precaución extra',
      html: 'El PETG se adhiere agresivamente al material de soporte impreso con el mismo filamento. Una densidad de árbol moderada con una distancia Z cuidadosa suele funcionar mejor que un dosel muy denso con contactos grandes.',
    },
    { type: 'title', text: 'Flujo de Trabajo Recomendado para Soportes Árbol en el Laminador', level: 2 },
    {
      type: 'paragraph',
      html: 'Empieza introduciendo la altura del punto de apoyo más alto, no la altura total del modelo. Un modelo puede ser alto mientras la región soportada está cerca de la cama, o corto mientras un voladizo crítico se sitúa alto sobre una isla estrecha. Luego elige un ángulo de ramificación en el rango equilibrado y ajusta la densidad de ramas según la calidad de superficie que necesites. Finalmente, configura el diámetro basal del tronco según la altura y la carga esperada. La calculadora mostrará si la combinación es eficiente en volumen, estable o arriesgada.',
    },
    {
      type: 'paragraph',
      html: 'Después de calcular, ve a la vista previa del laminador e inspecciona el soporte árbol generado desde la primera capa hasta el contacto final. Busca inicios flotantes, raíces de rama muy delgadas, ramas que pasan demasiado cerca del modelo e islas de voladizo sin soporte. Si el soporte es inestable en la calculadora y se ve escaso en la vista previa, refuerza el tronco o reduce el ángulo de ramificación. Si el soporte es estable pero visualmente voluminoso, reduce la densidad y comprueba si el patrón de contacto sigue cubriendo el voladizo.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Un buen ajuste de soporte árbol es aburrido en la vista previa',
      html: 'La vista previa debe mostrar un tronco claro, trayectorias de rama cortas, suficientes contactos bajo el voladizo y espacio abierto alrededor de los detalles. Si el árbol tiene un aspecto visualmente dramático, puede que esté haciendo demasiado.',
    },
    {
      type: 'summary',
      title: 'Secuencia rápida de ajuste',
      items: [
        'Introduce la altura del punto de apoyo, no solo la altura del modelo.',
        'Empieza cerca de 45-50° para el ángulo de ramificación.',
        'Usa 30-45% de densidad para impresiones generales en PLA, luego ajusta desde la vista previa.',
        'Aumenta el diámetro del tronco antes de hacer soportes altos extremadamente densos.',
        'Confirma el diámetro de contacto y la holgura en la vista previa real del laminador.',
      ],
    },
    { type: 'title', text: 'Cuándo los Soportes Árbol Son Mejores Que los Soportes Normales', level: 2 },
    {
      type: 'paragraph',
      html: 'Los soportes árbol son más útiles cuando se necesita soporte en regiones aisladas: brazos de figuritas, cascos, cuernos de criaturas, esculturas orgánicas, arcos decorativos y voladizos curvos. Evitan llenar toda el área bajo el modelo, por lo que a menudo usan menos filamento y dejan menos marcas que los soportes de rejilla. También son útiles cuando los soportes estándar crearían una pared grande difícil de extraer de una superficie curva.',
    },
    {
      type: 'paragraph',
      html: 'Los soportes estándar pueden seguir siendo mejores para voladizos técnicos planos, estantes horizontales anchos y superficies que necesitan una interfaz de soporte uniforme. Un dosel de soporte árbol toca puntos seleccionados, mientras que los soportes normales pueden proporcionar un plano más uniforme. Si la cara inferior debe ser dimensionalmente precisa, compara ambos enfoques. Un árbol denso puede usar más material que un soporte rectilíneo simple si el voladizo es ancho y plano.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Soportes árbol',
          description: 'Ideales para geometría orgánica, áreas de contacto dispersas y modelos donde el acceso de extracción importa.',
          highlight: true,
          points: ['Menos material en voladizos aislados', 'Acceso más limpio alrededor de formas curvas', 'Sensible al ángulo de rama y la rigidez del tronco'],
        },
        {
          title: 'Soportes normales',
          description: 'Ideales para voladizos planos anchos, interfaces predecibles y superficies mecánicas simples.',
          points: ['Cobertura uniforme de la cara inferior', 'A menudo más fáciles de razonar', 'Pueden usar mucho más filamento bajo modelos complejos'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Usa ambos tipos de soporte cuando el modelo lo requiera',
      html: 'Muchos laminadores permiten pintado de soportes, bloqueadores o mallas modificadoras. Un modelo puede usar soportes árbol para las características orgánicas y soportes normales para una superficie de ingeniería plana.',
    },
  ],
  faq: [
    {
      question: '¿Cuál es un buen ángulo de ramificación para soportes árbol?',
      answer: 'Un rango práctico de partida es de unos 40-50°. Usa ángulos más bajos para soportes altos y ángulos más altos solo cuando necesites más alcance y el tronco sea suficientemente resistente.',
    },
    {
      question: '¿Una mayor densidad de soporte árbol siempre mejora la calidad de impresión?',
      answer: 'No. Una densidad mayor mejora la cobertura de contacto y la estabilidad, pero también aumenta el filamento, el tiempo de impresión y las marcas de soporte. Usa la densidad más baja que soporte el voladizo de forma fiable.',
    },
    {
      question: '¿Cómo debo elegir el diámetro basal del tronco?',
      answer: 'Aumenta el diámetro basal del tronco a medida que aumenta la altura del punto de apoyo. Los soportes altos necesitan un camino de carga más fuerte, mientras que los soportes cortos pueden usar a menudo un tronco más pequeño para ahorrar material.',
    },
    {
      question: '¿Por qué importa el diámetro del dosel?',
      answer: 'El diámetro del dosel predice cuán ancha se vuelve la corona superior de ramas. Un dosel ancho puede soportar bien, pero puede colisionar con detalles, atraparse en cavidades o volverse difícil de extraer.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Introduce la altura del punto de apoyo', text: 'Usa la distancia vertical desde la cama hasta el área del modelo que necesita soporte.' },
    { name: 'Configura el ángulo y la densidad de ramas', text: 'Elige los valores planificados de ángulo de ramificación y densidad de ramas del laminador.' },
    { name: 'Añade el diámetro basal del tronco', text: 'Introduce el diámetro aproximado del tronco principal del árbol usado por el laminador.' },
    { name: 'Revisa la estabilidad y el volumen', text: 'Compara la puntuación de estabilidad, el diámetro del dosel y el volumen de soporte estimado antes de laminar.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Densidad de Soportes Árbol',
      description: 'Optimiza la densidad de soportes árbol, el ángulo de ramificación, el diámetro basal del tronco, el diámetro del dosel, el volumen de soporte y la estabilidad en impresión 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuál es un buen ángulo de ramificación para soportes árbol?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un rango práctico de partida es de unos 40-50°, con ángulos más bajos para soportes altos y ángulos más amplios solo cuando se necesita más alcance.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo ajustar la densidad de soportes árbol para una impresión 3D',
      step: [
        { '@type': 'HowToStep', text: 'Introduce la altura del punto de apoyo.' },
        { '@type': 'HowToStep', text: 'Configura el ángulo de ramificación, la densidad de ramas y el diámetro basal del tronco.' },
        { '@type': 'HowToStep', text: 'Revisa el diámetro del dosel, el volumen de soporte y la puntuación de estabilidad.' },
        { '@type': 'HowToStep', text: 'Aplica los valores en la vista previa del laminador y ajusta los ajustes de contacto.' },
      ],
    },
  ],
};
