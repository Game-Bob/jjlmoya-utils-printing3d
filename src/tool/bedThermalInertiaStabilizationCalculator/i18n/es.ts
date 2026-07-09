import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'calculador-estabilizacion-inercia-termica-cama-impresion',
  title: 'Calculador de Estabilización por Inercia Térmica de la Cama',
  description: 'Estime cuánto tiempo debe reposar una cama caliente de impresión 3D tras alcanzar el punto de consigna, usando el material de la placa, grosor, temperatura objetivo, potencia del calentador y tamaño de la cama.',
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    materialLabel: 'Material de la placa',
    borosilicateGlassLabel: 'Vidrio borosilicato',
    peiSpringSteelLabel: 'Acero con PEI',
    aluminumLabel: 'Placa de aluminio',
    thicknessLabel: 'Grosor de placa',
    targetTemperatureLabel: 'Temperatura objetivo',
    heaterPowerLabel: 'Potencia del calentador',
    bedSizeLabel: 'Área calefactada',
    presetsLabel: 'Preajustes',
    enderPresetLabel: 'Vidrio 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Aluminio 350',
    recommendedDelayLabel: 'Demora antes de imprimir',
    delayMarkerLabel: 'Demora',
    warmupTimeLabel: 'Calentamiento ideal',
    plateMassLabel: 'Masa de la placa',
    energyStoredLabel: 'Calor almacenado',
    conductionLagLabel: 'Retardo por conducción',
    conductivityLabel: 'Conductividad',
    readinessLabel: 'Estado',
    readinessQuick: 'remojo rápido',
    readinessBalanced: 'remojo normal',
    readinessSlow: 'remojo largo',
    controlsAriaLabel: 'Parámetros de inercia térmica de la cama caliente',
    resultsAriaLabel: 'Resultados de estabilización de la cama caliente',
    copyButton: 'Copiar demora',
    copiedButton: 'Copiado',
    copiedSummaryTemplate: 'Estimación de estabilización: esperar {delay} s ({minutes} min) tras consigna; calentamiento ideal unos {warmup} min, estado {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 's',
    minutesUnit: 'min',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Por qué una cama caliente necesita estabilización tras alcanzar el punto de consigna', level: 2 },
    {
      type: 'paragraph',
      html: 'La pantalla de una impresora suele mostrar la temperatura cerca del termistor, no la temperatura exacta de la superficie superior de impresión. En muchas máquinas el termistor está pegado bajo el calentador, incrustado en el soporte de la cama o colocado lejos del área donde comienza la primera capa. El controlador puede marcar <strong>60 °C</strong> mientras la parte superior de una placa gruesa de vidrio todavía se está calentando. Ese retardo es la inercia térmica: la placa almacena calor, lo desplaza a través de su grosor y pierde calor hacia el aire al mismo tiempo.',
    },
    {
      type: 'paragraph',
      html: 'La primera capa es especialmente sensible a este retardo porque la adhesión depende de la viscosidad del polímero, la energía superficial y la presión de contacto. Una cama que todavía se está calentando en la superficie puede provocar que las esquinas se levanten, que las líneas del skirt se vean secas o que el desplazamiento Z parezca inconsistente incluso cuando la malla y la altura de la boquilla son correctas. Esperar un intervalo de remojo calculado después de que la cama alcance el punto de consigna suele ser más repetible que aumentar el punto de consigna al azar.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK conductividad típica del vidrio borosilicato' },
        { value: '16', label: 'W/mK conductividad aproximada del acero para muelles' },
        { value: '205', label: 'W/mK conductividad aproximada del aluminio' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La demora es una estimación superficial, no un sustituto del autosintonizado PID',
      html: 'El control PID regula cómo el calentador sigue al termistor. La estabilización térmica estima cuánto tiempo necesita la superficie de impresión para acercarse al punto de consigna controlado por el termistor. Un bucle PID bien ajustado puede necesitar igualmente una demora de remojo cuando la placa es gruesa, poco conductora o está mal acoplada al calentador.',
    },
    { type: 'title', text: 'La elección del material domina la inercia térmica de la cama', level: 2 },
    {
      type: 'paragraph',
      html: 'La calculadora trata el material como una entrada estricta porque el vidrio, el acero PEI y el aluminio no son sistemas térmicos intercambiables. El vidrio borosilicato tiene baja conductividad térmica y una capacidad calorífica considerable, por lo que la superficie puede retrasarse respecto al lado del calentador durante un periodo notable. El acero para muelles es más delgado y conduce mejor que el vidrio, así que suele igualarse más rápido aunque el acero sea denso. El aluminio conduce el calor extremadamente bien, por lo que las camas de aluminio fundido o mecanizado son las preferidas en impresoras grandes, pero una placa gruesa de aluminio puede almacenar mucha energía.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vidrio borosilicato',
          description: 'La baja conductividad y la capacidad calorífica moderada crean el mayor retardo superficial, especialmente con grosores de 3 a 5 mm.',
          points: ['Buena planaridad cuando está bien apoyado', 'Respuesta lenta en la superficie', 'Sensible a las pinzas y al contacto local del calentador'],
        },
        {
          title: 'Acero con PEI',
          description: 'Las láminas delgadas de acero responden más rápido y suelen necesitar menos reposo, pero las bases magnéticas y las capas adhesivas añaden resistencia de contacto.',
          highlight: true,
          points: ['Remojo práctico rápido', 'Cambios de superficie sencillos', 'El conjunto imán-adhesivo sigue siendo relevante'],
        },
        {
          title: 'Placa de aluminio',
          description: 'La alta conductividad distribuye el calor rápidamente por la cama; el grosor y la potencia del calentador se convierten en los principales factores de demora.',
          points: ['Excelente distribución lateral del calor', 'Alta energía almacenada en camas grandes', 'Óptimo cuando la cobertura del calentador es uniforme'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Superficie de impresión', 'Comportamiento térmico', 'Problema típico de estabilización', 'Respuesta práctica en primera capa'],
      rows: [
        ['Vidrio borosilicato de 4 mm', 'Conducción lenta a través del grosor', 'La superficie retrasada respecto al termistor', 'Esperar más antes de sondear o imprimir'],
        ['Acero PEI de 0,4-0,6 mm', 'Lámina conductora delgada', 'La interfaz imán/adhesivo controla el retardo', 'Suele bastar con un remojo corto'],
        ['Aluminio de 5-8 mm', 'Conducción rápida pero mucho calor almacenado', 'Gran masa que tarda en equilibrarse', 'Usar un remojo constante en camas grandes'],
        ['Conjuntos compuestos', 'Las interfases dominan', 'Los espacios de aire y adhesivos añaden resistencia', 'Medir la temperatura superficial real cuando sea posible'],
      ],
    },
    {
      type: 'tip',
      title: 'No reutilice la demora del vidrio para el acero PEI',
      html: 'Una demora correcta para una placa de borosilicato de 4 mm puede ser excesiva para una lámina de acero PEI de 0,5 mm. A la inversa, una demora para acero PEI puede ser demasiado corta para el vidrio y hacer que la primera capa parezca un problema de desplazamiento Z.',
    },
    { type: 'title', text: 'Cómo el grosor cambia el calentamiento y el retardo superficial', level: 2 },
    {
      type: 'paragraph',
      html: 'El grosor afecta a dos partes diferentes del proceso. Primero, una placa más gruesa tiene más masa, por lo que requiere más energía para elevar su temperatura media. Segundo, el calor debe difundirse a través de un camino más largo antes de que la superficie siga al lado del calentador. La calculadora estima tanto la energía de calentamiento ideal como el retardo de difusión a través de la placa, y luego los combina en una demora recomendada después de que la impresora indique que la cama ha alcanzado el punto de consigna.',
    },
    {
      type: 'paragraph',
      html: 'La relación no es lineal para el retardo superficial. El tiempo de difusión aumenta con el cuadrado del grosor, por lo que un pequeño cambio de 3 mm a 4 mm en vidrio puede importar más de lo esperado. Una lámina de acero muy delgada puede igualarse rápidamente, pero la base magnética, la película adhesiva, el recubrimiento PEI y el aire atrapado pueden seguir ralentizando la transferencia real. En camas de aluminio, la placa distribuye el calor rápidamente, pero la cama puede permanecer globalmente inestable si la cobertura del calentador es irregular o la placa es grande.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Inercia térmica', definition: 'Tendencia de una placa a resistir cambios de temperatura porque tiene masa y capacidad calorífica.' },
        { term: 'Difusividad térmica', definition: 'Propiedad del material que combina conductividad, densidad y capacidad calorífica para describir la rapidez con que los cambios de temperatura se desplazan a través de él.' },
        { term: 'Remojo térmico', definition: 'Espera deliberada tras alcanzar el punto de consigna para que la superficie, el calentador, el soporte y el conjunto de la cama se aproximen a un estado más estable.' },
        { term: 'Resistencia de contacto', definition: 'Resistencia térmica adicional causada por contacto imperfecto, capas adhesivas, imanes, pinzas, espacios de aire o superficies deformadas.' },
        { term: 'Sobrepico de consigna', definition: 'Evento de control en que la temperatura del termistor supera el objetivo antes de estabilizarse, a menudo no relacionado con la temperatura superficial.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Reglas empíricas sobre el grosor',
      items: [
        'Las láminas delgadas de acero PEI suelen estabilizarse rápido una vez que el calentador y la base magnética están calientes.',
        'Las placas de vidrio de más de 3 mm merecen una demora real antes de comenzar la primera capa.',
        'Las placas grandes de aluminio pueden necesitar remojo por su masa total, incluso con excelente conducción.',
        'Los espacios de aire bajo superficies extraíbles pueden dominar el cálculo; limpie las caras de contacto y asiente la placa de forma consistente.',
      ],
    },
    { type: 'title', text: 'Potencia del calentador, tamaño de cama y calor almacenado', level: 2 },
    {
      type: 'paragraph',
      html: 'La potencia del calentador determina la rapidez con que la energía puede entrar en el conjunto de la cama. Un calentador de 220 W bajo una cama de vidrio de 235 mm tiene una densidad de potencia muy distinta a la de un calentador de silicona de 600 W bajo una placa de aluminio de 300 mm. La calculadora usa la potencia, la temperatura objetivo, el área de la cama y la masa de la placa para estimar el tiempo de calentamiento ideal. Luego aplica un componente de estabilización porque la superficie suele seguir cambiando después de que el sistema controlado por termistor alcanza el objetivo por primera vez.',
    },
    {
      type: 'paragraph',
      html: 'La potencia no es una cura para una mala distribución del calor. Un calentador potente puede elevar rápidamente el termistor mientras los bordes, las pinzas o las zonas sin soporte se quedan atrás. Las impresoras grandes deben considerar la cobertura del calentador, el aislamiento, el montaje de la cama, la temperatura de la cámara y si el sondaje comienza inmediatamente después del evento de consigna. Para ABS, ASA, nailon y otros materiales que requieren más temperatura, una cama y una cámara estables suelen ser más importantes que alcanzar simplemente un valor numérico alto de temperatura de cama.',
    },
    {
      type: 'table',
      headers: ['Síntoma', 'Causa térmica probable', 'Ajuste recomendado'],
      rows: [
        ['Primeras líneas del skirt opacas o que apenas adhieren', 'La superficie aún está más fría que el termistor', 'Aumentar la demora de estabilización antes de la primera capa'],
        ['El centro adhiere pero las esquinas se levantan', 'Temperatura superficial desigual o pérdidas en bordes', 'Añadir aislamiento, verificar cobertura del calentador, esperar más'],
        ['La malla de sondaje cambia entre pasadas en frío y en caliente', 'El conjunto de la cama aún se expande o relaja', 'Remojar antes de sondear, no solo antes de imprimir'],
        ['El gráfico PID parece estable pero la adhesión varía', 'El controlador es estable en el sensor, no en la superficie', 'Usar una demora superficial y verificar con termómetro de contacto'],
      ],
    },
    {
      type: 'card',
      title: 'Por qué la salida es una demora tras el punto de consigna',
      html: 'La impresora ya se encarga de subir hasta la temperatura objetivo. Esta calculadora responde a una pregunta más concreta sobre la primera capa: una vez que la pantalla dice que la cama está lista, ¿cuántos segundos adicionales debe reposar la superficie antes de empezar a extruir?',
    },
    { type: 'title', text: 'Autosintonizado PID vs. estabilización real de la superficie de la cama', level: 2 },
    {
      type: 'paragraph',
      html: 'El autosintonizado PID de la cama es valioso porque reduce la oscilación en el sensor medido. No puede eliminar la física de una placa gruesa o de baja conductividad. Una superficie de vidrio puede seguir retrasada mientras el sensor inferior ya se ve estable. Una lámina de acero para muelles puede verse estable rápidamente, pero una base magnética fría puede seguir extrayendo calor de ella. El flujo de trabajo más repetible es ajustar el controlador, usar una demora de cama sensata y comenzar la calibración de la primera capa solo después de que el conjunto de la cama sea térmicamente repetible.',
    },
    {
      type: 'proscons',
      title: 'Comenzar de inmediato vs. esperar la estabilización',
      items: [
        { pro: 'Comenzar de inmediato reduce el tiempo total de impresión.', con: 'La primera capa puede imprimirse sobre una superficie por debajo de la temperatura prevista.' },
        { pro: 'Una demora calculada mejora la repetibilidad entre impresiones.', con: 'Añade tiempo de inactividad, especialmente en vidrio y camas grandes de aluminio.' },
        { pro: 'Remojar antes de sondear puede reducir la deriva de la malla.', con: 'Remojos muy largos pueden desperdiciar energía si el material elegido no los necesita.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'No enmascare el retardo térmico con un aplastamiento excesivo',
      html: 'Si la primera capa solo adhiere con un desplazamiento Z agresivamente bajo, la superficie de la cama puede estar más fría de lo esperado. El aplastamiento excesivo puede ocultar el problema térmico mientras causa pata de elefante, rozadura de boquilla y textura superficial rugosa.',
    },
    {
      type: 'message',
      title: 'Mejor secuencia de calibración',
      html: 'Caliente la cama, espere la demora calculada, ejecute el sondaje de malla (si su impresora sondea en caliente), luego ajuste la altura de la primera capa. Calibrar el desplazamiento Z sobre un conjunto de cama inestable hará que la siguiente impresión se sienta inconsistente aunque no haya cambiado ningún ajuste mecánico.',
    },
    { type: 'title', text: 'Cómo usar el tiempo de estabilización en el G-code de inicio', level: 2 },
    {
      type: 'paragraph',
      html: 'La demora recomendada puede usarse manualmente o insertarse en el G-code de inicio. Un flujo sencillo consiste en calentar la cama con <code>M190</code>, esperar el número calculado de segundos con un comando de pausa, y luego continuar con sondaje, calentamiento de boquilla, purgado e impresión. Algunos usuarios prefieren calentar primero la cama, comenzar el calentamiento de la cámara o el precalentamiento de la boquilla durante el remojo, y sondear solo después de que la cama haya dejado de derivar.',
    },
    {
      type: 'list',
      items: [
        'Use la misma demora al comparar filamentos para que las pruebas de adhesión sean justas.',
        'Aplique demoras más largas para vidrio, temperaturas altas de cama, placas grandes o habitaciones frías.',
        'Aplique demoras más cortas para láminas delgadas de acero cuando la base magnética ya esté caliente.',
        'Sondee después del remojo si su malla cambia con la temperatura.',
        'Recalcule tras cambiar el material de la placa, grosor, potencia del calentador o tamaño de cama.',
      ],
    },
    {
      type: 'tip',
      title: 'Use la primera impresión del día como caso de referencia',
      html: 'Una segunda impresión iniciada inmediatamente después de un trabajo terminado comienza con un conjunto de cama caliente y puede necesitar menos espera. Para la calibración, evalúe la demora desde una impresora fría, porque esa es la condición que con más probabilidad revelará el retardo térmico.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Una buena demora hace que el ajuste de la primera capa sea aburrido',
      html: 'Cuando el remojo es adecuado, la forma del skirt, el brillo de las líneas, la adhesión de las esquinas y la compensación de malla se vuelven más repetibles de una impresión a otra. No debería tener que perseguir el desplazamiento Z cada vez que la máquina arranca en frío.',
    },
    { type: 'title', text: 'Medición y mejora de la estabilización real de la cama', level: 2 },
    {
      type: 'paragraph',
      html: 'La calculadora es intencionadamente práctica, pero la mejor validación es una medición superficial. Un termopar de contacto pegado a la superficie de impresión, una sonda delgada bajo una lámina de sacrificio o un termómetro infrarrojo calibrado con emisividad conocida pueden revelar cuánto tarda la superficie en estabilizarse. Las lecturas infrarrojas sobre vidrio, PEI y metal brillante pueden ser engañosas, por lo que debe usar puntos de medición consistentes y evitar comparar diferentes acabados superficiales como si tuvieran la misma emisividad.',
    },
    {
      type: 'paragraph',
      html: 'El rendimiento térmico a menudo puede mejorarse sin cambiar el firmware. Aislar la parte inferior reduce la pérdida de calor y acorta el calentamiento. Limpiar la lámina magnética y la placa flexible mejora el contacto. Reemplazar pinzas débiles, aplanar placas deformadas y evitar el contacto parcial del calentador reducen los campos de temperatura desiguales. Las impresoras cerradas se benefician de una cámara más cálida, pero el calor de la cámara también cambia correas, componentes del pórtico y el comportamiento del sondaje, por lo que las rutinas térmicas deben ser repetibles, no improvisadas.',
    },
    {
      type: 'table',
      headers: ['Mejora o hábito', 'Efecto en la estabilización', 'Precaución'],
      rows: [
        ['Aislamiento inferior', 'Menos pérdida de calor y equilibrio más rápido', 'Mantener cableado y adhesivos clasificados para la temperatura de cama'],
        ['Mejor cobertura del calentador', 'Temperatura superficial más uniforme', 'Evitar burbujas y mala adhesión del calentador de silicona'],
        ['Asiento consistente de la placa extraíble', 'Menor variación de resistencia de contacto', 'El polvo o las migas de filamento pueden crear puntos fríos locales'],
        ['Sondaje de malla en caliente tras remojo', 'La malla refleja la forma expandida de la cama', 'El soporte del sensor y el cabezal también deben ser térmicamente estables'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificación práctica de estabilización',
      items: [
        'Seleccione el material real de la placa; vidrio, acero y aluminio requieren demoras diferentes.',
        'Introduzca el grosor y la potencia del calentador en lugar de confiar en nombres de modelo de impresora.',
        'Use la demora calculada después de que la cama informe el punto de consigna, especialmente antes de la calibración de la primera capa.',
        'Mida la superficie si los problemas de adhesión persisten a pesar de un gráfico PID estable.',
        'Vuelva a verificar la demora tras cambiar placas, imanes, aislamiento, calentadores o tamaño de cama.',
      ],
    },
  ],
  faq: [
    {
      question: '¿Por qué esperar después de que la cama alcanza la temperatura objetivo?',
      answer: 'El termistor puede alcanzar el punto de consigna antes de que la superficie superior de impresión se haya calentado por completo. La espera permite que la placa, el recubrimiento, la base magnética y el conjunto del calentador se aproximen a una temperatura más estable.',
    },
    {
      question: '¿El vidrio necesita más tiempo de estabilización que el acero PEI?',
      answer: 'Por lo general sí. El vidrio borosilicato tiene una conductividad térmica mucho menor y suele ser más grueso, por lo que la superficie se retrasa más que la de una lámina delgada de acero PEI.',
    },
    {
      question: '¿Es esto lo mismo que el autosintonizado PID?',
      answer: 'No. El autosintonizado PID controla el comportamiento del calentador en el sensor. Esta calculadora estima cuánto tiempo debe reposar la superficie real de impresión después de que la cama controlada por sensor alcanza el punto de consigna.',
    },
    {
      question: '¿Debo sondear antes o después del remojo térmico?',
      answer: 'Si su malla cambia cuando la cama se calienta, sondee después de que la cama se haya estabilizado. Así la malla se aproxima más a la forma que se usa durante la primera capa.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Elegir el material de la placa', text: 'Seleccione vidrio borosilicato, acero PEI o aluminio para que el cálculo use la conductividad y capacidad calorífica correctas.' },
    { name: 'Ingresar el conjunto físico de la cama', text: 'Añada el grosor de la placa, el área calefactada, la temperatura objetivo y la potencia del calentador.' },
    { name: 'Leer la demora recomendada', text: 'Use la demora antes de imprimir después de que la impresora indique que la cama ha alcanzado el punto de consigna.' },
    { name: 'Aplicarla de forma consistente', text: 'Use la misma demora de remojo antes de sondear o calibrar la primera capa para obtener resultados repetibles.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculador de Estabilización por Inercia Térmica de la Cama',
      description: 'Estime el retardo de estabilización de la superficie de una cama caliente de impresión 3D a partir del material de la placa, grosor, temperatura, potencia del calentador y tamaño de la cama.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Por qué esperar después de que la cama alcanza la temperatura objetivo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El termistor puede alcanzar el punto de consigna antes de que la superficie superior de impresión se haya calentado por completo, por lo que una demora de remojo mejora la repetibilidad de la primera capa.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo estimar la demora de estabilización de la cama de una impresora 3D',
      step: [
        { '@type': 'HowToStep', text: 'Seleccione el material de la placa.' },
        { '@type': 'HowToStep', text: 'Introduzca el grosor, la temperatura objetivo, la potencia del calentador y el tamaño de la cama.' },
        { '@type': 'HowToStep', text: 'Espere la demora recomendada después de que la cama alcance el punto de consigna.' },
        { '@type': 'HowToStep', text: 'Sondee o imprima después de que el conjunto de la cama se haya estabilizado.' },
      ],
    },
  ],
};
