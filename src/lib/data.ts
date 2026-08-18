import type {
  Article,
  ClinicLocation,
  Doctor,
  Product,
  Promo,
  Service,
  StaffMember,
  Testimonial,
} from "@/types";

export const CLINIC_INFO = {
  name: "Niggy Salon",
  phoneDisplay: "0851-7410-3353",
  phoneRaw: "6285174103353",
  email: "yossykusuma01@gmail.com",
  address: "PERUM Taman Bojong Lestari",
  hoursWeekdays: "Senin – Jumat",
  hoursTime: "08.00 – 21.00 WIB",
};

export const services: Service[] = [
  {
    slug: "deep-pore-cleansing",
    name: "Deep Pore Cleansing",
    category: "kulit",
    icon: "flaticon-facial-treatment",
    brief:
      "Facial pembersihan pori-pori dengan ekstraksi lembut untuk kulit bersih, halus, dan bebas komedo.",
    description: [
      "Deep Pore Cleansing adalah perawatan pembersihan wajah yang ditujukan untuk mengangkat kotoran, minyak berlebih, dan komedo di pori-pori.",
      "Didahului dengan konsultasi singkat untuk mengetahui jenis dan kondisi kulitmu, lalu dilanjutkan dengan pembersihan, penguapan, ekstraksi lembut, dan masker penenang.",
    ],
    benefits: ["Mengangkat komedo & kotoran", "Mengecilkan tampilan pori-pori", "Kulit terasa lebih halus"],
    price: "Rp 150.000",
    duration: "60 menit",
    suitableFor: ["Kulit berminyak", "Komedo membandel", "Perawatan rutin bulanan"],
    image: "hero_bg_3.jpg",
  },
  {
    slug: "acne-care-treatment",
    name: "Acne Care Treatment",
    category: "kulit",
    icon: "flaticon-facial-treatment",
    brief:
      "Program perawatan khusus kulit berjerawat, dari pembersihan hingga penenangan agar jerawat cepat reda.",
    description: [
      "Acne Care Treatment dirancang untuk kulit yang rentan berjerawat. Perawatan menggunakan produk yang dipilih sesuai tingkat keparahan kulit.",
      "Rangkaian mencakup pembersihan mendalam, pengaplikasian treatment anti-jerawat, dan masker penenang untuk mengurangi kemerahan.",
    ],
    benefits: ["Mengurangi jerawat aktif", "Menghaluskan tekstur kulit", "Menenangkan kemerahan"],
    price: "Rp 200.000",
    duration: "75 menit",
    suitableFor: ["Kulit berjerawat aktif", "Muncul jerawat hormonal", "Face-toning untuk pemulihan"],
    image: "img_1.jpg",
  },
  {
    slug: "brightening-facial",
    name: "Brightening Facial",
    category: "kulit",
    icon: "flaticon-cosmetics",
    brief:
      "Facial pencerah untuk kulit kusam, membantu tampilan kulit lebih cerah dan merata secara bertahap.",
    description: [
      "Brightening Facial membantu mengatasi kulit kusam dan warna kulit tidak merata dengan formula pencerah yang lembut.",
      "Perawatan dikombinasikan dengan pijatan wajah untuk melancarkan sirkulasi dan mencerahkan tampilan kulit.",
    ],
    benefits: ["Menutrisi kulit kusam", "Menyamarkan noda hitam", "Kulit tampak lebih glowing"],
    price: "Rp 250.000",
    duration: "75 menit",
    suitableFor: ["Kulit kusam", "Bekas jerawat / noda hitam", "Persiapan acara"],
    image: "img_2.jpg",
  },
  {
    slug: "hair-cut-styling",
    name: "Hair Cut & Styling",
    category: "rambut",
    icon: "flaticon-curl",
    brief:
      "Potong rambut sesuai bentuk wajah plus styling hasil akhir yang rapi dan tahan lama.",
    description: [
      "Konsultasikan gaya rambut yang kamu inginkan dengan stylist kami. Kami menyesuaikan potongan dengan bentuk wajah dan perawatan yang kamu jalani.",
      "Setelah dipotong, rambut di-styling sesuai kebutuhan hari itu — dari ikal lembut hingga straight elegan.",
    ],
    benefits: ["Potongan sesuai bentuk wajah", "Styling tahan lama", "Tips perawatan rambut"],
    price: "Rp 100.000",
    duration: "45 menit",
    suitableFor: ["Perubahan gaya rambut", "Rambut panjang & pendek", "Persiapan acara"],
    image: "hero_bg_1.jpg",
  },
  {
    slug: "hair-nutrition-treatment",
    name: "Hair Nutrition Treatment",
    category: "rambut",
    icon: "flaticon-curl",
    brief:
      "Perawatan nutrisi rambut untuk mengatasi rambut kering, patah, dan kusut dengan serum penyehat.",
    description: [
      "Perawatan ini mengembalikan kelembapan dan kekuatan rambut yang sering terkena styling, cat, atau paparan matahari.",
      "Produk kami dipilih sesuai kondisi rambut, lalu diaplikasikan dengan pijatan kulit kepala yang menenangkan.",
    ],
    benefits: ["Mengurangi rambut patah", "Rambut lebih lembut & berkilau", "Kulit kepala lebih sehat"],
    price: "Rp 180.000",
    duration: "50 menit",
    suitableFor: ["Rambut kering & rusak", "Setelah pewarnaan", "Perawatan rutin"],
    image: "img_3.jpg",
  },
  {
    slug: "makeup-pro",
    name: "Makeup Pro",
    category: "makeup",
    icon: "flaticon-cosmetics",
    brief:
      "Tata rias profesional untuk acara, panggung, atau wisuda dengan hasil tahan lama dan tampil natural.",
    description: [
      "Makeup Pro menghadirkan tata rias sesuai occasion: wisuda, pernikahan, acara formal, atau tampilan daily namun refined.",
      "Kami mendiskusikan look yang diinginkan, menggunakan produk yang aman untuk kulit, dan menyesuaikan dengan tone kulitmu.",
    ],
    benefits: ["Look sesuai acara", "Tahan lama", "Konsultasi gaya riasan"],
    price: "Rp 350.000",
    duration: "90 menit",
    suitableFor: ["Wisuda & pesta", "Pernikahan", "Shooting & panggung"],
    image: "img_4.jpg",
  },
  {
    slug: "slimming-massage",
    name: "Slimming Massage",
    category: "body",
    icon: "flaticon-flower",
    brief:
      "Pijatan dengan teknik khusus membantu relaksasi serta mendukung program penampilan tubuh ideal.",
    description: [
      "Slimming Massage menggabungkan teknik pijat drainase dan pijatan relaksasi untuk membantu tubuh terasa lebih ringan dan sehat.",
      "Sesi diawali dengan pembacaan kondisi tubuh dan diakhiri dengan saran perawatan lanjutan di rumah.",
    ],
    benefits: ["Relaksasi otot", "Membantu sirkulasi", "Tubuh terasa lebih ringan"],
    price: "Rp 220.000",
    duration: "60 menit",
    suitableFor: ["Pasca aktivitas berat", "Perawatan rutin tubuh", "Memulai gaya hidup sehat"],
    image: "img_5.jpg",
  },
  {
    slug: "body-massage-relaxation",
    name: "Body Massage Relaksasi",
    category: "body",
    icon: "flaticon-flower",
    brief:
      "Pijat tubuh menyeluruh untuk melepas lelah, menenangkan pikiran, dan memulihkan tenaga.",
    description: [
      "Perawatan pijat seluruh tubuh dengan penekanan yang bisa disesuaikan keinginanmu — dari lembut hingga deep tissue.",
      "Aroma terapi yang menenangkan dipilih untuk melengkapi sesi relaksasimu selama 60 menit penuh.",
    ],
    benefits: ["Melepas ketegangan otot", "Menenangkan pikiran", "Meningkatkan kualitas tidur"],
    price: "Rp 200.000",
    duration: "60 menit",
    suitableFor: ["Pekerja dengan tekanan tinggi", "Nyeri punggung/leher", "Routine self-care"],
    image: "work-1.jpg",
  },
];

export const staffMembers: StaffMember[] = [
  {
    name: "Yoshi",
    position: "Makeup Stylist & Founder",
    photo: "profil.jpg",
    bio: "Pendiri Niggy Salon dengan pengalaman lebih dari 5 tahun dalam tata rias dan perawatan kecantikan.",
  },
  {
    name: "Sinta",
    position: "Beauty Therapist",
    photo: "person_1.jpg",
    bio: "Berpengalaman dalam facial treatment dan perawatan kulit berjerawat untuk semua jenis kulit.",
  },
  {
    name: "Laras",
    position: "Hair Specialist",
    photo: "person_2.jpg",
    bio: "Ahli potong dan penataan rambut, selalu mengikuti tren terkini agar tampilanmu up-to-date.",
  },
];

export const doctors: Doctor[] = [
  {
    slug: "dr-yossy-kusuma",
    name: "dr. Yossy Kusuma, Sp.DVE",
    title: "Dokter Spesialis Kulit & Kelamin",
    photo: "profil.jpg",
    category: "kulit",
    specialties: [
      "Kulit Berjerawat",
      "Bekas Jerawat / Scar",
      "Warna Kulit Tidak Merata",
      "Penuaan Kulit",
    ],
    bio: [
      "Berpengalaman lebih dari 8 tahun menangani berbagai keluhan kulit, mulai dari jerawat aktif, bekas jerawat, hingga perawatan anti-aging.",
      "Pendekatan perawatannya mengutamakan konsultasi menyeluruh agar setiap rekomendasi sesuai dengan kondisi dan kebutuhan kulit.",
    ],
    schedule: "Senin – Jumat, 08.00 – 16.00 WIB",
  },
  {
    slug: "dr-intan-maharani",
    name: "dr. Intan Maharani, Sp.DVE",
    title: "Dokter Spesialis Kulit & Estetika",
    photo: "person_1.jpg",
    category: "kulit",
    specialties: [
      "Penuaan Kulit",
      "Kulit Kusam",
      "Flek / Hiperpigmentasi",
      "Perawatan Estetika",
    ],
    bio: [
      "Berpengalaman dalam perawatan estetika wajah dan anti-aging, termasuk treatment pencerah dan penyamaran flek.",
      "Selalu mengedepankan hasil yang natural dan nyaman bagi setiap pasien.",
    ],
    schedule: "Senin, Rabu, Jumat, 13.00 – 21.00 WIB",
  },
  {
    slug: "dr-rizky-andini",
    name: "dr. Rizky Andini, Sp.DVE",
    title: "Dokter Spesialis Kulit & Hair Treatment",
    photo: "person_2.jpg",
    category: "rambut",
    specialties: [
      "Rambut Rontok",
      "Kulit Kepala Sensitif",
      "Perawatan Rambut",
      "Skalp Terapi",
    ],
    bio: [
      "Fokus menangani masalah rambut dan kulit kepala, dari rambut rontok hingga gangguan percabangan rambut.",
      "Menawarkan program perawatan bertahap yang bisa dikombinasikan dengan perawatan salon.",
    ],
    schedule: "Selasa – Kamis, 08.00 – 15.00 WIB",
  },
  {
    slug: "dr-sekar-ayu",
    name: "dr. Sekar Ayu, Sp.DVE",
    title: "Dokter Spesialis Kulit & Makeup Medic",
    photo: "person_6.jpg",
    category: "makeup",
    specialties: [
      "Makeup Medic / Riasan untuk Kulit Berbias",
      "Perawatan Wajah Khusus",
      "Konsultasi Kulit",
      "Riasan untuk Acara",
    ],
    bio: [
      "Ahli dalam tata rias yang aman untuk kulit bermasalah sekaligus konsultan kecantikan wajah.",
      "Menggabungkan keahlian dermatologi dengan teknik rias agar tampil menawan tanpa merusak kulit.",
    ],
    schedule: "Jumat & Sabtu, 10.00 – 18.00 WIB",
  },
];

export const articles: Article[] = [
  {
    slug: "tips-merawat-kulit-berjerawat",
    title: "Tips Merawat Kulit Berjerawat dengan Benar",
    category: "Kecantikan",
    date: "12 Januari 2026",
    excerpt:
      "Jangan memencet jerawat! Ini langkah sederhana merawat kulit berjerawat agar cepat reda tanpa meninggalkan bekas.",
  },
  {
    slug: "kenapa-facial-rutin-penting",
    title: "Kenapa Facial Rutin Penting untuk Kulit Sehat?",
    category: "Kulit",
    date: "28 Januari 2026",
    excerpt:
      "Kulit berhadapan dengan debu dan polusi setiap hari. Facial rutin membantu menjaga kebersihan dan kesehatan kulit.",
  },
  {
    slug: "brightening-untuk-kulit-kusam",
    title: "Brightening: Solusi Kulit Kusam Sebelum Acara Penting",
    category: "Kulit",
    date: "03 Februari 2026",
    excerpt:
      "Ingin kulit glowing di hari istimewa? Mulai perawatan brightening minimal 2–4 minggu sebelum acara.",
  },
];

export const promos: Promo[] = [
  {
    title: "Student Discount",
    subtitle: "Hemat hingga 25%",
    badge: "Hemat 25%",
    description:
      "Tunjukkan kartu pelajar atau mahasiswa saat datang dan nikmati potongan harga untuk semua layanan dasar.",
    image: "hero_bg_2.jpg",
  },
  {
    title: "Paket Wajah Cerah",
    subtitle: "Deep Pore + Brightening",
    badge: "Paket",
    description:
      "Gabungan dua facial andalan untuk hasil maksimal. Harga lebih hemat dibanding booking terpisah.",
    image: "img_2.jpg",
  },
  {
    title: "Bundle Rambut",
    subtitle: "Potong + Nutrition",
    badge: "Bundle",
    description:
      "Potong rambut sekaligus perawatan nutrisi dalam satu kunjungan, cocok untuk menyegarkan tampilan.",
    image: "img_3.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "gentle-facial-wash",
    name: "Gentle Facial Wash",
    category: "pembersih",
    description:
      "Pembersih wajah bertekstur lembut untuk membantu mengangkat kotoran dan minyak tanpa membuat kulit terasa tertarik.",
    highlights: ["Untuk pemakaian pagi dan malam", "Cocok untuk perawatan harian"],
    size: "100 ml",
    image: "img_1.jpg",
    featured: true,
  },
  {
    slug: "daily-shield-sunscreen-spf-50",
    name: "Daily Shield Sunscreen SPF 50",
    category: "pelindung-matahari",
    description:
      "Sunscreen harian bertekstur ringan untuk melengkapi rutinitas pagi sebelum beraktivitas di luar ruangan.",
    highlights: ["SPF 50", "Nyaman digunakan sebelum makeup"],
    size: "50 ml",
    image: "hero_bg_2.jpg",
    featured: true,
  },
  {
    slug: "hydra-barrier-moisturizer",
    name: "Hydra Barrier Moisturizer",
    category: "pelembap",
    description:
      "Pelembap wajah untuk membantu menjaga kenyamanan kulit dan mendukung rutinitas perawatan yang konsisten.",
    highlights: ["Tekstur ringan", "Untuk pagi atau malam hari"],
    size: "50 g",
    image: "img_2.jpg",
    featured: true,
  },
  {
    slug: "brightening-serum",
    name: "Brightening Serum",
    category: "serum",
    description:
      "Serum wajah yang dapat dimasukkan ke dalam rutinitas untuk kulit yang tampak lebih cerah dan terawat.",
    highlights: ["Gunakan setelah cleansing", "Dapat dilanjutkan dengan pelembap"],
    size: "30 ml",
    image: "hero_bg_3.jpg",
  },
  {
    slug: "calming-acne-serum",
    name: "Calming Acne Serum",
    category: "serum",
    description:
      "Serum pendamping untuk rutinitas kulit yang rentan berjerawat, dengan fokus pada sensasi perawatan yang nyaman.",
    highlights: ["Untuk rutinitas kulit berjerawat", "Rekomendasi pemakaian tersedia di salon"],
    size: "30 ml",
    image: "img_5.jpg",
  },
  {
    slug: "silky-body-lotion",
    name: "Silky Body Lotion",
    category: "perawatan-tubuh",
    description:
      "Lotion tubuh untuk penggunaan harian setelah mandi agar kulit terasa lebih lembut dan terawat.",
    highlights: ["Aroma lembut", "Cocok dipakai setelah mandi"],
    size: "250 ml",
    image: "work-1.jpg",
  },
  {
    slug: "hair-repair-serum",
    name: "Hair Repair Serum",
    category: "perawatan-rambut",
    description:
      "Serum rambut untuk membantu menyempurnakan tampilan rambut setelah styling dan perawatan di salon.",
    highlights: ["Untuk batang hingga ujung rambut", "Pemakaian praktis setelah styling"],
    size: "60 ml",
    image: "img_3.jpg",
  },
  {
    slug: "soft-skin-hand-body-lotion",
    name: "Soft Skin Hand & Body Lotion",
    category: "perawatan-tubuh",
    description:
      "Lotion serbaguna untuk menjaga kulit tangan dan tubuh tetap terasa nyaman sepanjang hari.",
    highlights: ["Praktis dibawa bepergian", "Untuk tangan dan tubuh"],
    size: "100 ml",
    image: "img_4.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Anin",
    service: "Acne Care Treatment",
    quote:
      "Jerawatku perlahan membaik setelah rutin ke Niggy. Terapisnya sabar menjelaskan dan hasilnya terasa nyata!",
  },
  {
    name: "Dewi",
    service: "Brightening Facial",
    quote:
      "Sudah promo cari facial yang suit dengan budget kerja. Di sini konsultasinya detail, hasil muka jadi lebih cerah.",
  },
  {
    name: "Bima",
    service: "Hair Cut & Styling",
    quote:
      "Potongannya rapi dan styling-nya awet seharian. Tempatnya nyaman, jadinya sering balik lagi.",
  },
];

export const clinicLocations: ClinicLocation[] = [
  {
    name: "Niggy Salon — Pusat",
    address: CLINIC_INFO.address,
    phone: CLINIC_INFO.phoneDisplay,
    email: CLINIC_INFO.email,
    hours: `${CLINIC_INFO.hoursWeekdays}, ${CLINIC_INFO.hoursTime}`,
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.77541751398203!2d106.81417411501651!3d-6.470058301521869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1702129353066!5m2!1sid!2sid",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getDoctorBySlug = (slug: string): Doctor | undefined =>
  doctors.find((d) => d.slug === slug);

export const solutionCards = [
  {
    title: "Masalah Kulit",
    description: "Kulit berminyak, kusam, hingga berjerawat.",
    category: "kulit" as const,
    icon: "flaticon-facial-treatment",
  },
  {
    title: "Masalah Rambut",
    description: "Rambut rontok, kering, dan sulit diatur.",
    category: "rambut" as const,
    icon: "flaticon-curl",
  },
  {
    title: "Kebutuhan Makeup",
    description: "Riasan untuk acara dan keseharian.",
    category: "makeup" as const,
    icon: "flaticon-cosmetics",
  },
  {
    title: "Perawatan Tubuh",
    description: "Relaksasi dan perawatan body spa.",
    category: "body" as const,
    icon: "flaticon-flower",
  },
];
