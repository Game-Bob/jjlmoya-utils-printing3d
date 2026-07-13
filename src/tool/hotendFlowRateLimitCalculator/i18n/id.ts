import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'kalkulator-batas-laju-aliran-volumetrik';
const title = 'Kalkulator Laju Aliran Volumetrik: Batas Hotend yang Presisi';
const description =
  'Hitung laju aliran volumetrik pencetakan 3D dalam mm3/s, bandingkan dengan kapasitas leleh hotend, dan identifikasi kapan kecepatan, lebar garis, dan tinggi lapisan akan menyebabkan under-extrusion.';

const faqData = [
  {
    question: 'Apa itu laju aliran volumetrik dalam pencetakan 3D?',
    answer:
      'Laju aliran volumetrik adalah volume plastik yang diminta dari hotend setiap detik. Ini dihitung sebagai lebar garis dikalikan tinggi lapisan dikalikan kecepatan cetak, menghasilkan hasil dalam mm3/s.',
  },
  {
    question: 'Apa yang terjadi jika laju aliran volumetrik melebihi batas hotend?',
    answer:
      'Hotend tidak dapat melelehkan plastik sepenuhnya pada kecepatan yang diminta. Tekanan meningkat, ekstrusi menjadi tidak konsisten, dan cetakan dapat menunjukkan under-extrusion, dinding lemah, permukaan kasar matte, atau langkah ekstruder yang terlewat.',
  },
  {
    question: 'Apakah V6 benar-benar terbatas pada 15 mm3/s?',
    answer:
      '15 mm3/s adalah konstanta perencanaan praktis untuk hotend zona leleh standar yang disetel dengan baik. Nilai sebenarnya tergantung pada filamen, suhu, nozzle, daya pemanas, cengkeraman ekstruder, dan seberapa banyak penurunan kualitas visual yang dapat diterima.',
  },
  {
    question: 'Mengapa meningkatkan tinggi lapisan mengurangi kecepatan aman?',
    answer:
      'Tinggi lapisan adalah pengali langsung dalam persamaan aliran. Jika lebar garis dan kapasitas hotend tetap sama, menggandakan tinggi lapisan kira-kira membagi dua kecepatan maksimum sebelum hotend mencapai batas lelehnya.',
  },
];

const howToData = [
  { name: 'Pilih arsitektur hotend', text: 'Pilih prasetel V6 standar, Volcano, Bambu high-flow, atau ultra-high-flow untuk menetapkan konstanta kapasitas leleh.' },
  { name: 'Atur geometri garis', text: 'Sesuaikan lebar garis dan tinggi lapisan agar sesuai dengan profil slicer yang Anda rencanakan.' },
  { name: 'Sesuaikan kecepatan cetak', text: 'Gunakan penggeser kecepatan halus untuk melihat indikator beban mendekati zona aliran 70%, 90%, dan kritis.' },
  { name: 'Baca kecepatan aman dan cadangan', text: 'Bandingkan mm3/s saat ini dengan kecepatan maksimum aman dan cadangan laju leleh yang tersisa.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input batas laju aliran volumetrik',
    resultsAriaLabel: 'Hasil batas laju aliran volumetrik',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'AS',
    hotendLabel: 'Arsitektur hotend',
    lineWidthLabel: 'Lebar garis',
    layerHeightLabel: 'Tinggi lapisan',
    speedLabel: 'Kecepatan cetak',
    flowLabel: 'Aliran volumetrik',
    loadLabel: 'Beban termal',
    maxSpeedLabel: 'Kecepatan maks aman',
    reserveLabel: 'Cadangan leleh',
    stateLabel: 'Status sistem',
    idealState: 'ALIRAN IDEAL',
    limitState: 'BATAS VISKOSITAS',
    criticalState: 'ALIRAN KRITIS',
    idealHint: 'Hotend memiliki cadangan termal yang cukup untuk tekanan lelehan stabil dan ekstrusi yang konsisten.',
    limitHint: 'Profil mendekati batas viskositas. Perubahan kecil pada material atau suhu dapat menyebabkan under-extrusion.',
    criticalHint: 'Aliran yang diminta melebihi jendela leleh yang andal. Kurangi kecepatan, lebar garis, atau tinggi lapisan.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Bagaimana Kalkulator Laju Aliran Volumetrik Maksimum Bekerja', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator laju aliran volumetrik maksimum</strong> menjawab pertanyaan yang lebih berguna daripada kalkulator kecepatan sederhana: dapatkah hotend melelehkan jumlah plastik yang diminta oleh slicer? Sistem gerakan dapat mengiklankan kecepatan pergerakan tinggi, tetapi ekstrusi dibatasi oleh transfer termal, panjang zona leleh, tekanan nozzle, viskositas filamen, stabilitas pemanas, dan cengkeraman ekstruder. Kalkulator memodelkan laju leleh yang diminta sebagai <code>Vf = lebar garis x tinggi lapisan x kecepatan</code>, dengan hasil ditampilkan dalam <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini membandingkan aliran sesaat tersebut dengan kapasitas hotend yang dipilih. Hotend standar V6 direpresentasikan dengan konstanta laju leleh yang lebih rendah, arsitektur zona leleh yang lebih panjang seperti Volcano menggunakan konstanta yang lebih tinggi, dan hotend high-flow modern menggunakan nilai yang lebih besar. Tujuannya bukan untuk menjanjikan batas laboratorium universal, tetapi untuk memberikan pemeriksaan teknik cepat sebelum profil slicer meminta lebih banyak plastik daripada yang dapat dicairkan oleh perangkat keras secara andal.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Satuan yang digunakan untuk kapasitas leleh hotend', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Batas zona nyaman untuk profil produksi yang stabil', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Batas viskositas di mana kegagalan menjadi sensitif', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Aliran kritis di mana risiko under-extrusion mendominasi', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan lebar garis slicer, bukan diameter nozzle',
      html: '<p>Persamaan aliran menggunakan lebar garis ekstrusi dari slicer. Nozzle 0,4 mm sering mencetak garis 0,42-0,48 mm. Jika kalkulator menggunakan diameter nozzle alih-alih lebar garis, ia dapat meremehkan permintaan aliran dan menyembunyikan profil yang sudah mendekati batas hotend.</p>',
    },
    { type: 'title', text: 'Mengapa Kecepatan dan Laju Leleh Bukan Batas yang Sama', level: 2 },
    {
      type: 'paragraph',
      html: 'Printer dapat bergerak pada 300 mm/s dan tetap gagal pada 90 mm/s jika volume ekstrusi terlalu tinggi. Kecepatan baru berarti setelah lebar garis dan tinggi lapisan disertakan. Mencetak garis 0,45 mm pada lapisan 0,20 mm dan 150 mm/s membutuhkan 13,5 mm3/s. Mencetak garis 0,60 mm pada lapisan 0,30 mm dengan kecepatan yang sama membutuhkan 27 mm3/s. Kecepatan gerakan identik, tetapi profil kedua meminta hotend untuk melelehkan plastik dua kali lebih banyak per detik.',
    },
    {
      type: 'table',
      headers: ['Lebar garis', 'Tinggi lapisan', 'Kecepatan', 'Aliran diminta'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Under extrusion sering terlihat seperti masalah tuning',
      badge: 'Plafon aliran',
      html: '<p>Ketika profil melebihi kapasitas leleh, pengguna sering mengejar retraksi, pressure advance, suhu, atau langkah ekstruder. Pengaturan itu penting, tetapi tidak dapat membuat zona leleh pendek memproses plastik tak terbatas. Pertama-tama verifikasi bahwa mm3/s yang diminta berada dalam jendela kapasitas hotend.</p>',
    },
    {
      type: 'summary',
      title: 'Aturan persamaan aliran',
      items: [
        'Lebar garis, tinggi lapisan, dan kecepatan saling berlipat ganda secara langsung.',
        'Peningkatan kecil pada dua pengaturan geometri dapat membebani hotend bahkan ketika kecepatan terlihat sederhana.',
        'Kecepatan aman maksimum adalah batas hotend dibagi lebar garis dan tinggi lapisan.',
      ],
    },
    { type: 'title', text: 'Tolok Ukur Kinerja Termal berdasarkan Arsitektur Hotend', level: 2 },
    {
      type: 'paragraph',
      html: 'Arsitektur hotend mengontrol berapa lama filamen tetap berada di zona yang dipanaskan dan seberapa efisien panas berpindah ke inti filamen. Zona leleh V6 yang ringkas responsif dan ringan, tetapi plafon aliran praktisnya lebih rendah daripada zona leleh Volcano yang panjang. Desain keramik high-flow dan ultra-high-flow meningkatkan kontak pemanas, panjang jalur leleh, atau luas permukaan internal untuk mempertahankan tingkat ekstrusi yang lebih tinggi.',
    },
    {
      type: 'table',
      headers: ['Arsitektur hotend', 'Kapasitas perencanaan', 'Kasus penggunaan terbaik', 'Perhatian teknik'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Profil kualitas, kecepatan sedang PLA/PETG, printer desktop standar', 'Dapat mencapai batas tekanan dengan cepat dengan garis lebar atau lapisan tinggi.'],
        ['Revo High Flow', '18 mm3/s', 'Peningkatan high-flow dengan faktor bentuk ringkas', 'Masih memerlukan validasi suhu dan material.'],
        ['Volcano', '25 mm3/s', 'Nozel besar, lapisan tebal, bagian fungsional, profil draf cepat', 'Zona leleh panjang dapat lebih banyak menetes dan memerlukan penyesuaian retraksi.'],
        ['Bambu HF', '32 mm3/s', 'Profil printer tertutup kecepatan tinggi dan produksi PLA cepat', 'Nilai profil sangat tergantung pada pendinginan dan perilaku filamen.'],
        ['Rapido UHF / serupa', '45 mm3/s', 'Aliran ekstrem, lebar ekstrusi besar, hasil produksi', 'Torsi ekstruder, daya pemanas, dan geometri nozzle menjadi faktor pembatas.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Zona leleh pendek', description: 'Ringkas, responsif, kepala alat lebih ringan, penyimpanan termal lebih rendah.', icon: 'mdi:thermometer-low', points: ['Kontrol detail baik', 'Plafon aliran lebih rendah', 'Inersia termal lebih sedikit'] },
        { title: 'Zona leleh panjang', description: 'Lebih banyak waktu kontak bagi filamen untuk menyerap panas sebelum mencapai nozzle.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Mm3/s lebih tinggi', 'Output lapisan tebal lebih baik', 'Manajemen tetesan lebih banyak'] },
        { title: 'Inti high flow', description: 'Geometri modern meningkatkan area kontak atau kopling pemanas tanpa hanya memperpanjang panjang.', icon: 'mdi:heat-wave', points: ['Respons cepat', 'Throughput tinggi', 'Membutuhkan profil yang disetel'] },
      ],
    },
    {
      type: 'message',
      title: 'Nilai tolok ukur adalah konstanta perencanaan',
      ariaLabel: 'Catatan tolok ukur hotend',
      html: '<p>Batas prasetel sengaja merupakan konstanta perencanaan yang konservatif. Kapasitas leleh nyata bervariasi dengan formulasi filamen, diameter nozzle, kartrid pemanas, penempatan termistor, suhu ekstrusi, dan jumlah penurunan kualitas yang dapat ditoleransi oleh bagian.</p>',
    },
    { type: 'title', text: 'Membaca Zona Indikator Beban', level: 2 },
    {
      type: 'paragraph',
      html: 'Indikator beban menerjemahkan perhitungan aliran ke dalam status operasi visual. Di bawah 70% beban, hotend memiliki ruang untuk variasi filamen normal, osilasi suhu kecil, dan perubahan kecepatan di seluruh jalur alat. Antara 70% dan 90%, ekstrusi dapat tetap berhasil, tetapi profil menjadi sensitif. Di atas 90%, cetakan cukup dekat dengan plafon leleh sehingga variasi batch material, kelembaban, atau nozzle yang sedikit lebih dingin dapat mendorongnya ke dalam under-extrusion yang terlihat.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: cadangan produksi yang baik untuk bagian yang dapat diulang dan variasi material normal.',
        '70-90%: berguna untuk pengujian kecepatan, tetapi validasi dinding, permukaan atas, dan ikatan infill.',
        '90%+: perlakukan sebagai zona kritis kecuali filamen dan hotend telah diukur dengan menara aliran.',
        'Di atas 100%: kurangi kecepatan, lebar garis, atau tinggi lapisan sebelum mengejar pengaturan slicer yang tidak terkait.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Mengapa indikator bisa lebih baik daripada kotak peringatan',
      html: '<p>Kotak peringatan memberi tahu pengguna apa yang salah setelah melewati ambang batas. Indikator beban menunjukkan pendekatan ke ambang batas itu. Ini memudahkan untuk berhenti pada margin operasional yang direncanakan daripada hanya bereaksi ketika profil sudah menjadi tidak stabil.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Aliran kritis bukan hanya masalah kualitas permukaan',
      badge: 'Kekuatan mekanik',
      html: '<p>Filamen yang kurang meleleh dapat merekat dengan buruk di antara jalur dan lapisan. Bahkan ketika dinding luar terlihat dapat diterima, ikatan infill, adhesi perimeter, dan ketahanan benturan dapat menderita jika laju aliran melebihi kapasitas leleh.</p>',
    },
    { type: 'title', text: 'Cara Menggunakan Kalkulator dengan Profil Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Mulailah dengan nilai slicer yang sebenarnya untuk lebar garis, tinggi lapisan, dan kecepatan dinding luar atau kecepatan cetak umum. Pilih arsitektur hotend terdekat. Gerakkan penggeser kecepatan hingga indikator mencapai beban yang Anda inginkan. Kecepatan aman maksimum yang ditampilkan adalah kecepatan yang akan tepat mencapai batas hotend untuk geometri garis saat ini. Untuk pekerjaan produksi, gunakan nilai yang lebih rendah dari maksimum matematis.',
    },
    {
      type: 'paragraph',
      html: 'Jika indikator memasuki zona kritis, ada tiga cara langsung untuk mengurangi aliran: menurunkan kecepatan, mengurangi lebar garis, atau mengurangi tinggi lapisan. Suhu dapat meningkatkan aliran praktis untuk beberapa material, tetapi juga mengubah kilap, jembatan, perilaku overhang, stringing, dan akurasi dimensi. Kalkulator sengaja berfokus pada geometri dan kapasitas perangkat keras karena itu adalah tuas yang paling transparan.',
    },
    {
      type: 'proscons',
      title: 'Cara menurunkan permintaan aliran',
      items: [
        { pro: 'Menurunkan kecepatan mempertahankan geometri garis dan tujuan dimensi.', con: 'Ini meningkatkan waktu cetak dan dapat mengurangi hasil produksi.' },
        { pro: 'Menurunkan tinggi lapisan meningkatkan permukaan akhir dan mengurangi mm3/s.', con: 'Ini meningkatkan jumlah lapisan dan dapat memperpanjang pekerjaan meskipun aliran lebih rendah.' },
        { pro: 'Menurunkan lebar garis dapat mengurangi tekanan dan meningkatkan detail halus.', con: 'Ini dapat melemahkan dinding jarang dan meningkatkan jumlah jalur alat.' },
      ],
    },
    {
      type: 'tip',
      title: 'Validasi dengan menara aliran',
      html: '<p>Gunakan kalkulator untuk memilih rentang kecepatan yang realistis, lalu cetak menara uji aliran untuk filamen dan suhu spesifik. Batas produksi terbaik adalah aliran tertinggi yang masih memberikan dinding stabil, kilap konsisten, ikatan lapisan yang baik, dan tidak ada langkah ekstruder yang terlewat.</p>',
    },
    { type: 'title', text: 'Gejala Melebihi Kapasitas Laju Leleh Hotend', level: 2 },
    {
      type: 'paragraph',
      html: 'Profil di luar batas leleh hotend dapat gagal secara bertahap. Pertama, permukaan atas mungkin menunjukkan jejak tipis atau celah kecil. Kemudian garis infill menjadi tidak konsisten, perimeter kehilangan kilap, dan sudut menunjukkan pemulihan tekanan yang lemah. Dalam kasus yang lebih parah, ekstruder berbunyi klik, menggiling filamen, melewatkan langkah, atau meninggalkan bagian rapuh karena filamen yang masuk ke nozzle tidak sepenuhnya melunak.',
    },
    {
      type: 'table',
      headers: ['Gejala yang diamati', 'Kemungkinan penyebab terkait aliran', 'Respons kalkulator'],
      rows: [
        ['Dinding tipis pada kecepatan tinggi', 'Mm3/s yang diminta melebihi kapasitas leleh pada gerakan lurus panjang', 'Turunkan kecepatan hingga beban kembali di bawah 90%.'],
        ['Ekstrusi matte kasar', 'Filamen tidak sepenuhnya dipanaskan melalui inti', 'Kurangi aliran atau tingkatkan suhu dengan hati-hati untuk material itu.'],
        ['Ekstruder berbunyi klik', 'Tekanan balik naik melebihi cengkeraman ekstruder atau torsi motor', 'Kurangi aliran segera dan periksa tegangan penggerak filamen.'],
        ['Ikatan infill lemah', 'Material keluar terlalu dingin atau meleleh tidak konsisten', 'Gunakan lebih banyak cadangan termal untuk bagian struktural.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Aliran volumetrik', definition: 'Volume plastik yang diminta dari hotend per detik, dinyatakan dalam mm3/s.' },
        { term: 'Kapasitas laju leleh', definition: 'Jumlah praktis filamen yang dapat dilelehkan hotend secara konsisten sambil mempertahankan kualitas cetak.' },
        { term: 'Lebar garis', definition: 'Lebar jalur ekstrusi dalam slicer, biasanya sedikit lebih besar dari diameter nozzle.' },
        { term: 'Tinggi lapisan', definition: 'Ketebalan vertikal setiap lapisan yang dicetak; pengali langsung dalam permintaan aliran.' },
        { term: 'Cadangan aliran', definition: 'Selisih antara kapasitas hotend dan aliran yang diminta saat ini.' },
      ],
    },
    {
      type: 'summary',
      title: 'Alur kerja aliran praktis',
      items: [
        'Hitung aliran yang diminta sebelum meningkatkan kecepatan.',
        'Jaga profil produksi di bawah zona kritis kecuali divalidasi oleh pengujian.',
        'Gunakan prasetel hotend sebagai konstanta perencanaan, lalu sempurnakan dengan kalibrasi khusus material.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
