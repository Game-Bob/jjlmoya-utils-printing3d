import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'uv-harts-hardningskalkylator',
  title: 'UV harts härdningstid kalkylator',
  description: 'Bestäm den exakta härdningstiden för dina 3D-utskrifter i harts. Baserat på lampeffekt i watt, hartstyp och avstånd. Professionell teknisk guide.',
  ui: {
    title: 'UV harts härdningskalkylator',
    configLabel: 'KONFIGURATION',
    brandLabel: 'Utrustningsmärke',
    powerLabel: 'Lampeffekt (W)',
    powerUnit: 'W',
    distanceLabel: 'LED-avstånd (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Materialtyp',
    weightLabel: 'Uppskattad vikt (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Rengjord med Isopropylalkohol?',
    safetyLabel: 'UV-SÄKERHET',
    safetySunglasses: 'Certifierade UV-glasögon',
    safetyGloves: 'Nitrilhandskar',
    sunglassesTooltip: 'Direkt exponering för 405nm kan permanent skada din näthinna.',
    glovesTooltip: 'Delvis härdat harts är mycket irriterande. Använd alltid skydd.',
    wavelength: 'Våglängd',
    wavelengthValue: '405 nm',
    statusLabel: 'Status',
    modeLabel: 'Läge',
    modeValue: 'Industriell',
    curingTime: 'm:s',
    startButton: 'Starta/Stoppa härdningscykel',
    intensityChart: 'UV-intensitet (Dos)',
    nearLabel: 'Nära (2cm)',
    farLabel: 'Långt (30cm)',
    theoreticalLabel: 'Teoretisk dos',
    yourConfigLabel: 'Din konfiguration',
    evaporateWarning: 'Låt alkoholen avdunsta (min. 10 min) för att förhindra vita fläckar.',
    safeDistance: 'Säkert avstånd detekterat för enhetlig härdning.',
    riskDistance: 'Risk för värmedeformation (kritiskt avstånd).',
    optimeStatus: 'Optimal',
    longStatus: 'Lång',
    fastStatus: 'Snabb',
  },
  seo: [
    {
      type: 'title',
      text: 'UV-harts härdningstid kalkylator: Professionell guide',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inom 3D-utskrift med harts (SLA, DLP eller LCD) är <strong>UV-härdning det avgörande slutsteget</strong> som omvandlar en mjuk, klibbig del till ett tåligt objekt med deklarerade mekaniska egenskaper. Utan ordentlig efterhärdning kommer din utskrift att vara strukturellt svag, giftig och instabil.',
    },
    {
      type: 'title',
      text: 'Vad är UV-hartshärdning?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När en 3D-skrivare har skrivit klart en del i harts befinner sig delen i det som tekniker kallar <strong>"grönt tillstånd" (green state)</strong>. Även om den har sin slutliga form, är polymerens molekylkedjor inte helt tvärbundna. UV-härdning fullbordar tvärbindningen, eliminerar klibbighet och förbättrar hårdhet, styrka och termisk stabilitet.',
    },
  ],
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Referenser',
  faq: [
    {
      question: 'Hur lång tid tar härdning av UV-harts?',
      answer: 'Det beror på din lampas effekt. En station på 40W tar vanligtvis 2-4 minuter för medelstora delar, medan DIY-lampor med lägre effekt kan behöva upp till 10 minuter.',
    },
    {
      question: 'Kan jag härda harts med en nagellampa?',
      answer: 'Det är möjligt om lampan täcker 405nm-spektrumet, men dessa lampor har vanligtvis låg effekt (6W-12W), vilket förlänger tiderna avsevärt och kan orsaka dålig ythärdning.',
    },
    {
      question: 'Är vattenhärdning nödvändigt?',
      answer: 'Inte obligatoriskt, men rekommenderas starkt (Water Curing). Vatten blockerar kontakt med syre, vilket hämmar ytapolymerisationen, vilket resulterar i mindre klibbiga delar.',
    },
    {
      question: 'Hur vet jag om hartset är ordentligt härdat?',
      answer: 'Delen ska kännas helt torr vid beröring (inte klibbig), ha förlorat sin "våta" glans, visa en liten färgförändring och inte längre lukta starkt av flytande harts.',
    },
    {
      question: 'Varför blir mitt klara harts gult?',
      answer: 'Det är effekten av överhärdning eller för hög temperatur. Använd faktorn "Transparent" i vår kalkylator för att minska tiden och håll LED-lamporna minst 5 cm bort.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Efterhärdning av hartutskrifter',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: Vetenskapen bakom UV-härdning',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Konfigurera din utrustning',
      text: 'Välj märke på din UV-maskin och justera effekten i watt.',
    },
    {
      name: 'Justera fysiska parametrar',
      text: 'Ange avståndet mellan LED och del, hartstyp och uppskattad vikt.',
    },
    {
      name: 'Starta härdning',
      text: 'Använd den beräknade tiden som vägledning och övervaka din del under processen.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hur lång tid tar härdning av UV-harts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En station på 40W tar vanligtvis 2-4 minuter för medelstora delar, medan lampor med lägre effekt kan behöva upp till 10 minuter.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UV-harts härdningskalkylator',
      description: 'Bestäm den exakta härdningstiden för dina 3D-utskrifter i harts baserat på lampeffekt, avstånd och materialtyp.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man beräknar härdningstid för UV-harts',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Konfigurera din utrustning',
        },
        {
          '@type': 'HowToStep',
          text: 'Justera fysiska parametrar',
        },
      ],
    },
  ],
};
