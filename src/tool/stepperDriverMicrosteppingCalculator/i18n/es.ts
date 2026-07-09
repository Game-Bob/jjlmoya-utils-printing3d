import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'calculadora-microstepping-driver-motor-paso-impresion-3d',
  title: 'Calculadora de Pasos por mm y Microstepping para Motores Paso a Paso',
  description: 'Calcula los pasos exactos por mm (o pasos por pulgada) y la resolución mecánica teórica para motores paso a paso de impresoras 3D. Compatible con TMC2209, TMC2208, correas y husillos.',
  ui: {
    title: 'Calculadora de Microstepping para Driver Paso a Paso',
    presetsLabel: 'PREAJUSTES',
    presetBelt16: 'Correa GT2 y polea de T16 (X/Y)',
    presetBelt20: 'Correa GT2 y polea de T20 (X/Y)',
    presetZLead8: 'Husillo T8 Avance 8mm (Z)',
    presetZLead2: 'Husillo T8 Avance 2mm (Z)',
    unitSystemLabel: 'Sistema de Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    configLabel: 'CONFIGURACIÓN DEL MOTOR Y DRIVER',
    motorStepAngleLabel: 'Ángulo de Paso del Motor',
    driverMicrosteppingLabel: 'Microstepping del Driver',
    transmissionModeLabel: 'Tipo de Transmisión',
    transmissionBelt: 'Transmisión por Correa',
    transmissionLeadScrew: 'Husillo / Varilla Roscada',
    beltPitchLabel: 'Paso de la Correa',
    pulleyTeethLabel: 'Dientes de la Polea',
    leadScrewPitchLabel: 'Avance del Husillo (Distancia por Rev)',
    resultsLabel: 'RESULTADOS CALCULADOS',
    stepsPerUnitLabel: 'Configuración del Firmware (Pasos)',
    mechanicalResolutionLabel: 'Resolución Teórica',
    stepsPerUnitUnitMetric: 'pasos/mm',
    stepsPerUnitUnitImperial: 'pasos/pulgada',
    mechanicalResolutionUnitMetric: 'micras/paso',
    mechanicalResolutionUnitImperial: 'milésimas/paso',
    formulaLabel: 'FÓRMULAS MATEMÁTICAS',
    formulaStepsPerRevolution: 'Pasos/Rev = 360 / Ángulo de Paso',
    formulaMicrostepsPerRev: 'Micropasos/Rev = Pasos/Rev * Micropasos',
    formulaDistancePerRev: 'Distancia/Rev = Dientes * Paso (o Avance del Husillo)',
    formulaStepsPerUnit: 'Pasos/Unidad = Micropasos/Rev / Distancia/Rev',
    formulaResolution: 'Resolución = Distancia/Rev / Micropasos/Rev',
    explainResolutionLabel: '¿Qué significa esto?',
    explainResolutionText: 'Representa el movimiento lineal teórico más pequeño que puede realizar el eje de tu impresora 3D cuando el driver ordena un solo micropaso. Valores de resolución más bajos indican una mayor precisión de posicionamiento mecánico.',
    copyButton: 'Copiar Comando de Firmware',
    copiedButton: '¡Copiado!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'dientes',
    stepAngle18: '1.8° (200 pasos/rev)',
    stepAngle09: '0.9° (400 pasos/rev)',
    stepAngle75: '7.5° (48 pasos/rev)',
    stepAngle15: '15° (24 pasos/rev)',
    microstep1: '1x (Paso Completo)',
    microstep2: '2x',
    microstep4: '4x',
    microstep8: '8x',
    microstep16: '16x',
    microstep32: '32x',
    microstep64: '64x',
    microstep128: '128x',
    microstep256: '256x',
  },
  seo: [
    {
      type: 'title',
      text: 'Guía de Calibración de Motores Paso a Paso y Configuración de Pasos por Milímetro en el Firmware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En las impresoras 3D de uso doméstico y profesional, el movimiento de precisión depende de los motores paso a paso, los drivers y los mecanismos de transmisión lineal. Los motores paso a paso no giran de forma continua, sino que dividen una vuelta completa en un número fijo de pasos discretos. Para que la placa controladora de la impresora 3D pueda mover el cabezal o la cama una distancia exacta, el firmware debe saber con precisión cuántos pasos del motor (incluyendo micropasos) corresponden a una unidad de distancia lineal (milímetro o pulgada). Este valor se conoce como pasos por milímetro o pasos por pulgada, y es un ajuste crítico que se almacena en configuraciones de firmware como Marlin, Klipper o RepRapFirmware.',
    },
    {
      type: 'paragraph',
      html: 'Si esta configuración es aunque sea ligeramente incorrecta, los movimientos físicos de la impresora 3D no coincidirán con las instrucciones digitales generadas por el software laminador. Este desajuste provoca inexactitudes dimensionales en las piezas impresas, donde las piezas terminan siendo más grandes o más pequeñas de lo previsto, los agujeros quedan desalineados y los ensamblajes de varias piezas no encajan correctamente. Comprender los componentes físicos, las características del driver y las relaciones de transmisión permite a los operarios calcular valores matemáticamente perfectos en lugar de depender de métodos de calibración por prueba y error que introducen errores mecánicos.',
    },
    {
      type: 'title',
      text: 'Comparativa de Especificaciones de Motores Paso a Paso y Atributos Mecánicos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los motores paso a paso más comunes en impresión 3D son los motores híbridos en formato NEMA 17. Estos motores suelen tener dos variaciones de ángulo de paso: 1,8 grados por paso y 0,9 grados por paso. Un motor paso a paso de 1,8 grados necesita 200 pasos completos para completar un giro de 360 grados. Un motor de 0,9 grados necesita 400 pasos completos para completar el mismo giro. Elegir entre ambas especificaciones afecta a la precisión de posicionamiento, al par máximo y al ruido operativo del sistema de impresión.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Motor Paso a Paso de 1,8 Grados',
          description: 'Opción estándar en la mayoría de impresoras 3D comerciales. Ofrece un par robusto a altas velocidades y es económico.',
          points: [
            '200 pasos completos por revolución',
            'Mejor retención de par a alta velocidad',
            'Menores requisitos de inductancia eléctrica',
            'Resolución suficiente para aplicaciones FDM generales'
          ]
        },
        {
          title: 'Motor Paso a Paso de 0,9 Grados',
          description: 'Opción de alta precisión popular para impresoras de detalle fino y sistemas de extrusión de alta resolución.',
          points: [
            '400 pasos completos por revolución',
            'Doble resolución mecánica antes del microstepping',
            'Menor error posicional y vibraciones por resonancia reducidas',
            'Mayor fuerza contraelectromotriz a altas velocidades que reduce el límite de par'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Aunque un motor de 0,9 grados ofrece el doble de capacidad de posicionamiento físico, exige el doble de pulsos de paso del microcontrolador de la placa base para alcanzar la misma velocidad de giro. En plataformas de impresión rápida con microcontroladores antiguos de 8 bits, esto puede saturar la cola de procesamiento y provocar tartamudeos o limitaciones de velocidad. En los controladores modernos de 32 bits, esta limitación apenas supone un problema, lo que convierte a los motores de 0,9 grados en una excelente actualización para los ejes X e Y cuando el acabado superficial es crítico.',
    },
    {
      type: 'title',
      text: 'Glosario de Terminología de Motores Paso a Paso y Drivers',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ángulo de Paso',
          definition: 'El giro angular del eje del motor cuando se produce una única secuencia de excitación de bobina en paso completo, normalmente 1,8 o 0,9 grados.',
        },
        {
          term: 'Microstepping',
          definition: 'Método controlado por el driver que divide un paso completo en subpasos más pequeños equilibrando la corriente entre las fases del motor, suavizando el movimiento y reduciendo las vibraciones.',
        },
        {
          term: 'Paso de Correa',
          definition: 'Distancia entre los centros de dos dientes adyacentes en una correa dentada síncrona, comúnmente 2,0 milímetros para correas GT2 usadas en impresión 3D.',
        },
        {
          term: 'Avance del Husillo',
          definition: 'Distancia lineal que recorre una tuerca a lo largo del husillo durante un giro completo de 360 grados del eje del husillo.',
        },
        {
          term: 'Par de Retención',
          definition: 'Cantidad máxima de par que el motor puede ejercer sobre un eje estacionario cuando se aplica la corriente nominal a las bobinas.',
        },
        {
          term: 'Fuerza Contraelectromotriz (Back-EMF)',
          definition: 'Tensión generada por la rotación de las bobinas del motor dentro del campo magnético, que se opone a la tensión de alimentación y limita la velocidad y el par máximos.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Cálculo de Pasos por Milímetro para Correas Dentadas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para los ejes de movimiento horizontal (generalmente X e Y) de impresoras 3D cartesianas, CoreXY y Delta, se utilizan correas dentadas síncronas para convertir el movimiento rotatorio del motor paso a paso en movimiento lineal. El cálculo mecánico depende enteramente del paso de la correa y del número de dientes de la polea motriz acoplada al eje del motor. El perfil del diente de la correa debe coincidir con el perfil del diente de la polea para evitar juego y deslizamiento.',
    },
    {
      type: 'table',
      headers: ['Tamaño de Polea', 'Tipo de Correa', 'Paso de Correa', 'Pasos/rev (1,8°, 16x)', 'Pasos por mm (Métrico)', 'Pasos por Pulgada (Imperial)'],
      rows: [
        ['16 Dientes', 'GT2', '2,0 mm', '3200', '100,00 pasos/mm', '2540,00 pasos/in'],
        ['20 Dientes', 'GT2', '2,0 mm', '3200', '80,00 pasos/mm', '2032,00 pasos/in'],
        ['32 Dientes', 'GT2', '2,0 mm', '3200', '50,00 pasos/mm', '1270,00 pasos/in'],
        ['20 Dientes', 'GT3', '3,0 mm', '3200', '53,33 pasos/mm', '1354,67 pasos/in'],
        ['16 Dientes (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 pasos/mm', '5080,00 pasos/in'],
        ['20 Dientes (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 pasos/mm', '4064,00 pasos/in']
      ],
    },
    {
      type: 'tip',
      title: 'Recomendación Práctica para la Elección de Polea',
      html: 'Elegir una polea de 16 dientes en lugar de una de 20 dientes aumenta la resolución mecánica en un 25 por ciento y la fuerza lineal ejercida sobre el carro. Sin embargo, las poleas más pequeñas obligan a la correa a curvarse con un radio más cerrado, lo que puede aumentar el desgaste de la correa con el tiempo e introducir frecuencias de vibración más altas. Para montajes estándar, las poleas de 20 dientes representan un compromiso equilibrado entre vida útil de la correa y resolución.',
    },
    {
      type: 'title',
      text: 'Realidades del Microstepping: Pérdida de Par y la Solución de Interpolación',
      level: 2,
    },
    {
      type: 'paragraph',
      html: ' Muchos operadores creen que aumentar la resolución de microstepping del driver a valores altos como 64, 128 o 256 escalará infinitamente la precisión de su impresora 3D. Esto es un error común. En realidad, el par incremental entre micropasos disminuye drásticamente a medida que aumenta la división del microstepping. La corriente eléctrica se divide en curvas seno y coseno para posicionar el eje del motor entre los polos físicos. Si la fricción externa o la carga sobre el eje supera el par incremental de un micropaso, el eje del motor no se moverá hasta que se hayan acumulado varios pulsos de micropaso.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Limitación de Par del Microstepping Teórico vs Físico',
      html: 'Con 16 micropasos, el par incremental por micropaso es aproximadamente el 9,8 por ciento del par de retención del motor. Con 256 micropasos, el par incremental se reduce a solo el 0,6 por ciento del par de retención. Cualquier pequeño agarrotamiento mecánico, desequilibrio de tensión de la correa o fricción del carro impedirán fácilmente el movimiento físico de 1/256 de paso, lo que significa que un microstepping nativo alto no garantiza una precisión posicional real.',
    },
    {
      type: 'card',
      title: 'Función de Interpolación de los Drivers Trinamic',
      html: 'Los drivers modernos como el TMC2208, TMC2209 y TMC5160 resuelven este problema recibiendo comandos de paso a una resolución fiable de 16 micropasos e interpolando internamente esos pasos a 256 micropasos antes de ejecutar los cambios de corriente en las bobinas. Esto proporciona el funcionamiento suave y silencioso de 256 micropasos manteniendo al mismo tiempo el par de retención fiable y la menor carga de procesamiento del controlador de la configuración de 16 micropasos. En el firmware, mantén la configuración en 16 micropasos y deja que el driver gestione la interpolación interna.',
    },
    {
      type: 'title',
      text: 'Cálculo de Pasos por Milímetro para Husillos y Varillas Roscadas del Eje Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El eje Z vertical de la mayoría de las impresoras 3D de escritorio utiliza husillos o varillas roscadas. Los husillos están diseñados para la transmisión de potencia y tienen perfiles de rosca rectificados de precisión que minimizan el juego. Al calcular los pasos por mm de un husillo, el paso de la rosca no debe confundirse con el avance. El avance es la distancia lineal real que recorre la tuerca del husillo durante una rotación completa de 360 grados del husillo. El avance se calcula multiplicando el paso de la rosca por el número de entradas de la rosca.',
    },
    {
      type: 'list',
      items: [
        'Husillo de una sola entrada: Paso de 2 mm, número de entradas 1. El avance es de 2 mm por revolución.',
        'Husillo de dos entradas: Paso de 2 mm, número de entradas 2. El avance es de 4 mm por revolución.',
        'Husillo de cuatro entradas (T8x8 común): Paso de 2 mm, número de entradas 4. El avance es de 8 mm por revolución.',
        'Varillas roscadas métricas estándar (p. ej. M8): Una sola entrada. El avance es igual al paso métrico estándar, que es de 1,25 mm por revolución.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Debido a que los husillos tienen una ventaja mecánica sobre los sistemas de correas, alcanzan valores de pasos por mm mucho más altos, lo que se traduce en valores de resolución mecánica más pequeños. Esta alta resolución es crítica para los ejes Z porque las capas se imprimen normalmente en incrementos de entre 0,1 mm y 0,3 mm. Un valor de pasos por mm más alto permite a la impresora establecer alturas de capa consistentes sin errores de posicionamiento.',
    },
    {
      type: 'title',
      text: 'Resumen de Pasos Clave para la Integración del Driver y el Motor',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Pasos Prácticos para Configurar el Firmware de tu Impresora',
      items: [
        'Identifica el ángulo de paso del motor en la hoja de datos del fabricante (normalmente 1,8 o 0,9 grados).',
        'Determina la configuración de microstepping del driver, ya sea mediante jumpers físicos o comandos UART por software (16 es lo recomendado).',
        'Mide o consulta el paso de la correa y cuenta los dientes de la polea para los ejes de correa.',
        'Verifica el avance del husillo (paso por número de entradas) para el eje Z.',
        'Introduce estos parámetros en nuestra calculadora para obtener el valor exacto de configuración en pasos/mm o pasos/pulgada.',
        'Escribe los valores calculados en los archivos de configuración de tu firmware o guárdalos mediante comandos de terminal como M92.'
      ],
    },
  ],
  faq: [
    {
      question: '¿Por qué mis pasos/mm calculados son diferentes de mi calibración manual?',
      answer: 'Los pasos/mm calculados son matemáticamente exactos basándose en la geometría física de los componentes. Si una calibración manual sugiere un valor diferente, normalmente es porque el operador midió el filamento o el recorrido del eje con un calibre mientras el juego mecánico, el estiramiento de la correa o el deslizamiento del extrusor introducían errores. Debes usar siempre el valor matemáticamente calculado para los ejes de movimiento y solucionar los problemas mecánicos subyacentes en lugar de ajustar los pasos.',
    },
    {
      question: '¿Qué ocurre si configuro el valor de microstepping demasiado alto en el firmware?',
      answer: 'Ajustar el microstepping a 64, 128 o 256 en el firmware incrementa la demanda de frecuencia de pulsos en la placa controladora. Si la placa base no puede generar pulsos de paso suficientemente rápido, la impresora puede congelarse, tartamudear o limitar la velocidad máxima de desplazamiento. Es mejor usar 16 micropasos en el firmware con la interpolación del driver activada.',
    },
    {
      question: '¿Cómo cambio los valores de pasos por mm en mi impresora 3D?',
      answer: 'Puedes cambiar los valores temporalmente usando el comando M92 seguido de la letra del eje y el valor (p. ej., M92 X80.00 Y80.00 Z400.00). Para hacer estos valores permanentes, envía el comando M500 para guardarlos en la EEPROM, o edita el archivo Configuration.h en el firmware Marlin y vuelve a flashearlo, o edita el archivo printer.cfg en Klipper.',
    },
    {
      question: '¿Cuál es la diferencia entre el paso de la correa y los dientes de la polea?',
      answer: 'El paso de la correa es la distancia entre dos dientes consecutivos de la correa, medida de centro a centro. Los dientes de la polea es el número total de dientes físicos del engranaje acoplado al eje del motor. Multiplicar el número de dientes por el paso da la distancia lineal total recorrida por revolución del motor.',
    },
    {
      question: '¿Puedo usar diferentes valores de microstepping para distintos ejes?',
      answer: 'Sí, puedes configurar valores de microstepping diferentes para los ejes X, Y, Z y E. Por ejemplo, es muy común usar 16 micropasos en X e Y, 16 micropasos en Z y 16 o 32 micropasos en el extrusor dependiendo del ratio de reducción del conjunto del extrusor.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Determinar las Especificaciones del Motor y el Driver',
      text: 'Encuentra el ángulo de paso de tu motor (normalmente 1,8 o 0,9 grados) y el valor de microstepping del driver (16 es el estándar).',
    },
    {
      name: 'Determinar los Datos de Transmisión',
      text: 'Elige entre transmisión por correa (especifica paso de la correa y dientes de la polea) o husillo (especifica el avance del husillo).',
    },
    {
      name: 'Configurar el Firmware',
      text: 'Introduce los valores, selecciona tu sistema de unidades preferido y copia el comando de configuración de pasos generado en la configación de tu impresora.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Por qué mis pasos/mm calculados son diferentes de mi calibración manual?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los pasos/mm calculados son matemáticamente exactos basándose en la geometría física de los componentes. La calibración manual suele introducir errores debidos a la tensión de la correa o la compresión del filamento.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Microstepping para Driver Paso a Paso',
      description: 'Calcula los valores de configuración de pasos y los límites de resolución física para motores y drivers de impresora 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cómo calcular los pasos por mm de un motor paso a paso',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Determinar las Especificaciones del Motor y el Driver',
        },
        {
          '@type': 'HowToStep',
          text: 'Determinar los Datos de Transmisión',
        },
        {
          '@type': 'HowToStep',
          text: 'Configurar el Firmware',
        },
      ],
    },
  ],
};