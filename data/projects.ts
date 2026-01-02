type ProjectSection = {
  title: string;
  description: string;
  photos?: string[];
  pdf?: string;
  objects3d?: string[]; // 👈 MULTIPLE .obj

};

export type Project = {
  id: number;
  title: string;
  type: string;
  location: string;
  preview: string;
  previewPdf: string;

  files: {
    image: string;
    pdf?: string;
  }[];

  latitude: number;
    longitude: number;
  description: string;
  memberIds: number[];

  surveyDate?: string;
  equipment?: string[];

  // 👇 TAMBAHKAN INI
  sections?: ProjectSection[];
};  
export const projects: Project[] = [
  {
    id: 1, title: "Digitasi Tutupan Lahan dan Morfologi Pulau Galang - Batam", type: "Digitasi Tutupan Lahan dan Morfologi", location: "Batam, Kepulauan Riau", latitude: 0.7607059609275817, longitude: 104.24241590229668, description: "Proyek pemetaan ini dilaksanakan melalui akuisisi data seluas ±1322 hektare di Pulau Galang menggunakan UAV DJI Matrice 350 RTK yang dilengkapi sensor LiDAR Zenmuse L2. Data orthophoto dan point cloud LiDAR yang dihasilkan kemudian diolah untuk mengidentifikasi tutupan lahan dan menganalisis morfologi permukaan secara akurat.Hasil pemetaan menunjukkan variasi tutupan lahan berupa kawasan pesisir, mangrove, hutan, semak belukar, area pertanian, serta lahan berbukit. Peta yang dihasilkan menjadi dasar penting dalam perencanaan tata guna lahan, pengelolaan sumber daya alam, dan konservasi lingkungan di Pulau Galang.", surveyDate: " September 2025", equipment: ["UAV DJI Matrice 350 RTK", "GPS Geodetic"], memberIds: [1, 2, 5],
    preview: '/hasil/GALANG/GALANG.png',
    previewPdf: '/hasil/GALANG/GALANG.pdf',
    files: [
      { image: '/hasil/GALANG/GALANG.png', pdf: '/hasil/GALANG/GALANG.pdf' }
    ]
  },
  {
    id: 2,
    title: "Inventarisasi SUTT Paiton - Probolinggo",
    type: "Inventarisasi Persil dan Objek Terdampak SUTT",
    location: "Piton - Probolinggo, Jawa Timur",
    latitude: -7.713556654192167,
    longitude: 113.50531738912647,
    description: "Proyek ini menyajikan hasil inventarisasi jaringan SUTT Paiton yang mencakup data persil dan objek terdampak dalam area buffer 10 meter dari rencana trase transmisi. Kajian difokuskan pada satu desa sebagai representasi dari total 18 desa yang dilalui trase, dengan tujuan menggambarkan kondisi eksisting penggunaan lahan, kepemilikan persil, serta sebaran objek yang berpotensi terdampak sebagai dasar pendukung perencanaan teknis dan evaluasi dampak pembangunan. Hasil inventarisasi ini memberikan gambaran komprehensif mengenai kondisi lapangan, yang meliputi identifikasi jenis penggunaan lahan, batas kepemilikan persil, serta penentuan lokasi objek terdampak seperti bangunan, fasilitas umum, dan infrastruktur lainnya. Data yang diperoleh menjadi acuan penting dalam proses perencanaan pembangunan SUTT, guna meminimalkan dampak sosial dan lingkungan serta memastikan keberlanjutan proyek.",
    surveyDate: "Sempeter 2025",
    equipment: ["DJI Mavic Enterprise 3", "Gps Geodetic"],
    memberIds: [1, 2, 3, 4, 5, 6, 7, 8],
    preview: '/hasil/PAITON/PAITON.png',
    previewPdf: '/hasil/PAITON/PAITON.pdf',
    files: [
      { image: '/hasil/PAITON/PAITON.png', pdf: '/hasil/PAITON/PAITON.pdf' },
    ]
  },
  {
    id: 3,
    title: "Akuisisi Foto Udara dan LiDAR Pelabuhan Belawan Medan",
    type: "Akuisisi Data Pemetaan Udara",
    location: "Belawan, Medan, Sumatera Utara",
    latitude: 3.7851165022849833,
    longitude: 98.69323387342692,
    description: "Proyek ini menyajikan foto udara resolusi tinggi dan informasi topografi kawasan Pelabuhan Belawan yang diperoleh melalui akuisisi data menggunakan wahana Unmanned Aerial Vehicle (UAV). Data foto udara yang dikumpulkan kemudian diolah menjadi orthophoto terkoreksi geometrik sehingga mampu merepresentasikan kondisi eksisting pelabuhan secara detail dan akurat sebagai dasar pendukung analisis serta perencanaan kawasan. Hasil pemetaan ini memberikan gambaran visual yang komprehensif mengenai infrastruktur pelabuhan, area dermaga, fasilitas pendukung, serta kondisi lingkungan sekitar. Orthophoto yang dihasilkan menjadi acuan penting dalam proses perencanaan pengembangan pelabuhan, pemantauan kondisi eksisting, serta evaluasi dampak lingkungan. Dengan data yang akurat dan terkini, pihak pengelola pelabuhan dapat mengambil keputusan yang tepat dalam mengelola dan mengembangkan kawasan Pelabuhan Belawan.",
    surveyDate: "Oktober 2025",
    equipment: ["UAV DJI Matrice 350 RTK", "Gps Geodetic"],
    memberIds: [2],
    preview: '/hasil/BELAWANMEDAN/BELAWANMEDAN.png',
    previewPdf: '/hasil/BELAWANMEDAN/BELAWANMEDAN.pdf',
    files: [
      { image: '/hasil/BELAWANMEDAN/BELAWANMEDAN.png', pdf: '/hasil/BELAWANMEDAN/BELAWANMEDAN.pdf' },
    ]
  },
  {
    id: 4,
    title: "Survei Topografi dan Geofisika Perimeter Selatan Bandara Soekarno-Hatta",
    type: "Survei Topografi dan Geofisika",
    location: "Tangerang, Banten",
    latitude: -6.124934653831341,
    longitude: 106.6547818821789,
    description: "Proyek ini menyajikan kondisi eksisting perimeter selatan Bandar Udara Soekarno-Hatta yang mencakup jaringan jalan, sungai, detail situasi area, serta informasi topografi berupa kontur dan elevasi yang diperoleh melalui pengukuran GPS geodetik. Data tersebut dipadukan dengan sebaran utilitas bawah tanah hasil interpretasi pengolahan Ground Penetrating Radar (GPR), dengan panjang area perimeter selatan bandara sepanjang ±7 km, sebagai dasar pendukung perencanaan, pengembangan, serta pengendalian risiko infrastruktur bandara. Hasil survei ini memberikan gambaran komprehensif mengenai kondisi fisik dan topografi area perimeter selatan bandara, termasuk identifikasi jaringan jalan, aliran sungai, serta utilitas bawah tanah yang ada. Data topografi yang dihasilkan dalam bentuk kontur dan elevasi menjadi acuan penting dalam proses perencanaan pengembangan infrastruktur bandara, pemantauan kondisi eksisting, serta evaluasi potensi risiko yang mungkin timbul. Dengan informasi yang akurat dan terkini, pihak pengelola bandara dapat mengambil keputusan yang tepat dalam mengelola dan mengembangkan fasilitas bandar udara guna memastikan keselamatan dan kenyamanan operasional.",
    surveyDate: "November 2025",
    equipment: ["GPS Geodetic", "Ground Penetrating Radar (GPR)"],
    memberIds: [1],
    preview: '/hasil/SOETA/SOETA.png',
    previewPdf: '/hasil/SOETA/SOETA.pdf',
    files: [
      { image: '/hasil/SOETA/SOETA.png', pdf: '/hasil/SOETA/SOETA.pdf' },
    ]
  },
  {
    id: 5,
    title: "Respon Darurat gunung Semeru Erupsi 2025",
    type: "Pemetaan Area Terdampak Bencana",
    location: "Gunung Semeru, Jawa Timur",
    latitude: -8.109636491906066,
    longitude: 112.92224915765713,
    description: "Proyek ini dilaksanakan melalui perjalanan langsung ke lokasi untuk memastikan seluruh data diperoleh dari kondisi aktual di lapangan, sehingga sebaran material vulkanik dan perubahan bentang alam pascaerupsi dapat terdokumentasi dengan baik. Hasil kegiatan ini memberikan gambaran visual kondisi pascaerupsi yang membantu memahami skala kejadian, arah dampak, serta kondisi lapangan sebagai dasar analisis dan penanganan bencana. Dokumentasi yang dihasilkan mencakup foto udara dan catatan lapangan yang merekam perubahan signifikan pada bentang alam, sebaran material vulkanik, serta dampak terhadap infrastruktur dan lingkungan sekitar. Data ini menjadi acuan penting dalam proses evaluasi dampak bencana, perencanaan rehabilitasi, serta mitigasi risiko bencana di masa mendatang. Dengan informasi yang akurat dan terkini, pihak terkait dapat mengambil langkah-langkah strategis dalam penanganan bencana dan pemulihan wilayah terdampak.",
    surveyDate: "November 2025",
    equipment: ["UAV DJI Matrice 350 RTK", "DJI Mavic Enterprise 3"],
    memberIds: [2],
    preview: '/hasil/SEMERU/SEMERU.png',
    previewPdf: '/hasil/SEMERU/SEMERU.pdf',
    files: [
      { image: '/hasil/SEMERU/SEMERU.png', pdf: '/hasil/SEMERU/semeru.pdf' },
    ]
  },
  {
    id: 6,
    title: "Digitasi Peta Dasar Kota Cimahi",
    type: "Digitasi Peta Dasar",
    location: "Kota Cimahi",
    latitude: -6.885427,
    longitude: 107.549123,
    description: "Proyek ini melibatkan proses digitalisasi peta dasar kota Cimahi, dengan tujuan untuk memperoleh data topografi dan informasi infrastruktur yang akurat dan terkini. Hasil dari kegiatan ini berupa peta digital yang dapat digunakan sebagai acuan dalam perencanaan pembangunan kota, pengelolaan sumber daya alam, serta pengendalian risiko bencana. Data yang dihasilkan mencakup informasi tentang jaringan jalan, bangunan, sungai, dan area hijau yang dapat dimanfaatkan dalam berbagai kegiatan perencanaan dan pengembangan kota.",
    surveyDate: "Oktober 2025",
    equipment: ["Orthophoto Kota Cimahi"],
    memberIds: [1, 2, 3, 5, 6, 8],
    preview: '/hasil/CIMAHI/CIMAHI.png',
    previewPdf: '/hasil/CIMAHI/CIMAHIALL.pdf',
    files: [
      { image: '/hasil/CIMAHI/CIMAHIBANGUNAN.jpg', pdf: '/hasil/CIMAHI/CIMAHIALL.pdf' },
      { image: '/hasil/CIMAHI/CIMAHIPERAIRAN.jpg', pdf: '/hasil/CIMAHI/CIMAHIALL.pdf' },
      { image: '/hasil/CIMAHI/CIMAHITRANSPORTASI.jpg', pdf: '/hasil/CIMAHI/CIMAHIALL.pdf' }
    ]
  },
  {
    id: 7,
    title: "Topinimi Kabupaten Subang",
    type: "Toponimi Kabupaten Subang",
    location: "Kabupaten Subang",
    latitude: -6.583333,
    longitude: 107.75,
    description: "Proyek ini dilakukan untuk mengumpulkan dan mendokumentasikan data topinimi Fasum dan Fasos di Kabupaten Subang, dengan tujuan untuk memperbarui dan memperkaya referensi data topografi serta informasi geografis yang relevan.",
    surveyDate: "November 2025",
    equipment: ["Aplikasi Sinar BIG"],
    memberIds: [1, 2, 3, 4, 5, 6, 7, 8],
    preview: '/hasil/SUBANG/SUBANG.png',
    previewPdf: '/hasil/SUBANG/SUBANG.pdf',
    files: [
      { image: '/hasil/SUBANG/SUBANG.png', pdf: '/hasil/SUBANG/SUBANG.pdf' }
    ]
  },
  {
    id: 8,
    title: "Georefensing bidang tanah di serang banten",
    type: "Georefensing bidang tanah",
    location: "serang banten",
    latitude: -6.110141099733836,
    longitude: 106.15635890621884,
    description: "Proyek ini menyajikan hasil georeferensi dokumen sertifikat tanah yang telah diintegrasikan ke dalam sistem koordinat geografis. Proses georeferensi dilakukan menggunakan titik kontrol yang disesuaikan dengan peta dasar sebagai acuan, sehingga posisi bidang tanah pada sertifikat dapat direpresentasikan secara spasial dan akurat, serta digunakan sebagai media visual untuk menunjukkan persebaran dan kesesuaian posisi bidang tanah terhadap peta dasar yang digunakan.",
    surveyDate: "Oktober 2025",
    equipment: ["Peta Bidang Tanah"],
    memberIds: [6],
    preview: '/hasil/BANTEN/BANTEN.png',
    previewPdf: '/hasil/BANTEN/BANTEN.pdf',
    files: [
      { image: '/hasil/BANTEN/banten.png', pdf: '/hasil/BANTEN/banten.pdf' }
    ]
  },
  {
  id: 9,
  title: "Penelitian Pulau Pari",
  type: "Penelitian Kelautan dan Pesisir",
  location: "Pulau Pari, Kepulauan Seribu",
  latitude: -5.858,
  longitude: 106.616,

  description: "Penelitian ini dilakukan pada kawasan terumbu karang dengan fokus pada pemodelan tiga dimensi menggunakan metode Gaussian Splatting berbasis Close-Range Photogrammetry (CRP). Proses penelitian meliputi tahapan rekonstruksi dan pemodelan 3D terumbu karang. Hasil pemodelan telah selesai dibuat dan digunakan untuk pemetaan struktur terumbu karang secara tiga dimensi.",

  memberIds: [3, 4, 6 , 7], // acak dulu

  preview: "/hasil/PULAUPARI/PARI.png",
  previewPdf: "/hasil/PULAUPARI/PARI.pdf",

  files: [
    { image: "/hasil/PULAUPARI/PARI.png", pdf: "/hasil/PULAUPARI/PARI.pdf" }
  ],

  sections: [
    {
      title: "Pemetaan Ekosistem Pesisir Dangkal",
      description:
        "Penelitian ini berfokus pada pengolahan ekosistem pesisir dangkal menggunakan data multispektral. Saat ini penelitian berada pada tahap pengolahan data, meliputi koreksi geometrik dan analisis spektral awal. Hasil akhir masih dalam proses validasi dan akan digunakan untuk pemetaan ekosistem pesisir dangkal.",
    },
    {
      title: "Prediksi Pasang Surut",
      description:
        "Penelitian ini bertujuan untuk menggambarkan pola fluktuasi muka air laut dalam satu siklus pasut, menentukan pasang tertinggi dan surut terendah, serta sebagai dasar koreksi elevasi pada kegiatan survei dan pemetaan perairan.",
      photos: [
        "/hasil/PULAUPARI/PASUT/pasut1.jpg",
        "/hasil/PULAUPARI/PASUT/pasut2.jpg",
        "/hasil/PULAUPARI/PASUT/pasut3.jpg"
      ]
    },
    {
      title: "Estimasi Blue Carbon",
      description:
        "Penelitian ini bertujuan untuk mengestimasi stok penyimpanan karbon biru pada biomassa melalui pendekatan antara data lapangan dan data penginderaan jauh berbasis UAV multispektral, dengan analisis kandungan klorofil menggunakan algoritma klorofil-a dan klorofil-b.",
    objects3d: [
    "/hasil/PULAUPARI/BLUECARBON/TERUMBUHIDUP.obj",
    "/hasil/PULAUPARI/BLUECARBON/TERUMBUMATI.obj"
  ]    }
  ]
}
];
