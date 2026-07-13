import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'estimasi-dehidrasi-filamen';
const title = 'Estimator Dehidrasi Filamen: Panduan Regenerasi Termal';
const description = 'Model kejenuhan filamen higroskopis dengan kinetika adsorpsi eksponensial, paparan kelembapan, jenis polimer, dan suhu ruang pengering.';

const faqData = [
  {
    question: 'Bagaimana estimator dehidrasi filamen menghitung kejenuhan kelembapan?',
    answer: 'Alat ini menggunakan model kejenuhan eksponensial: penyerapan bahan maksimum dikalikan dengan satu dikurangi e pangkat minus koefisien kinetik kali waktu paparan, lalu diskalakan dengan kelembapan relatif sekitar.',
  },
  {
    question: 'Mengapa Nylon membutuhkan lebih banyak pengeringan daripada PLA?',
    answer: 'Nylon memiliki kapasitas kelembapan yang lebih tinggi dan koefisien adsorpsi yang lebih cepat daripada PLA, sehingga mencapai kandungan air yang merusak lebih cepat pada kelembapan dan waktu paparan yang sama.',
  },
  {
    question: 'Apakah suhu pengeringan yang lebih tinggi selalu berarti pengeringan yang lebih aman?',
    answer: 'Tidak. Suhu yang lebih tinggi mempercepat dehidrasi, tetapi setiap polimer memiliki kisaran ruang yang aman. Melebihinya dapat melunakkan filamen, merusak kumparan (spool), atau mengubah perilaku pencetakan.',
  },
  {
    question: 'Apa arti indikator risiko hidrolisis?',
    answer: 'Indikator ini membandingkan perkiraan kandungan air dengan ambang batas kritis bahan dan memunculkan peringatan ketika kelembapan yang diserap cukup tinggi untuk meningkatkan gelembung, stringing, lapisan yang lemah, atau kerusakan rantai polimer.',
  },
];

const howToData = [
  { name: 'Pilih polimer', text: 'Pilih PLA, PETG, ABS, ASA, TPU, Nylon, PC, atau PVA agar model dapat memuat kapasitas keseimbangan dan koefisien kinetik yang benar.' },
  { name: 'Masukkan kelembapan penyimpanan', text: 'Atur kelembapan relatif tempat kumparan terpapar, menggunakan pengukuran kelembapan ruangan, kotak penyimpanan, atau bengkel.' },
  { name: 'Atur waktu paparan', text: 'Masukkan berapa hari filamen berada di luar kotak kering tertutup atau pengering aktif.' },
  { name: 'Pilih suhu pengeringan', text: 'Gunakan suhu ruang pengering dalam kisaran aman untuk polimer dan bahan kumparan.' },
  { name: 'Mulai siklus pengeringan', text: 'Mulai pengukur waktu pengeringan yang tersimpan, lalu biarkan visualisasi ruang pengering terkuras secara bertahap saat perkiraan beban kelembapan dihilangkan.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    materialLabel: 'Polimer',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polikarbonat',
    materialPvaLabel: 'Penyangga PVA',
    humidityLabel: 'Kelembapan relatif',
    exposureLabel: 'Waktu paparan',
    dryTempLabel: 'Ruang pengering',
    spoolMassLabel: 'Massa kumparan',
    calculateLabel: 'Mulai siklus pengeringan',
    pauseCycleLabel: 'Jeda siklus',
    resumeCycleLabel: 'Lanjutkan siklus',
    resetCycleLabel: 'Atur ulang siklus',
    saturationLabel: 'Kandungan kelembapan',
    absorbedLabel: 'Air yang diserap',
    dryingTimeLabel: 'Siklus pengeringan',
    remainingTimeLabel: 'Sisa waktu',
    cycleProgressLabel: 'Kemajuan siklus',
    hydrolysisLabel: 'Risiko hidrolisis',
    stableLabel: 'Stabil',
    watchLabel: 'Zona pemantauan',
    criticalLabel: 'Kritis',
    chamberReadyLabel: 'Ruang siap',
    chamberRunningLabel: 'Siklus pengeringan berjalan',
    chamberCompleteLabel: 'Kelembapan dibersihkan',
    curveLabel: 'Kurva adsorpsi',
    kineticLabel: 'Kinetika kejenuhan',
    equilibriumLabel: 'Pendekatan eksponensial ke kejenuhan keseimbangan',
    daysUnit: 'hari',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'j',
    minutesUnit: 'm',
    secondsUnit: 'd',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Memahami kinetika adsorpsi: mengapa Nylon tidak berperilaku seperti PLA', level: 2 },
    { type: 'paragraph', html: 'Alat <strong>estimasi waktu pengeringan filamen 3D</strong> yang andal tidak dapat menganggap kelembapan sebagai garis lurus. Polimer higroskopis tidak menyerap persentase air yang sama setiap hari selamanya. Mereka mendekati kondisi keseimbangan: cepat pada awalnya, melambat saat mendekati kejenuhan, dan sangat bergantung pada kelembapan relatif sekitar. Itulah mengapa kumparan yang dibiarkan pada kelembapan 70% RH selama dua hari tidak berarti hanya setengah basah dari kumparan yang dibiarkan selama empat hari. Bagian awal dari paparan sering kali menghasilkan peningkatan kelembapan paling curam, terutama pada Nylon, TPU, PVA, dan bahan lain dengan gugus polar yang menarik molekul air.' },
    { type: 'paragraph', html: 'Alat ini memodelkan kandungan kelembapan dengan <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. Di mana <code>S_max</code> adalah kapasitas penyerapan keseimbangan polimer, <code>k</code> is kecepatan adsorpsi, <code>t</code> adalah waktu paparan, dan <code>RH</code> menskalakan hasil ke lingkungan penyimpanan. Hasilnya bukanlah sertifikat laboratorium; ini adalah model perencanaan teknik yang menjelaskan mengapa bengkel yang sama dapat membuat PLA tetap dapat dicetak sementara membuat Nylon mendesis, bergelembung, stringing, dan kehilangan kekuatan lapisan.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Kapasitas keseimbangan perencanaan untuk PLA' },
      { value: '3.2%', label: 'Kapasitas keseimbangan perencanaan untuk Nylon PA' },
      { value: '5.8%', label: 'Kapasitas keseimbangan perencanaan untuk filamento penyangga PVA' },
      { value: 'RH diskalakan', label: 'Kelembapan sekitar mengalikan kurva kejenuhan' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Gejala kelembapan adalah gejala proses', badge: 'Petunjuk cetak', html: 'Suara letupan, gelembung uap, perubahan permukaan dari satin menjadi kasar, stringing berlebih, dinding yang lemah, dan turbiditas ekstrudat bukanlah masalah slicer acak. Hal ini sering menunjukkan bahwa air berubah menjadi uap di zona pelelehan atau hidrolisis telah mengurangi panjang rantai polimer sebelum deposisi.' },

    { type: 'title', text: 'Bagaimana model kejenuhan eksponensial mengubah keputusan pengeringan', level: 2 },
    { type: 'paragraph', html: 'Kalkulator linier biasanya menanyakan bahan dan mengembalikan jumlah jam yang tetap. Hal itu berguna untuk pengingat cepat, tetapi menyembunyikan pertanyaan sebenarnya: berapa banyak kelembapan yang sebenarnya telah diserap filamen? Kumparan yang disimpan dalam wadah kering tertutup rapat pada kelembapan 15% RH selama tiga minggu mungkin memerlukan sedikit atau tanpa regenerasi. Polimer yang sama yang dibiarkan terbuka di garasi yang lembap selama akhir pekan mungkin memerlukan siklus ruang pengering penuh. Pemodelan kejenuhan menghubungkan rekomendasi pengeringan dengan riwayat paparan daripada memperlakukan setiap kumparan sebagai sama basahnya.' },
    { type: 'table', headers: ['Masukan', 'Arti Fisik', 'Pengaruh pada Perkiraan'], rows: [
      ['Kelembapan relatif', 'Aktivitas air di sekitar kumparan', 'RH yang lebih tinggi menaikkan target keseimbangan dan persentase akhir yang diserap.'],
      ['Waktu paparan', 'Berapa lama difusi dibiarkan berlangsung', 'Hari-hari awal adalah yang paling penting; kurva melambat saat mendekati kejenuhan.'],
      ['Koefisien bahan', 'Seberapa cepat polimer mendekati keseimbangan', 'Nylon dan PVA bergerak lebih cepat daripada PLA atau ASA.'],
      ['Suhu pengeringan', 'Energi termal yang tersedia untuk desorpsi', 'Suhu ruang pengering aman yang lebih tinggi memperpendek siklus yang diperkirakan.'],
      ['Massa kumparan', 'Jumlah polimer yang ada', 'Persentase adalah kondisi bahan; gram yang diserap diskalakan dengan massa kumparan.'],
    ] },
    { type: 'tip', title: 'Perkirakan lingkungan penyimpanan, bukan aplikasi cuaca', html: 'Gunakan kelembapan di dalam kotak penyimpanan, penutup printer, lemari, atau bengkel tempat filamen benar-benar diletakkan. Laporan cuaca lokal dapat sangat berbeda dari kelembapan di samping printer yang panas, rak ruang bawah tanah, atau wadah tertutup rapat dengan pengering (desiccant).' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Mengapa pengisian cincin melambat mendekati kejenuhan', html: 'Cincin visual mengikuti perilaku eksponensial yang sama seperti persamaan. Cincin terisi dengan cepat saat polimer kering karena gradien kelembapan yang kuat. Mendekati keseimbangan, gradien menjadi lebih lemah, sehingga laju pengisian yang terlihat melambat. Perlambatan itu adalah hukum fisika, bukan trik animasi.' },

    { type: 'title', text: 'Kisaran kalkulator dehidrasi filamen berdasarkan bahan', level: 2 },
    { type: 'paragraph', html: 'Rekomendasi pengeringan harus menghormati polimer dan kumparan. PLA dapat melunak atau merayap (creep) saat terlalu panas. PETG dapat mentolerir lebih banyak panas tetapi tetap mendapat manfaat dari kontrol ruang pengering yang konservatif. Nylon biasanya membutuhkan siklus yang lebih panas dan lebih lama karena menyerap lebih banyak air dan menahannya lebih agresif. PVA sangat sensitif terhadap kelembapan dan dapat menjadi tidak dapat dicetak jika dibiarkan terbuka. PC sering kali mencetak lebih baik setelah dikeringkan meskipun tidak terlihat basah secara nyata. Estimator menggunakan perbedaan ini untuk mengubah <strong>kalkulator dehidrasi filamen</strong> umum menjadi panduan khusus bahan.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Respons higroskopis rendah hingga sedang', description: 'PLA, ABS, dan ASA umumnya menyerap lebih sedikit air dan lebih lambat, tetapi tetap mengalami penurunan kualitas setelah paparan lembap yang lama.', points: ['Siklus pengeringan lebih pendek', 'Kelembapan keseimbangan lebih rendah', 'Gejala mungkin muncul secara bertahap'] },
      { title: 'Respons higroskopis tinggi', description: 'Nylon, TPU, PVA, dan beberapa tingkat PC memerlukan penyimpanan yang lebih aktif dan regenerasi yang lebih disiplin.', points: ['Massa air yang diserap lebih tinggi', 'Kejenuhan awal yang lebih cepat', 'Risiko gelembung dan lapisan lemah yang lebih besar'] },
    ] },
    { type: 'table', headers: ['Bahan', 'Target Ruang Khas', 'Catatan Perencanaan'], rows: [
      ['PLA', '40-55 C', 'Hindari panas berlebih karena PLA dan beberapa inti kumparan dapat berubah bentuk.'],
      ['PETG', '55-70 C', 'Sering kali meningkatkan konsistensi permukaan dan mengurangi stringing setelah beberapa jam.'],
      ['ABS / ASA', '65-85 C', 'Penyerapan lebih rendah dari Nylon tetapi mendapat manfaat dari penyimpanan kering.'],
      ['TPU', '45-60 C', 'Tingkat fleksibel dapat menyerap kelembapan yang cukup untuk berbusa atau stringing.'],
      ['Nylon PA', '70-90 C', 'Biasanya membutuhkan pengeringan aktif sebelum pencetakan fungsional kritis.'],
      ['PVA', '40-55 C', 'Bahan penyangga yang sensitif terhadap kelembapan; segera simpan dalam keadaan tertutup rapat.'],
    ] },
    { type: 'proscons', title: 'Bagan pengeringan tetap vs pemantau kejenuhan', items: [
      { pro: 'Bagan tetap cepat digunakan saat Anda hanya membutuhkan siklus standar.', con: 'Bagan tersebut tidak dapat membedakan kumparan dari kotak kering dengan kumparan dari udara terbuka yang lembap.' },
      { pro: 'Pemodelan kejenuhan menjelaskan mengapa paparan awal bisa parah.', con: 'Model ini tetap bergantung pada perkiraan koefisien bahan dan riwayat penyimpanan.' },
      { pro: 'Masukan suhu pengeringan mencerminkan pengaturan ruang pengering yang sebenarnya.', con: 'Ini tidak menggantikan batas suhu aman dari produsen filamen.' },
      { pro: 'Gram yang diserap membuat hasil menjadi nyata untuk kumparan penuh dan sebagian.', con: 'Massa kumparan tidak menunjukkan apakah gulungan luar lebih basah daripada bagian inti.' },
    ] },

    { type: 'title', text: 'Risiko hidrolisis: ketika filamen basah menjadi filamen yang rusak', level: 2 },
    { type: 'paragraph', html: 'Kelembapan bukan hanya masalah kualitas cetak. Pada suhu ekstrusi, air yang diserap dapat berkontribusi pada hidrolisis pada polimer yang rentan. Hidrolisis memutus rantai molekul, mengurangi ketangguhan, pemanjangan (elongation), dan keandalan. Efek ini sangat penting untuk bahan teknik yang digunakan dalam braket, alat bantu, roda gigi, saluran, dan bagian yang memikul beban. Kumparan yang basah mungkin masih dapat diekstrusi, tetapi bagian tersebut dapat gagal lebih awal karena polimer mengalami degradasi kimia selama pemrosesan.' },
    { type: 'glossary', items: [
      { term: 'Higroskopi', definition: 'Kecenderungan suatu bahan untuk menarik dan menahan air dari udara sekitarnya.' },
      { term: 'Kelembapan keseimbangan', definition: 'Kandungan kelembapan yang didekati polimer setelah waktu yang cukup pada kelembapan tertentu.' },
      { term: 'Koefisien adsorpsi', definition: 'Nilai kinetik sederhana yang mengontrol seberapa cepat kurva kejenuhan naik.' },
      { term: 'Desorpsi', definition: 'Proses sebaliknya: air keluar dari polimer selama pengeringan yang dipanaskan.' },
      { term: 'Hidrolisis', definition: 'Pemutusan rantai kimia yang disebabkan oleh air di bawah panas, relevan untuk beberapa polimer teknik.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Permukaan yang kering tidak menjamin bagian inti yang kering', badge: 'Batas difusi', html: 'Filamen mengering dari luar ke dalam. Hembusan panas yang singkat dapat memperbaiki permukaan sementara gulungan bagian dalam dari kumparan yang padat tetap lembap. Kumparan besar, sisi karton, dan gulungan filamen yang rapat semuanya dapat memperlambat regenerasi.' },
    { type: 'message', title: 'Aturan visual', html: 'Ketika cincin berubah dari biru bersih menjadi kondisi abu-abu-biru yang redup, alat ini menandai transisi dari pengelolaan kelembapan normal ke zona pemantauan hidrolisis. Itulah titik di mana pengeringan menjadi bagian dari kontrol kualitas, bukan hanya pembersihan kosmetik.' },

    { type: 'title', text: 'Membangun alur kerja pengeringan filamen yang andal', level: 2 },
    { type: 'paragraph', html: 'Panduan kejenuhan bahan higroskopis yang berguna menggabungkan prediksi dengan rutinitas. Ukur kelembapan penyimpanan, beri label pada kumparan dengan tanggal dibuka, simpan polimer sensitif dalam kotak tertutup, isi ulang pengering sebelum jenuh, dan keringkan sebelum mencetak di mana kinerja mekanis penting. Alur kerja terbaik mencegah siklus basah-kering yang berulang karena setiap siklus panas yang tidak perlu dapat memicu penuaan bahan, merusak kumparan, atau membuang waktu produksi.' },
    { type: 'list', items: [
      'Keringkan Nylon, PVA, TPU, dan PC sebelum cetakan panjang ketika riwayat penyimpanan tidak pasti.',
      'Jaga agar PLA dan PETG tetap tertutup rapat juga; penyerapan yang lebih rendah bukan berarti penyerapan nol.',
      'Use termometer independen di dalam pengering karena suhu tampilan bisa terlalu optimis.',
      'Biarkan filamen dialirkan dari kotak kering selama pencetakan beberapa jam di ruangan yang lembap.',
      'Ganti atau isi ulang pengering ketika manik-manik indikator atau sensor kelembapan menunjukkan kotak penyimpanan mulai lembap.',
      'Hindari pengeringan di atas transisi gelas atau kisaran pelunakan filamen dan kumparan.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'Ruang pengering adalah sistem regenerasi', html: 'Ruang pengering harus menyediakan panas yang stabil, aliran udara, dan jalur keluar bagi kelembapan. Memanaskan kotak tertutup tanpa ventilasi atau pengering hanya dapat memindahkan air dari filamen ke udara ruang pengering dan kembali lagi.' },
    { type: 'summary', title: 'Daftar periksa interpretasi praktis', items: [
      'Persentase kelembapan menjelaskan kondisi bahan; gram yang diserap menjelaskan beban air di kumparan.',
      'Kelembapan yang tinggi dan bahan yang cepat menyerap menciptakan kejenuhan awal yang curam.',
      'Waktu pengeringan harus meningkat seiring kejenuhan dan menurun seiring suhu ruang pengering yang aman.',
      'Risiko hidrolisis paling penting untuk ekstrusi suhu tinggi dan bagian fungsional.',
      'Lembar data produsen mengesampingkan perkiraan pengeringan umum.'
    ] },

    { type: 'title', text: 'Jawaban SEO: berapa lama saya harus mengeringkan filamen printer 3D?', level: 2 },
    { type: 'paragraph', html: 'Waktu pengeringan yang tepat bergantung pada bahan, paparan kelembapan, massa kumparan, dan suhu ruang pengering. PLA mungkin hanya membutuhkan beberapa jam setelah paparan sedang, PETG dan TPU sering kali membutuhkan waktu lebih lama, dan Nylon atau PVA dapat memerlukan siklus regenerasi yang substansial setelah penyimpanan yang lembap. Alur kerja <strong>kandungan kelembapan pencetakan 3D</strong> yang kuat memperkirakan air yang diserap terlebih dahulu, lalu memilih suhu pengering yang aman dan waktu yang cukup untuk desorpsi. Itu lebih andal daripada menerapkan satu angka universal untuk setiap polimer.', },
    { type: 'diagnostic', variant: 'success', title: 'Kasus penggunaan terbaik untuk pemantau ini', badge: 'Preflight teknik', html: 'Gunakan estimator sebelum cetakan penting, batch produksi, polimer teknik mahal, atau pekerjaan apa pun di mana permukaan yang gagal, lapisan rapuh, atau bagian yang kurang kuat akan memakan biaya lebih besar daripada siklus pengeringan.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
