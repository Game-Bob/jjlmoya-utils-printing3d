import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'kalkulator-penyembuhan-resin-uv',
  title: 'Kalkulator Waktu Penyembuhan Resin UV',
  description: 'Tentukan waktu penyembuhan yang tepat untuk hasil cetak 3D resin Anda. Berdasarkan daya lampu dalam watt, jenis resin, dan jarak. Panduan teknis profesional.',
  ui: {
    title: 'Kalkulator Penyembuhan Resin UV',
    configLabel: 'KONFIGURASI',
    brandLabel: 'Merek Peralatan',
    powerLabel: 'Daya Lampu (W)',
    powerUnit: 'W',
    distanceLabel: 'Jarak LED (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Jenis Material',
    weightLabel: 'Estimasi Berat (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Dibersihkan dengan Isopropyl Alcohol?',
    safetyLabel: 'KESELAMATAN UV',
    safetySunglasses: 'Kacamata UV Bersertifikat',
    safetyGloves: 'Sarung Tangan Nitril',
    sunglassesTooltip: 'Paparan langsung ke 405nm dapat merusak retina Anda secara permanen.',
    glovesTooltip: 'Resin yang setengah mengering sangat mengiritasi. Selalu gunakan pelindung.',
    wavelength: 'Panjang Gelombang',
    wavelengthValue: '405 nm',
    statusLabel: 'Status',
    modeLabel: 'Mode',
    modeValue: 'Industri',
    curingTime: 'm:s',
    startButton: 'Mulai/Henti Siklus Penyembuhan',
    intensityChart: 'Intensitas UV (Dosis)',
    nearLabel: 'Dekat (2cm)',
    farLabel: 'Jauh (30cm)',
    theoreticalLabel: 'Dosis Teoretis',
    yourConfigLabel: 'Konfigurasi Anda',
    evaporateWarning: 'Uapkan alkohol (min. 10 menit) untuk mencegah bintik putih.',
    safeDistance: 'Jarak aman terdeteksi untuk penyembuhan yang seragam.',
    riskDistance: 'Risiko deformasi panas (Jarak Kritis).',
    optimeStatus: 'Optimal',
    longStatus: 'Lama',
    fastStatus: 'Cepat',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Waktu Penyembuhan Resin UV: Panduan Profesional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam pencetakan 3D resin (SLA, DLP, atau LCD), <strong>penyembuhan (curing) UV adalah langkah akhir yang penting</strong> yang mengubah bagian yang lunak dan lengket menjadi objek yang tahan lama dengan sifat mekanis yang dideklarasikan. Tanpa pasca-penyembuhan yang tepat, hasil cetak Anda akan lemah secara struktural, beracun, dan tidak stabil.',
    },
    {
      type: 'title',
      text: 'Apa itu Penyembuhan Resin UV?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ketika printer 3D resin selesai mencetak, bagian tersebut berada dalam apa yang oleh teknisi disebut sebagai <strong>"green state"</strong>. Meskipun sudah memiliki bentuk akhirnya, rantai molekul polimer belum sepenuhnya terhubung silang. Penyembuhan UV melengkapi koneksi silang ini, menghilangkan rasa lengket dan meningkatkan kekerasan, kekuatan, serta stabilitas termal.',
    },
  ],
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Referensi',
  faq: [
    {
      question: 'Berapa lama waktu penyembuhan resin UV?',
      answer: 'Itu tergantung pada daya lampu Anda. Stasiun 40W biasanya membutuhkan 2-4 menit untuk bagian berukuran sedang, sementara lampu DIY berdaya rendah mungkin membutuhkan hingga 10 menit.',
    },
    {
      question: 'Bisakah saya menyembuhkan resin dengan lampu kuku?',
      answer: 'Mungkin saja jika lampu mencakup spektrum 405nm, tetapi lampu ini biasanya memiliki daya rendah (6W-12W), sehingga memperpanjang waktu secara signifikan dan berpotensi menyebabkan penyembuhan permukaan yang buruk.',
    },
    {
      question: 'Apakah penyembuhan dalam air diperlukan?',
      answer: 'Tidak wajib, tetapi sangat disarankan (Water Curing). Air menghalangi kontak oksigen, yang menghambat polimerisasi permukaan, sehingga menghasilkan bagian yang tidak lengket.',
    },
    {
      question: 'Bagaimana saya tahu jika resin sudah sembuh dengan benar?',
      answer: 'Bagian tersebut harus benar-benar kering saat disentuh (tidak lengket), kehilangan kilau "basah"-nya, menunjukkan sedikit perubahan warna, dan tidak lagi berbau tajam seperti resin cair.',
    },
    {
      question: 'Mengapa resin bening saya menjadi kuning?',
      answer: 'Itu adalah efek dari penyembuhan berlebihan atau suhu yang terlalu tinggi. Gunakan faktor "Transparan" di kalkulator kami untuk mengurangi waktu dan jaga jarak LED minimal 5cm.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Post-curing Resin Prints',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: Ilmu Penyembuhan UV',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Konfigurasi peralatan Anda',
      text: 'Pilih merek mesin UV Anda dan sesuaikan daya dalam watt.',
    },
    {
      name: 'Sesuaikan parameter fisik',
      text: 'Tentukan jarak antara LED dan bagian, jenis resin, dan estimasi berat.',
    },
    {
      name: 'Mulai penyembuhan',
      text: 'Gunakan waktu yang dihitung sebagai panduan dan pantau bagian Anda selama proses berlangsung.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Berapa lama waktu penyembuhan resin UV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Stasiun 40W biasanya membutuhkan 2-4 menit untuk bagian berukuran sedang, sementara lampu berdaya rendah mungkin membutuhkan hingga 10 menit.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Penyembuhan Resin UV',
      description: 'Tentukan waktu penyembuhan yang tepat untuk hasil cetak 3D resin Anda berdasarkan daya lampu, jarak, dan jenis material.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara menghitung waktu penyembuhan resin UV',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Konfigurasi peralatan Anda',
        },
        {
          '@type': 'HowToStep',
          text: 'Sesuaikan parameter fisik',
        },
      ],
    },
  ],
};
