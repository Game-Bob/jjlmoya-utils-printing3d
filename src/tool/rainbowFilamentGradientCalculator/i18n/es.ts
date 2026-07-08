import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'calculadora-transicion-filamento-arcoiris',
  title: 'Calculadora de Longitud de Transición de Filamento Arcoíris para Impresión 3D',
  description: 'Estima los ciclos de color del filamento arcoíris, el uso del carrete y dónde aparecerán las transiciones de degradado a lo largo de la altura Z de una impresión 3D seccionada.',
  ui: {
    unitMetric: 'Métrico',
    unitImperial: 'US',
    cycleLength: 'Longitud del ciclo de color',
    partWeight: 'Peso de la pieza seccionada',
    density: 'Densidad',
    diameter: 'Diámetro del filamento',
    partHeight: 'Altura Z impresa',
    startOffset: 'Desplazamiento inicial en el carrete',
    presets: 'Ajustes preestablecidos de material',
    pla: 'PLA arcoíris',
    petg: 'Mezcla PETG',
    silk: 'Seda multicolor',
    usedFilament: 'Filamento usado',
    cyclesInPart: 'Ciclos en la pieza',
    heightPerCycle: 'Z por ciclo',
    gramsPerCycle: 'Masa por ciclo',
    zMap: 'Mapa de transición Z',
    transitionBands: 'Bandas de transición visibles',
    phaseWindow: 'Fase del ciclo',
    copySummary: 'Copiar resumen del degradado',
    reset: 'Restablecer',
    emptyValue: '0',
    copyTemplate: 'Estimación de filamento arcoíris',
    copyCycles: 'ciclos de color',
    copyUsed: 'usado',
    copyZCycle: 'por ciclo',
  },
  seo: [
    { type: 'title', text: 'Cómo funciona una calculadora de longitud de transición de filamento arcoíris', level: 2 },
    { type: 'paragraph', html: 'Una calculadora de longitud de transición de filamento arcoíris conecta dos números del slicer que normalmente se ven por separado: <strong>masa del modelo</strong> y <strong>altura impresa</strong>. El slicer te indica cuántos gramos de material consumirá la pieza, mientras que el fabricante del filamento o una medición manual te dice cuántos metros necesita el carrete para completar un ciclo de color completo. Una vez que esos valores están en el mismo modelo de flujo de material, puedes estimar cuántos ciclos de color aparecen en el objeto y dónde aterriza cada banda de color en el eje Z.' },
    { type: 'paragraph', html: 'La conversión principal es física, no visual. Una pieza seccionada que pesa 180 g no consume automáticamente la misma longitud de filamento en cada carrete, porque la longitud depende de la densidad y el diámetro. El PLA, el PETG, el PLA de seda, las mezclas rellenas y las mezclas translúcidas pueden tener densidades diferentes. Un filamento nominal de 1,75 mm también tiene variación de tolerancia, por lo que una calculadora debería permitir ajustar el diámetro en lugar de asumir el valor predeterminado para siempre.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,75 mm', label: 'diámetro común de filamento FDM', icon: 'mdi:circle-slice-8' },
      { value: '1,24 g/cm3', label: 'densidad típica del PLA usada en estimaciones', icon: 'mdi:flask' },
      { value: '30 m', label: 'ejemplo de ciclo de color arcoíris completo', icon: 'mdi:palette' },
      { value: 'Eje Z', label: 'donde la longitud del ciclo se vuelve visible', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Mide un ciclo real antes de confiar en la vista previa', html: 'Los fabricantes suelen describir el filamento arcoíris como de transición rápida, media o larga, pero el dato útil es la distancia medida desde un color que regresa al mismo color. Desenrolla una pequeña muestra solo si es seguro para el carrete, o imprime una torre de purgado fina y retrocalcula la longitud de filamento consumido a partir de las estimaciones del slicer.' },

    { type: 'title', text: 'Por qué el peso de la pieza predice los cambios de color mejor que el tiempo de impresión', level: 2 },
    { type: 'paragraph', html: 'El tiempo de impresión es un mal predictor del uso de color en un carrete arcoíris. Un jarrón decorativo puede tardar muchas horas en modo espiral mientras consume poco material, y un soporte mecánico denso puede consumir una gran cantidad de filamento rápidamente. El carrete cambia de color según la <strong>longitud del filamento que pasa por el extrusor</strong>, no según los minutos transcurridos, la distancia de desplazamiento o el número de capas.' },
    { type: 'paragraph', html: 'El peso del slicer es útil porque ya incluye paredes, relleno, capas superiores e inferiores, soportes (si están activados), faldas, brims y estructuras de purgado. Ese peso se puede convertir en volumen dividiendo por la densidad del material. Luego, el volumen se puede dividir por el área de la sección transversal del filamento para estimar la longitud total del filamento. Por eso el mismo STL puede mostrar un comportamiento de degradado diferente al cambiar el relleno, el número de paredes, la configuración de soportes o la escala.' },
    { type: 'table', headers: ['Cambio en el slicer', 'Efecto en el uso del filamento', 'Efecto en el degradado arcoíris'], rows: [
      ['Más relleno', 'Aumenta los gramos y metros totales', 'Más progreso del ciclo de color dentro de la misma altura Z'],
      ['Más paredes', 'Aumenta el uso en la mayoría de las capas', 'Las transiciones se comprimen verticalmente y son más frecuentes'],
      ['Modelo más alto con la misma masa', 'Metros similares en más altura Z', 'Las transiciones se separan más'],
      ['Soportes activados', 'Consume colores fuera de la pieza visible', 'La fase visible puede desplazarse respecto al modelo sin soportes'],
      ['Brim o balsa grandes', 'Consume filamento antes de la primera capa visible', 'El color inicial se adelanta en el carrete'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Usa la estimación del slicer después de los ajustes finales', badge: 'Importante', html: 'Haz el cálculo después de elegir la altura de capa, el número de paredes, el relleno, los soportes, el brim y la escala. Una estimación del ciclo de color del carrete arcoíiris hecha antes de generar los soportes puede ser visiblemente incorrecta porque el material de soporte consume parte de la secuencia de colores antes y durante el objeto.' },

    { type: 'title', text: 'Entendiendo la longitud del ciclo de color en los carretes de filamento arcoíris', level: 2 },
    { type: 'paragraph', html: 'La longitud del ciclo de color es la distancia de filamento necesaria para que la secuencia se repita. En un carrete arcoíris de seis colores, un ciclo podría recorrer rojo, naranja, amarillo, verde, azul, violeta y luego volver al rojo. El ciclo puede ser lo suficientemente corto para varias transiciones en una figurita pequeña, o lo suficientemente largo para que una impresión mediana muestre solo un cambio lento. Una <strong>calculadora de ciclo de color para carrete arcoíris</strong> es más útil cuando este número es realista.' },
    { type: 'paragraph', html: 'No todos los filamentos de transición tienen zonas de color iguales. Algunos productos se mezclan gradualmente con degradados largos, mientras que otros tienen bloques más definidos. La calculadora trata el ciclo completo como bandas de color distribuidas uniformemente porque esa es la estimación más práctica a partir de los datos del slicer solamente. Si tu carrete tiene secciones desiguales, usa el mapa Z como guía de fase y espera que la mezcla visual real sea más suave o asimétrica.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Arcoíris de ciclo corto', description: 'Ideal para miniaturas, adornos, jarrones pequeños y placas con nombre. Múltiples cambios de color con menos material.', icon: 'mdi:weather-sunset-up', points: ['Transiciones visibles rápidas', 'Puede verse recargado en superficies planas grandes'] },
      { title: 'Arcoíris de ciclo medio', description: 'Una opción equilibrada para objetos de escritorio y esculturas medianas. Suele producir de una a tres transiciones principales.', icon: 'mdi:palette-swatch', highlight: true, points: ['Predecible en impresiones comunes', 'Buena para objetos de 100-300 g'] },
      { title: 'Arcoíris de ciclo largo', description: 'Mejor para jarrones altos, dragones grandes, lámparas e impresiones de pared simple que necesitan degradados lentos y fluidos.', icon: 'mdi:palette-outline', points: ['Transición de color suave', 'Los modelos pequeños pueden quedar de un solo color'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Ciclo de color', definition: 'La longitud de filamento necesaria para que la secuencia completa de colores se repita desde un color inicial hasta el mismo color.' },
      { term: 'Fase', definition: 'La posición actual dentro del ciclo de color en el momento en que la parte visible comienza a imprimirse.' },
      { term: 'Banda de transición', definition: 'Una región vertical del objeto impreso donde el segmento de color estimado cambia a lo largo del eje Z.' },
      { term: 'Desplazamiento inicial', definition: 'Longitud de filamento ya consumida antes de que comience el modelo, incluyendo impresiones anteriores, purgado, falda, brim o recorte manual.' },
    ] },

    { type: 'title', text: 'Cómo estimar la posición de la transición de color a lo largo del eje Z', level: 2 },
    { type: 'paragraph', html: 'El mapa Z es un estimador, no un simulador del slicer. Asume que el consumo de material se distribuye proporcionalmente a lo largo de la altura impresa. Eso es un buen modelo de primer orden para muchas impresiones en modo jarrón, esculturas con secciones transversales uniformes y objetos decorativos. Se vuelve menos exacto cuando el modelo tiene una base pesada, un centro hueco, una parte superior densa o grandes soportes que consumen material de manera desigual a lo largo de la altura.' },
    { type: 'paragraph', html: 'Para un modelo con una sección transversal mayormente uniforme, dividir la altura impresa por los ciclos de color da una respuesta intuitiva: si un objeto de 160 mm usa dos ciclos de color completos, cada ciclo ocupa aproximadamente 80 mm de altura Z. Si usa solo 0,4 ciclos, la impresión mostrará menos de la mitad de la secuencia arcoíris. Si usa 4 ciclos, los colores se repiten con frecuencia y pueden crear un aspecto rayado en lugar de un degradado uniforme.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Usa la altura Z impresa, no la altura total de recorrido de la máquina.',
      'Incluye el consumo de brim o balsa como desplazamiento inicial si esas características se imprimen antes del objeto.',
      'Para placas con múltiples objetos, calcula el peso combinado seccionado si los objetos se imprimen secuencialmente por capa.',
      'Para impresión secuencial, calcula cada objeto por separado y avanza el desplazamiento inicial para el siguiente objeto.',
      'Para una torre de purgado o estructura de residuos multicolor, añade su masa estimada al desplazamiento o al uso total según cuándo se imprima.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Por qué la base puede no coincidir con el primer color previsto', html: 'Muchas impresoras purgan, dibujan una línea de cebado, imprimen una falda o un brim antes de la primera pared visible. Estas características consumen filamento y desplazan la fase inicial. Si la primera capa visible debe ser de un color específico, mide o estima ese consumo previo a la impresión e introdúcelo como desplazamiento inicial.' },

    { type: 'title', text: 'Densidad, diámetro y por qué dos impresiones de 180 g pueden usar longitudes de filamento diferentes', level: 2 },
    { type: 'paragraph', html: 'La misma masa puede representar diferentes longitudes de filamento porque la densidad cambia el volumen por gramo. El PLA se estima a menudo alrededor de 1,24 g/cm3, el PETG alrededor de 1,27 g/cm3, y algunas mezclas de seda o rellenas pueden diferir lo suficiente como para desplazar las transiciones varios milímetros en impresiones altas. El diámetro importa por la misma razón: un filamento más grueso tiene más área transversal, por lo que cada metro contiene más material.' },
    { type: 'paragraph', html: 'No todos los filamentos de transición tienen zonas de color iguales. La calculadora trata el ciclo completo como bandas de color distribuidas uniformemente. Si tu carrete tiene secciones desiguales, usa el mapa Z como guía.' },
    { type: 'table', headers: ['Familia de material', 'Densidad de planificación', 'Nota de planificación del degradado'], rows: [
      ['PLA arcoíris', '1,24 g/cm3', 'Buena opción predeterminada para la mayoría de carretes arcoíris estándar'],
      ['PLA de seda', '1,18-1,24 g/cm3', 'Los pigmentos y aditivos varían; consulta los datos de la marca cuando estén disponibles'],
      ['PETG multicolor', '1,25-1,29 g/cm3', 'Ligeramente más denso, por lo que los mismos gramos pueden usar menos longitud'],
      ['PLA relleno', 'Varía ampliamente', 'Los aditivos de madera, metal, piedra o brillo pueden alterar la estimación'],
    ] },
    { type: 'proscons', title: 'Usar el peso del slicer como entrada principal', items: [
      { pro: 'Incluye ajustes de impresión reales como paredes, relleno, soportes y escala.', con: 'Depende de que el perfil de densidad del slicer sea razonablemente preciso.' },
      { pro: 'Es más rápido que sumar manualmente los movimientos de extrusión del G-code.', con: 'No revela la distribución desigual del material en cada capa.' },
      { pro: 'Funciona con diferentes modelos y slicers con una entrada de datos mínima.', con: 'Las líneas de cebado, el purgado y los inicios fallidos deben contabilizarse por separado.' },
    ] },

    { type: 'title', text: 'Cómo usar la calculadora para una impresión real con filamento arcoíris', level: 2 },
    { type: 'paragraph', html: 'Comienza seccionando el modelo con los ajustes finales. Copia el peso estimado del filamento del slicer, luego introduce la densidad del material y el diámetro del filamento. Introduce la longitud del ciclo de color medida o anunciada. Finalmente, introduce la altura Z impresa del modelo. La calculadora devuelve el filamento usado, el número de ciclos en la pieza, los gramos por ciclo de color completo y la distancia Z estimada por ciclo.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'Si los ciclos en la pieza son inferiores a 0,25, espera un cambio de color sutil en lugar de un objeto arcoíris.',
      'Si los ciclos en la pieza rondan 1,0, el modelo puede mostrar un barrido completo a través de la paleta del carrete.',
      'Si los ciclos en la pieza están entre 2,0 y 4,0, el objeto mostrará bandas de color repetidas.',
      'Si Z por ciclo es mayor que la altura del modelo, aumenta la escala, añade masa o elige un carrete de transición más rápida.',
      'Si Z por ciclo es muy pequeño, reduce el relleno o elige un carrete de transición más larga para degradados más suaves.',
    ] },
    { type: 'summary', title: 'Regla rápida de planificación', items: [
      'Más gramos en la misma altura comprimen el arcoíris verticalmente.',
      'Más altura con los mismos gramos estira el degradado.',
      'Una longitud de ciclo de color más corta crea más transiciones.',
      'El desplazamiento inicial controla qué parte del arcoíris aparece primero.',
    ] },
    { type: 'message', title: 'Para piezas de exhibición', ariaLabel: 'Consejo de planificación para piezas de exhibición', html: 'Cuando el límite de color debe caer en una característica específica, imprime una pequeña columna de prueba vertical con el mismo perfil del slicer. Compara las alturas de las bandas medidas con la estimación, luego ajusta la longitud del ciclo o el desplazamiento inicial antes de comprometerte con la impresión completa.' },

    { type: 'title', text: 'Preguntas frecuentes sobre la planificación de color en carretes arcoíris', level: 2 },
    { type: 'paragraph', html: '<strong>¿Cuánto filamento arcoíris necesito para un ciclo de color completo?</strong> Multiplica la longitud del ciclo por los gramos por metro para tu diámetro y densidad de filamento. Para PLA estándar de 1,75 mm, un metro equivale aproximadamente a 3 g, por lo que un ciclo de 30 m equivale a unos 90 g. La calculadora realiza esta conversión directamente porque la densidad y el diámetro reales cambian la respuesta.' },
    { type: 'paragraph', html: '<strong>¿Por qué mi impresión se quedó principalmente de un solo color?</strong> La pieza probablemente usó menos de una fracción significativa del ciclo del carrete. Los modelos pequeños, el bajo relleno y el filamento arcoíris de transición muy larga pueden permanecer dentro de uno o dos colores vecinos. Escalar el modelo, imprimir varios objetos a la vez, aumentar las paredes o elegir un carrete de ciclo más rápido puede hacer que las transiciones sean más visibles.' },
    { type: 'paragraph', html: '<strong>¿Puedo forzar un color específico en la parte superior del modelo?</strong> Puedes estimarlo con el desplazamiento inicial, pero la colocación exacta requiere conocer la fase actual del carrete. Si la parte superior debe ser azul, por ejemplo, es posible que debas avanzar el filamento imprimiendo un objeto de purgado, comenzando desde un color visible conocido o eligiendo una escala de modelo diferente.' },
    { type: 'diagnostic', variant: 'warning', title: 'Los cambios grandes de geometría reducen la precisión del mapa Z', badge: 'Forma del modelo', html: 'Un pedestal pesado y una estatua superior delgada pueden consumir la mayor parte del material cerca de la base, por lo que las transiciones reales se agruparán más abajo de lo que sugiere una estimación Z proporcional. Para esos modelos, usa la calculadora para el recuento total de ciclos y luego inspecciona la vista previa de capas del slicer para entender dónde se concentra el volumen de extrusión.' },
  ],
  faq: [
    {
      question: '¿Qué es la longitud de transición del filamento arcoíris?',
      answer: 'Es la cantidad de filamento, generalmente medida en metros o pies, que necesita el carrete para recorrer una secuencia completa de colores y volver al color inicial.',
    },
    {
      question: '¿Por qué la calculadora pide el peso de la pieza en lugar del tiempo de impresión?',
      answer: 'Los cambios de color dependen de la longitud del filamento consumido por el extrusor. El peso del slicer se puede convertir en volumen y luego en longitud de filamento, mientras que el tiempo de impresión no describe directamente el uso del material.',
    },
    {
      question: '¿Qué tan preciso es el mapa de transición Z?',
      answer: 'Es una estimación de planificación. Es más preciso para modelos con una distribución de material bastante uniforme en altura, y menos preciso para formas con bases densas, secciones huecas, soportes o grandes estructuras de purgado.',
    },
    {
      question: '¿Puedo usar esto para filamento arcoíris de seda PLA o PETG?',
      answer: 'Sí. Elige un ajuste preestablecido de material o introduce la densidad de la ficha técnica del carrete. La densidad cambia la longitud estimada del filamento y, por lo tanto, el número de ciclos de color previsto.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Secciona el modelo', text: 'Usa los ajustes finales del slicer y copia el peso estimado de la pieza.' },
    { name: 'Introduce los datos del carrete', text: 'Establece la longitud del ciclo de color, la densidad, el diámetro del filamento y cualquier desplazamiento inicial.' },
    { name: 'Lee el mapa Z', text: 'Usa los ciclos, Z por ciclo y las bandas visibles para decidir si el degradado será sutil, completo o repetido.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Longitud de Transición de Filamento Arcoíris',
      description: 'Estima el uso del ciclo de color del filamento arcoíris y las posiciones de transición a lo largo del eje Z de una impresión 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es la longitud de transición del filamento arcoíris?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es la cantidad de filamento que necesita el carrete para recorrer una secuencia completa de colores y volver al color inicial.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Calculadora de Longitud de Transición de Filamento Arcoíris para Impresión 3D',
      description: 'Estima los ciclos de color del filamento arcoíris, el uso del carrete y dónde aparecerán las transiciones de degradado a lo largo de la altura Z de una impresión 3D seccionada.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Secciona el modelo', text: 'Usa los ajustes finales del slicer y copia el peso estimado de la pieza.' },
        { '@type': 'HowToStep', position: 2, name: 'Introduce los datos del carrete', text: 'Establece la longitud del ciclo de color, la densidad, el diámetro del filamento y cualquier desplazamiento inicial.' },
        { '@type': 'HowToStep', position: 3, name: 'Lee el mapa Z', text: 'Usa los ciclos, Z por ciclo y las bandas visibles para decidir si el degradado será sutil, completo o repetido.' }
      ],
    },
  ],
};
