(function () {
  'use strict';

  // Inline SVG icons from /icons.svg (viewBox widths; all icons are 512 high)
  const ICON_W = {'arrow-down':384,'arrow-right':448,'arrow-up':384,'bars':448,'bell':448,'book-open':576,'border-all':448,'broom':576,'bullhorn':512,'calendar':448,'calendar-check':448,'calendar-days':448,'calendar-plus':448,'calendar-xmark':448,'chevron-down':512,'chevron-left':320,'chevron-right':320,'child-reaching':384,'church':640,'circle-check':512,'circle-exclamation':512,'circle-info':512,'clock':512,'copy':448,'diamond-turn-right':512,'envelope':512,'eye':576,'facebook-f':320,'globe':512,'hand-holding-heart':576,'hands-holding-circle':640,'hands-praying':640,'handshake-angle':640,'heart':512,'images':576,'instagram':448,'location-dot':384,'magnifying-glass':512,'map':576,'map-location-dot':576,'music':512,'newspaper':512,'paper-plane':512,'people-group':640,'people-roof':640,'phone':512,'route':512,'seedling':512,'share-nodes':448,'shield-heart':512,'sitemap':576,'tag':448,'users':640,'users-line':640,'whatsapp':448,'xmark':384,'youtube':576};
  function icon(name) {
    const w = ICON_W[name] || 512;
    return '<svg class="icon" viewBox="0 0 ' + w + ' 512" aria-hidden="true"><use href="icons.svg#' + name + '"></use></svg>';
  }

  // Local photos (e.g. '/images/natal-2026.jpg') are resized and converted to
  // AVIF/WebP by Netlify Image CDN; remote URLs (Unsplash) and uploaded photos (data:) are used as-is.
  function imageUrl(src, width) {
    if (!src || src.charAt(0) !== '/' || src.charAt(1) === '/') return src;
    return '/.netlify/images?url=' + encodeURIComponent(src) + '&w=' + width;
  }

  /* ==========================================================
     1. DATA KONTEN
     ========================================================== */

  const churchProfile = {
    name: 'Jemaat GPM Bumei Sifluru',
    synod: 'Gereja Protestan Maluku (GPM)',
    tagline: 'Bertumbuh dalam Iman, Bersatu dalam Kasih, Melayani dengan Sukacita.',

    quote: '“Sebab di mana dua atau tiga orang berkumpul dalam nama-Ku, di situ Aku ada di tengah-tengah mereka.” — Matius 18:20',
    image: '',

    intro:
      'Jemaat GPM Bumei Sifluru merupakan bagian dari Gereja Protestan Maluku yang ' +
      'berhimpun untuk beribadah, bersekutu, dan melayani. Jemaat ini berada dalam ' +
      'wilayah pelayanan Kecamatan Teon Nila Serua (TNS), Kabupaten Maluku Tengah, ' +
      'dan termasuk dalam Klasis GPM Masohi. Rumah ibadah jemaat dikenal sebagai ' +
      'Gedung Gereja Lahai Roi. Website ini disiapkan sebagai media informasi dan ' +
      'komunikasi jemaat agar kabar pelayanan dapat tersampaikan kepada seluruh ' +
      'anggota jemaat dan masyarakat.',

    building: 'Gedung Gereja Lahai Roi',
    classis: 'Klasis GPM Masohi',
    region: 'Kecamatan Teon Nila Serua (TNS), Kabupaten Maluku Tengah',
    serviceArea:
      'Wilayah pelayanan: Kecamatan Teon Nila Serua (TNS), Kabupaten Maluku Tengah, ' +
      'Klasis GPM Masohi. Batas wilayah pelayanan: sebelah selatan berbatasan dengan ' +
      'Jemaat GPM Waru, sedangkan sebelah barat berbatasan dengan Negeri Kokroman ' +
      '(Sektor Rehoboth).',
    boundaries:
      'Sebelah selatan berbatasan dengan Jemaat GPM Waru; sebelah barat berbatasan ' +
      'dengan Negeri Kokroman (Sektor Rehoboth).',

    history: [
      'Jemaat Bumei Sifluru berakar dari masyarakat asal kepulauan Teon Nila Serua (TNS) ' +
      'yang dievakuasi ke Pulau Seram pada akhir 1970-an akibat aktivitas vulkanik, ' +
      'dengan tetap membawa persekutuan gereja mereka.',
      'Dalam perkembangannya, Jemaat Wotay sempat memisahkan diri menjadi jemaat mandiri ' +
      'pada tahun 1945.'
    ],

    vision:
      'Menjadi jemaat yang berakar dalam Firman Tuhan, bertumbuh dalam kasih Kristus, ' +
      'dan menjadi saksi Injil di tengah masyarakat.',

    missions: [
      'Menyelenggarakan ibadah dan pelayanan yang berpusat pada Firman Tuhan dan doa.',
      'Membina seluruh anggota jemaat melalui persekutuan kategorial dan pelayanan keluarga.',
      'Mewujudkan kasih Kristus melalui pelayanan diakonia dan kepedulian sosial.',
      'Memberdayakan pemuda, remaja, dan anak-anak sebagai generasi pelayan gereja.'
    ],

    values: [
      { icon: 'hands-praying', title: 'Iman', text: 'Berakar pada Firman Tuhan dan hidup dalam doa.' },
      { icon: 'hand-holding-heart', title: 'Kasih', text: 'Mengasihi sesama sebagai wujud kasih Kristus.' },
      { icon: 'people-group', title: 'Persekutuan', text: 'Tumbuh bersama dalam kebersamaan jemaat.' },
      { icon: 'seedling', title: 'Pelayanan', text: 'Melayani dengan sukacita dan kerendahan hati.' },
      { icon: 'shield-heart', title: 'Kesetiaan', text: 'Setia dalam perkara kecil maupun besar.' },
      { icon: 'globe', title: 'Kesaksian', text: 'Menjadi saksi Kristus di tengah masyarakat.' }
    ]
  };

  // Teks & foto di bagian Beranda (hero)
  const siteHero = {
    eyebrow: 'Selamat Datang di Website Resmi',
    title: 'JEMAAT GPM\nBUMEI SIFLURU',
    tagline: 'Bertumbuh dalam Iman, Bersatu dalam Kasih, Melayani dengan Sukacita.',
    desc:
      'Media informasi dan komunikasi jemaat untuk mempererat persekutuan, ' +
      'membagikan kabar pelayanan, serta menumbuhkan iman dan kasih dalam kehidupan bersama.',
    image: ''
  };

  const worshipSchedules = [
    {
      id: 'sch-1', title: 'Ibadah Minggu Pagi', category: 'ibadah-minggu', categoryLabel: 'Ibadah Minggu',
      day: 0, time: '08:00', place: 'Gedung Gereja Lahai Roi',
      note: 'Ibadah umum untuk seluruh anggota jemaat, dilanjutkan dengan persekutuan singkat.'
    },
    {
      id: 'sch-2', title: 'Sekolah Minggu', category: 'anak', categoryLabel: 'Pelayanan Anak',
      day: 0, time: '07:00', place: 'Ruang Sekolah Minggu',
      note: 'Kelas untuk anak-anak sesuai kelompok usia.'
    },
    {
      id: 'sch-3', title: 'Angkatan Pemuda (AM)', category: 'pemuda', categoryLabel: 'Pemuda',
      day: 5, time: '18:00', place: 'Aula Jemaat',
      note: 'Ibadah pemuda dengan pujian, sharing firman, dan diskusi kelompok.'
    },
    {
      id: 'sch-4', title: 'Wadah Pelayanan Perempuan (WPP)', category: 'perempuan', categoryLabel: 'Perempuan',
      day: 0, time: '17:00', place: 'Aula Jemaat',
      note: 'Persekutuan pelayanan perempuan jemaat.'
    },
    {
      id: 'sch-5', title: 'Wadah Pelayanan Laki-laki (WPL)', category: 'laki-laki', categoryLabel: 'Laki-Laki',
      day: 0, time: '17:00', place: 'Aula Jemaat',
      note: 'Persekutuan pelayanan laki-laki jemaat.'
    },
    {
      id: 'sch-6', title: 'Ibadah Sektor Embun Hermon', category: 'sektor', categoryLabel: 'Sektor',
      day: 6, time: '17:00', place: 'Rumah anggota jemaat — Sektor Embun Hermon',
      note: 'Ibadah sektor bergilir setiap minggu.'
    },
    {
      id: 'sch-7', title: 'Ibadah Sektor Imanuel', category: 'sektor', categoryLabel: 'Sektor',
      day: 6, time: '17:00', place: 'Rumah anggota jemaat — Sektor Imanuel',
      note: 'Ibadah sektor bergilir setiap minggu.'
    },
    {
      id: 'sch-8', title: 'Ibadah Sektor Maranatha', category: 'sektor', categoryLabel: 'Sektor',
      day: 6, time: '17:00', place: 'Rumah anggota jemaat — Sektor Maranatha',
      note: 'Ibadah sektor bergilir setiap minggu.'
    },
    {
      id: 'sch-9', title: 'Ibadah Sektor Ebenheazer', category: 'sektor', categoryLabel: 'Sektor',
      day: 6, time: '17:00', place: 'Rumah anggota jemaat — Sektor Ebenheazer',
      note: 'Ibadah sektor bergilir setiap minggu.'
    },
    {
      id: 'sch-10', title: 'Ibadah Sektor Efrata', category: 'sektor', categoryLabel: 'Sektor',
      day: 6, time: '17:00', place: 'Rumah anggota jemaat — Sektor Efrata',
      note: 'Ibadah sektor bergilir setiap minggu.'
    },
    {
      id: 'sch-11', title: 'Ibadah Sektor Lahai-Roi', category: 'sektor', categoryLabel: 'Sektor',
      day: 6, time: '17:00', place: 'Rumah anggota jemaat — Sektor Lahai-Roi',
      note: 'Ibadah sektor bergilir setiap minggu.'
    },
    {
      id: 'sch-12', title: 'Doa Pagi Bersama', category: 'doa', categoryLabel: 'Doa & Pelayanan',
      day: 6, time: '05:30', place: 'Gedung Gereja Lahai Roi',
      note: 'Doa pagi bersama pengurus dan pelayan jemaat.'
    },
    {
      id: 'sch-13', title: 'Tunas Pekabaran Injil (TPI)', category: 'anak', categoryLabel: 'Pelayanan Anak',
      day: 6, time: '17:00', place: 'Aula Jemaat',
      note: 'Pembinaan anak melalui firman, musik, dan kegiatan bersama.'
    },
    {
      id: 'sch-14', title: 'Katekisasi Calon Anggota Jemaat', category: 'kategorial', categoryLabel: 'Kategorial',
      day: 4, time: '17:00', place: 'Ruang Pertemuan',
      note: 'Kelas katekisasi bagi calon anggota jemaat.'
    },
    {
      id: 'sch-15', title: 'Latihan Paduan Suara', category: 'doa', categoryLabel: 'Doa & Pelayanan',
      day: 5, time: '16:00', place: 'Gedung Gereja Lahai Roi',
      note: 'Latihan rutin paduan suara dan tim musik pelayanan.'
    }
  ];

  const scheduleCategories = [
    { key: 'all', label: 'Semua' },
    { key: 'ibadah-minggu', label: 'Ibadah Minggu' },
    { key: 'sektor', label: 'Sektor' },
    { key: 'unit', label: 'Unit' },
    { key: 'binakel', label: 'Binakel' },
    { key: 'kategorial', label: 'Kategorial' },
    { key: 'pemuda', label: 'Pemuda' },
    { key: 'perempuan', label: 'Perempuan' },
    { key: 'laki-laki', label: 'Laki-Laki' },
    { key: 'anak', label: 'Anak' },
    { key: 'doa', label: 'Doa & Pelayanan' }
  ];

  const ministries = [
    {
      id: 'min-1', icon: 'church', title: 'Ibadah & Liturgi',
      short: 'Persiapan dan pelaksanaan ibadah minggu serta tata ibadah jemaat.',
      detail: 'Pelayanan ini mempersiapkan tata ibadah, petugas liturgi, pembacaan Alkitab, ' +
              'hingga pelayanan altar. Anggota jemaat yang terpanggil dapat mendaftar melalui majelis.'
    },
    {
      id: 'min-2', icon: 'child-reaching', title: 'Pelayanan Anak',
      short: 'Pembinaan iman anak melalui Sekolah Minggu dan kegiatan kreatif.',
      detail: 'Guru dan pembina Sekolah Minggu melayani anak-anak melalui cerita Alkitab, ' +
              'lagu, permainan edukatif, dan kegiatan kreatif yang menyenangkan.'
    },
    {
      id: 'min-3', icon: 'users-line', title: 'Remaja & Pemuda',
      short: 'Wadah pertumbuhan iman generasi muda jemaat.',
      detail: 'Persekutuan remaja dan pemuda melibatkan pembinaan firman, pelatihan kepemimpinan, ' +
              'kegiatan sosial, serta pelayanan musik dan multimedia.'
    },
    {
      id: 'min-4', icon: 'hand-holding-heart', title: 'Pelayanan Perempuan',
      short: 'Persekutuan dan pelayanan perempuan jemaat.',
      detail: 'Pelayanan perempuan (WPP) mengembangkan persekutuan, keterampilan, dan ' +
              'kepedulian sosial bagi keluarga dan jemaat.'
    },
    {
      id: 'min-9', icon: 'users', title: 'Pelayanan Laki-laki',
      short: 'Persekutuan dan pelayanan laki-laki jemaat.',
      detail: 'Pelayanan laki-laki (WPL) mengembangkan persekutuan, kepemimpinan, dan ' +
              'kepedulian sosial bagi keluarga dan jemaat.'
    },
    {
      id: 'min-5', icon: 'people-roof', title: 'Pelayanan Keluarga',
      short: 'Pendampingan keluarga dan persiapan pernikahan.',
      detail: 'Pelayanan keluarga mencakup pendampingan pranikah, pembinaan keluarga muda, ' +
              'kunjungan keluarga, dan konseling pastoral.'
    },
    {
      id: 'min-6', icon: 'hands-holding-circle', title: 'Diakonia',
      short: 'Pelayanan kasih bagi anggota jemaat yang membutuhkan.',
      detail: 'Diakonia menghimpun dan menyalurkan bantuan bagi anggota jemaat yang sakit, ' +
              'berduka, atau mengalami kesulitan ekonomi.'
    },
    {
      id: 'min-7', icon: 'music', title: 'Musik & Pujian',
      short: 'Pelayanan paduan suara, pemusik, dan tim pujian.',
      detail: 'Paduan suara, pemusik, dan tim pujian melayani dalam ibadah minggu, ' +
              'ibadah kategorial, serta acara khusus jemaat.'
    },
    {
      id: 'min-8', icon: 'handshake-angle', title: 'Sosial & Kemasyarakatan',
      short: 'Kegiatan pelayanan sosial bagi masyarakat sekitar.',
      detail: 'Pelayanan sosial meliputi bakti sosial, kerja bakti lingkungan, ' +
              'bantuan bencana, dan kegiatan yang memberdayakan masyarakat sekitar.'
    }
  ];

  const newsArticles = [
    {
      id: 'news-1', category: 'berita-jemaat', categoryLabel: 'Berita Jemaat',
      date: '2026-02-08', title: 'Persekutuan Jemaat Berjalan dengan Sukacita',
      excerpt: 'Ibadah minggu diikuti oleh anggota jemaat dari berbagai kelompok usia dengan suasana penuh sukacita.',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80',
      body: 'Ibadah minggu di Gedung Gereja Lahai Roi berlangsung dengan penuh sukacita. ' +
            'Pelayanan liturgi dan pujian berjalan dengan baik, diakhiri dengan jamuan kasih antaranggota jemaat. ' +
            'Majelis jemaat mengucapkan terima kasih kepada seluruh pelayan dan anggota jemaat yang hadir.'
    },
    {
      id: 'news-2', category: 'kegiatan-ibadah', categoryLabel: 'Kegiatan Ibadah',
      date: '2026-02-01', title: 'Ibadah Sektor Wilayah Berlangsung Bergilir',
      excerpt: 'Ibadah sektor menjadi sarana mempererat persekutuan antaranggota jemaat di lingkungan masing-masing.',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80',
      body: 'Ibadah sektor wilayah berlangsung secara bergilir di rumah-rumah anggota jemaat. ' +
            'Kegiatan ini menjadi sarana mempererat persekutuan, saling mendoakan, dan berbagi pergumulan. ' +
            'Jemaat diundang untuk berpartisipasi aktif dalam setiap ibadah sektor.'
    },
    {
      id: 'news-3', category: 'pelayanan-sosial', categoryLabel: 'Pelayanan Sosial',
      date: '2026-01-25', title: 'Bakti Sosial Jemaat untuk Warga Sekitar',
      excerpt: 'Kegiatan bakti sosial dilaksanakan sebagai wujud kasih Kristus bagi masyarakat sekitar.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
      body: 'Bakti sosial jemaat dilaksanakan dengan melibatkan pemuda, remaja, dan anggota jemaat lainnya. ' +
            'Kegiatan ini mencakup pembersihan lingkungan dan penyaluran bantuan bagi warga yang membutuhkan. ' +
            'Semoga pelayanan ini menjadi berkat bagi masyarakat sekitar.'
    },
    {
      id: 'news-4', category: 'kegiatan-pemuda', categoryLabel: 'Kegiatan Pemuda',
      date: '2026-01-18', title: 'Pemuda Jemaat Mengikuti Pelatihan Musik',
      excerpt: 'Pelatihan musik diikuti pemuda jemaat untuk mendukung pelayanan pujian dalam ibadah.',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
      body: 'Pelatihan musik bagi pemuda jemaat berlangsung dengan antusias. ' +
            'Kegiatan ini bertujuan untuk memperlengkapi pemuda dalam pelayanan pujian dan musik gereja. ' +
            'Pelatihan akan dilanjutkan secara rutin setiap bulan.'
    },
    {
      id: 'news-6', category: 'berita-jemaat', categoryLabel: 'Berita Jemaat',
      date: '2026-01-04', title: 'Kunjungan Pastoral ke Keluarga Jemaat',
      excerpt: 'Tim pastoral melakukan kunjungan kepada keluarga jemaat yang membutuhkan pendampingan.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80',
      body: 'Tim pastoral jemaat melaksanakan kunjungan kepada keluarga jemaat yang membutuhkan ' +
            'pendampingan dan doa. Kunjungan ini menjadi wujud perhatian dan kasih jemaat ' +
            'kepada sesama anggota. Jemaat diundang untuk turut mendukung melalui doa.'
    },
    {
      id: 'news-7', category: 'kegiatan-ibadah', categoryLabel: 'Kegiatan Ibadah',
      date: '2025-12-24', title: 'Perayaan Natal Jemaat Berlangsung Khidmat',
      excerpt: 'Perayaan Natal diisi dengan ibadah, pujian, dan drama dari pelayanan anak dan remaja.',
      image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=900&q=80',
      body: 'Perayaan Natal Jemaat GPM Bumei Sifluru berlangsung dengan khidmat dan penuh sukacita. ' +
            'Ibadah diisi dengan pujian, drama Natal dari pelayanan anak dan remaja, serta pesan firman. ' +
            'Seluruh anggota jemaat diundang untuk menghayati makna kelahiran Kristus.'
    },
    {
      id: 'news-8', category: 'pelayanan-sosial', categoryLabel: 'Pelayanan Sosial',
      date: '2025-12-14', title: 'Bantuan Diakonia untuk Anggota Jemaat',
      excerpt: 'Bantuan diakonia disalurkan kepada anggota jemaat yang membutuhkan pendampingan.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
      body: 'Pelayanan diakonia jemaat menyalurkan bantuan kepada anggota jemaat yang membutuhkan. ' +
            'Bantuan ini dihimpun dari persembahan kasih anggota jemaat dan disalurkan secara bertanggung jawab. ' +
            'Terima kasih kepada seluruh jemaat yang telah mendukung pelayanan ini.'
    }
  ];

  const newsCategories = [
    { key: 'all', label: 'Semua' },
    { key: 'berita-jemaat', label: 'Berita Jemaat' },
    { key: 'kegiatan-ibadah', label: 'Kegiatan Ibadah' },
    { key: 'pelayanan-sosial', label: 'Pelayanan Sosial' },
    { key: 'kegiatan-pemuda', label: 'Kegiatan Pemuda' }
  ];

  const dailyDevotions = [
    {
      id: 'dev-1', title: 'Bertumbuh dalam Iman',
      verse: '“Iman adalah dasar dari segala sesuatu yang kita harapkan dan bukti dari segala sesuatu yang tidak kita lihat.”',
      reference: 'Ibrani 11:1',
      reflection:
        'Iman bukan sekadar keyakinan yang pasif, melainkan dasar yang menopang langkah hidup kita. ' +
        'Dalam kehidupan jemaat, iman bertumbuh melalui ibadah, doa, dan persekutuan yang sehat. ' +
        'Marilah kita saling menguatkan agar setiap anggota jemaat berakar semakin dalam pada Firman Tuhan.',
      questions: [
        'Dalam situasi apa saya sedang dipanggil untuk percaya meskipun belum melihat hasilnya?',
        'Langkah kecil apa yang dapat saya ambil hari ini untuk menumbuhkan iman saya?',
        'Siapa anggota jemaat yang dapat saya dukung dalam pergumulannya?'
      ]
    },
    {
      id: 'dev-2', title: 'Bersatu dalam Kasih',
      verse: '“Demikianlah tinggal ketiga hal ini, yaitu iman, pengharapan dan kasih, dan yang paling besar di antaranya ialah kasih.”',
      reference: '1 Korintus 13:13',
      reflection:
        'Kasih adalah tanda paling nyata dari persekutuan Kristen. Ketika kasih menjadi dasar ' +
        'setiap relasi, perbedaan tidak lagi menjadi pemisah, melainkan kekayaan dalam kebersamaan. ' +
        'Jemaat dipanggil untuk menghadirkan kasih itu dalam perkataan dan perbuatan sehari-hari.',
      questions: [
        'Apakah perkataan saya hari ini mencerminkan kasih Kristus?',
        'Kepada siapa saya perlu menyatakan pengampunan atau rekonsiliasi?',
        'Bagaimana saya dapat melayani keluarga saya dengan lebih penuh kasih?'
      ]
    },
    {
      id: 'dev-3', title: 'Melayani dengan Sukacita',
      verse: '“Layanilah seorang akan yang lain, sesuai dengan karunia yang telah diperoleh tiap-tiap orang sebagai pengurus yang baik dari kasih karunia Allah.”',
      reference: '1 Petrus 4:10',
      reflection:
        'Setiap anggota jemaat memiliki karunia yang berbeda, dan semuanya diberikan untuk melayani. ' +
        'Pelayanan yang lahir dari syukur akan menghasilkan sukacita, bukan sekadar kewajiban. ' +
        'Marilah kita menemukan karunia kita dan memakainya bagi kemuliaan Tuhan.',
      questions: [
        'Karunia apa yang Tuhan percayakan kepada saya?',
        'Pelayanan apa yang dapat saya mulai atau dukung dengan lebih setia?',
        'Apa yang membuat saya bersukacita ketika melayani?'
      ]
    }
  ];

  const galleryCategories = [
    { key: 'all', label: 'Semua' },
    { key: 'ibadah', label: 'Ibadah' },
    { key: 'pelayanan', label: 'Pelayanan' },
    { key: 'pemuda', label: 'Pemuda' },
    { key: 'sosial', label: 'Sosial' },
    { key: 'anak', label: 'Anak-Anak' }
  ];

  const galleryItems = [
    { id: 'g-1', category: 'ibadah', categoryLabel: 'Ibadah', caption: 'Suasana ruang ibadah jemaat',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-2', category: 'ibadah', categoryLabel: 'Ibadah', caption: 'Pembacaan Firman Tuhan',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-3', category: 'pelayanan', categoryLabel: 'Pelayanan', caption: 'Pelayanan paduan suara',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-4', category: 'pemuda', categoryLabel: 'Pemuda', caption: 'Persekutuan pemuda jemaat',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-5', category: 'sosial', categoryLabel: 'Sosial', caption: 'Kegiatan bakti sosial',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-6', category: 'anak', categoryLabel: 'Anak-Anak', caption: 'Kegiatan anak-anak jemaat',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-7', category: 'pelayanan', categoryLabel: 'Pelayanan', caption: 'Pelayanan anak Sekolah Minggu',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-8', category: 'ibadah', categoryLabel: 'Ibadah', caption: 'Bangku ruang ibadah',
      image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-9', category: 'sosial', categoryLabel: 'Sosial', caption: 'Persekutuan keluarga jemaat',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-10', category: 'anak', categoryLabel: 'Anak-Anak', caption: 'Pelayanan anak-anak',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-11', category: 'pemuda', categoryLabel: 'Pemuda', caption: 'Kegiatan kreatif pemuda',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80' },
    { id: 'g-12', category: 'pelayanan', categoryLabel: 'Pelayanan', caption: 'Doa bersama pelayan jemaat',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=80' }
  ];

  const announcements = [
    {
      id: 'ann-1', title: 'Persekutuan Doa Awal Bulan', date: '2026-03-01',
      priority: 'high', priorityLabel: 'Penting', icon: 'bullhorn',
      excerpt: 'Persekutuan doa awal bulan akan dilaksanakan bersama seluruh pelayan jemaat.',
      body: 'Persekutuan doa awal bulan akan dilaksanakan di Gedung Gereja Lahai Roi. ' +
            'Seluruh pelayan jemaat diundang untuk hadir dan bersama-sama berdoa bagi pelayanan jemaat. ' +
            'Informasi lebih lanjut akan diumumkan melalui majelis jemaat.'
    },
    {
      id: 'ann-2', title: 'Jadwal Pelayanan Diakonia', date: '2026-02-20',
      priority: 'medium', priorityLabel: 'Menengah', icon: 'hand-holding-heart',
      excerpt: 'Pendataan anggota jemaat yang membutuhkan pendampingan diakonia dibuka.',
      body: 'Pelayanan diakonia membuka pendataan bagi anggota jemaat yang membutuhkan pendampingan. ' +
            'Silakan menghubungi majelis atau pengurus diakonia untuk informasi lebih lanjut. ' +
            'Seluruh data akan dijaga kerahasiaannya.'
    },
    {
      id: 'ann-3', title: 'Latihan Paduan Suara Gabungan', date: '2026-02-15',
      priority: 'normal', priorityLabel: 'Biasa', icon: 'music',
      excerpt: 'Latihan paduan suara gabungan diadakan untuk persiapan pelayanan ibadah.',
      body: 'Latihan paduan suara gabungan akan dilaksanakan di Aula Jemaat. ' +
            'Seluruh anggota paduan suara diharapkan hadir tepat waktu. ' +
            'Mari mempersembahkan pelayanan terbaik bagi Tuhan.'
    },
    {
      id: 'ann-4', title: 'Kerja Bakti Lingkungan Gereja', date: '2026-02-10',
      priority: 'normal', priorityLabel: 'Biasa', icon: 'broom',
      excerpt: 'Seluruh anggota jemaat diundang untuk mengikuti kerja bakti lingkungan gereja.',
      body: 'Kerja bakti lingkungan gereja akan dilaksanakan pada hari yang akan diumumkan. ' +
            'Seluruh anggota jemaat diundang untuk berpartisipasi. ' +
            'Mohon membawa perlengkapan kerja bakti masing-masing.'
    }
  ];

  const contactInformation = {
    address: {
      value: 'Negeri/Desa Sifluru, Kecamatan Teon Nila Serua (Waipia), Kabupaten Maluku Tengah',
      verified: true
    },
    building: { value: 'Gedung Gereja Lahai Roi', verified: true },
    classis:  { value: 'Klasis GPM Masohi', verified: true },
    serviceArea: { value: 'Kecamatan Teon Nila Serua (TNS), Kabupaten Maluku Tengah', verified: true },
    boundaries: {
      value: 'Sebelah selatan berbatasan dengan Jemaat GPM Waru; sebelah barat berbatasan dengan Negeri Kokroman (Sektor Rehoboth).',
      verified: true
    },

    phone:    { value: '', verified: false },
    email:    { value: '', verified: false },
    whatsapp: { value: '', verified: false },

    serviceTime: 'Ibadah Minggu pukul 08.00 WIT',
    directions:
      'Lokasi gereja berada di Negeri/Desa Sifluru, Kecamatan Teon Nila Serua (Waipia), ' +
      'Kabupaten Maluku Tengah. Untuk petunjuk arah lebih rinci, silakan hubungi pengurus jemaat.',
    mapsQuery: '-3.2088963441880525,129.01601231675173',

    socials: [
      { label: 'Facebook',  icon: 'facebook-f', url: '', verified: false },
      { label: 'Instagram', icon: 'instagram',  url: '', verified: false },
      { label: 'YouTube',   icon: 'youtube',    url: '', verified: false }
    ]
  };
  const MAPS_DEFAULT = contactInformation.mapsQuery;

  /* ==========================================================
     2. HELPER
     ========================================================== */
  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.prototype.slice.call((ctx || document).querySelectorAll(sel));

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  function formatDateID(iso) {
    const d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    try {
      return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
    } catch (e) { return d.toLocaleDateString(); }
  }

  function formatDateTimeID(dateObj) {
    try {
      return new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(dateObj);
    } catch (e) { return dateObj.toString(); }
  }

  const toastContainer = $('#toastContainer');
  function toast(message, type) {
    const t = type || 'info';
    const iconMap = { success: 'circle-check', error: 'circle-exclamation', info: 'circle-info' };
    const el = document.createElement('div');
    el.className = 'toast toast-' + t;
    el.setAttribute('role', 'status');
    el.innerHTML = icon(iconMap[t]) + '<span></span>';
    el.querySelector('span').textContent = message;
    toastContainer.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    window.setTimeout(() => {
      el.classList.remove('show');
      window.setTimeout(() => el.remove(), 320);
    }, 4200);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((resolve, reject) => {
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '-1000px';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        resolve();
      } catch (err) { reject(err); }
    });
  }

  function shareContent(title, text) {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: title, text: text, url: url }).catch(() => {});
      return;
    }
    copyText(text + '\n\n' + url)
      .then(() => toast('Tautan dan teks disalin ke clipboard.', 'success'))
      .catch(() => toast('Tidak dapat menyalin. Silakan salin secara manual.', 'error'));
  }

  /* ==========================================================
     3. MODAL
     ========================================================== */
  const modalOverlay = $('#modalOverlay');
  const modalTitleEl = $('#modalTitle');
  const modalEyebrowEl = $('#modalEyebrow');
  const modalBodyEl = $('#modalBody');
  const modalFootEl = $('#modalFoot');
  const modalCloseBtn = $('#modalClose');
  let modalLastFocus = null;

  function openModal(opts) {
    modalLastFocus = document.activeElement;
    modalEyebrowEl.textContent = opts.eyebrow || '';
    modalTitleEl.textContent = opts.title || 'Informasi';
    modalBodyEl.innerHTML = opts.html || '';
    modalFootEl.innerHTML = '';
    (opts.actions || []).forEach((action) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn ' + (action.variant || 'btn-ghost') + ' btn-sm';
      btn.textContent = action.label;
      btn.addEventListener('click', action.onClick);
      modalFootEl.appendChild(btn);
    });
    modalOverlay.classList.add('open');
    document.body.classList.add('no-scroll');
    window.setTimeout(() => modalCloseBtn.focus(), 40);
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    if (!lightboxOverlay.classList.contains('open')) document.body.classList.remove('no-scroll');
    if (modalLastFocus && typeof modalLastFocus.focus === 'function') modalLastFocus.focus();
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

  /* ==========================================================
     4. LIGHTBOX
     ========================================================== */
  const lightboxOverlay = $('#lightboxOverlay');
  const lbImage = $('#lbImage');
  const lbCaption = $('#lbCaption');
  let lbIndex = 0;
  let lbList = [];
  let lbLastFocus = null;

  function openLightbox(list, index) {
    lbList = list; lbIndex = index;
    lbLastFocus = document.activeElement;
    renderLightbox();
    lightboxOverlay.classList.add('open');
    document.body.classList.add('no-scroll');
    window.setTimeout(() => $('#lbClose').focus(), 40);
  }

  function renderLightbox() {
    const item = lbList[lbIndex];
    if (!item) return;
    lbImage.src = imageUrl(item.image, 1600);
    lbImage.alt = item.caption || 'Foto galeri jemaat';
    lbImage.onerror = function () { imgFallback(this); };
    lbCaption.innerHTML = '<small>' + esc(item.categoryLabel) + '</small>' + esc(item.caption);
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove('open');
    if (!modalOverlay.classList.contains('open')) document.body.classList.remove('no-scroll');
    if (lbLastFocus && typeof lbLastFocus.focus === 'function') lbLastFocus.focus();
  }

  function lbPrev() { if (!lbList.length) return; lbIndex = (lbIndex - 1 + lbList.length) % lbList.length; renderLightbox(); }
  function lbNext() { if (!lbList.length) return; lbIndex = (lbIndex + 1) % lbList.length; renderLightbox(); }

  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', lbPrev);
  $('#lbNext').addEventListener('click', lbNext);
  lightboxOverlay.addEventListener('click', (e) => { if (e.target === lightboxOverlay) closeLightbox(); });

  function trapFocus(container, e) {
    const focusable = $$('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])', container)
      .filter((el) => !el.disabled && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ==========================================================
     5. HEADER, NAVIGASI
     ========================================================== */
  const header = $('#siteHeader');
  const navToggle = $('#navToggle');
  const mainNav = $('#mainNav');
  const navDropdown = $('#navDropdown');
  const dropdownToggle = $('#dropdownToggle');
  const backToTop = $('#backToTop');

  function closeMobileNav() {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Buka menu navigasi');
    navToggle.innerHTML = '<svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#bars"></use></svg>';
  }

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    navToggle.innerHTML = isOpen
      ? '<svg class="icon" viewBox="0 0 384 512" aria-hidden="true"><use href="icons.svg#xmark"></use></svg>'
      : '<svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#bars"></use></svg>';
  });

  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navDropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('click', (e) => {
    if (!navDropdown.contains(e.target)) {
      navDropdown.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    }
  });

  $$('.nav-link[href^="#"], .header-cta-mobile').forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav();
      navDropdown.classList.remove('open');
      dropdownToggle.setAttribute('aria-expanded', 'false');
    });
  });

  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 14;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: top, behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
    });
  });

  let ticking = false;
  function onScroll() {
    const y = window.pageYOffset;
    header.classList.toggle('scrolled', y > 12);
    backToTop.classList.toggle('show', y > 500);
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });

  backToTop.addEventListener('click', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ==========================================================
     6. SCROLL SPY
     ========================================================== */
  const sectionIds = ['beranda','profil','struktur','jadwal','pelayanan','berita','renungan','galeri','pengumuman','kolektan','sumbangan','sektor','lokasi','kontak'];
  const navLinks = $$('.nav-link[href^="#"]');

  function setActiveNav(id) {
    navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === '#' + id));
    const isChildActive = ['pengumuman','kolektan','sumbangan','sektor','lokasi','kontak'].indexOf(id) !== -1;
    dropdownToggle.classList.toggle('is-active', isChildActive);
  }

  if ('IntersectionObserver' in window) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveNav(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sectionIds.forEach((id) => { const el = document.getElementById(id); if (el) spyObserver.observe(el); });
  }

  /* ==========================================================
     7. REVEAL
     ========================================================== */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !prefersReduced) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('in'); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((el) => revealObserver.observe(el));
  } else {
    $$('.reveal').forEach((el) => el.classList.add('in'));
  }

  /* ==========================================================
     7b. BERANDA (HERO)
     ========================================================== */
  const heroMediaEl = $('#heroMedia');
  const heroDefaultMedia = heroMediaEl ? heroMediaEl.innerHTML : '';

  function renderHero() {
    const eb = $('#heroEyebrow'), tt = $('#heroTitle'), tg = $('#heroTagline'), ds = $('#heroDesc');
    if (eb) eb.textContent = siteHero.eyebrow;
    if (tt) tt.innerHTML = String(siteHero.title).split(/\r?\n/).map(esc).join('<br />');
    if (tg) tg.textContent = siteHero.tagline;
    if (ds) ds.textContent = siteHero.desc;
    if (heroMediaEl) {
      if (siteHero.image) {
        heroMediaEl.innerHTML = '<img src="' + esc(imageUrl(siteHero.image, 1920)) + '" fetchpriority="high" alt="Foto beranda Jemaat GPM Bumei Sifluru" onerror="imgFallback(this)" />';
      } else {
        heroMediaEl.innerHTML = heroDefaultMedia;
      }
    }
  }

  /* ==========================================================
    8. RENDER PROFIL
     ========================================================== */
  const profileImgEl = $('#profileImg');
  const profileImgDefault = profileImgEl ? profileImgEl.getAttribute('src') : '';

  function renderProfile() {
    $('#profileIntro').textContent = churchProfile.intro;
    $('#profileArea').textContent = churchProfile.serviceArea;
    const q = $('#profileQuote');
    if (q) q.textContent = churchProfile.quote;
    $('#visionText').textContent = churchProfile.vision;
    $('#missionText').textContent = churchProfile.missions[0] || '';
    $('#valuesText').textContent = churchProfile.values.map((v) => v.title).join(' • ');
    if (profileImgEl) profileImgEl.src = churchProfile.image ? imageUrl(churchProfile.image, 1000) : profileImgDefault;
  }

  $('#profileMoreBtn').addEventListener('click', () => {
    const historyHtml = churchProfile.history.map((p) => '<p>' + esc(p) + '</p>').join('');
    const missionHtml = churchProfile.missions.map((m) => '<li>' + esc(m) + '</li>').join('');
    const valuesHtml = churchProfile.values.map((v) => '<li><strong>' + esc(v.title) + '</strong> — ' + esc(v.text) + '</li>').join('');

    openModal({
      eyebrow: 'Profil Jemaat',
      title: churchProfile.name,
      html:
        '<h4>Sejarah Singkat</h4>' + historyHtml +
        '<h4>Visi</h4><p>' + esc(churchProfile.vision) + '</p>' +
        '<h4>Misi</h4><ul>' + missionHtml + '</ul>' +
        '<h4>Nilai Pelayanan</h4><ul>' + valuesHtml + '</ul>' +
        '<h4>Identitas Gedung Gereja</h4>' +
        '<p><strong>' + esc(churchProfile.building) + '</strong> — ' + esc(churchProfile.region) + '</p>' +
        '<h4>Klasis</h4><p>' + esc(churchProfile.classis) + '</p>' +
        '<h4>Wilayah Pelayanan</h4><p>' + esc(churchProfile.serviceArea) + '</p>' +
        '<h4>Batas Wilayah Pelayanan</h4><p>' + esc(churchProfile.boundaries) + '</p>',
      actions: [{ label: 'Tutup', variant: 'btn-navy', onClick: closeModal }]
    });
  });

  /* ==========================================================
     9. RENDER JADWAL
     ========================================================== */
  const scheduleGrid = $('#scheduleGrid');
  const scheduleEmpty = $('#scheduleEmpty');
  const scheduleSearch = $('#scheduleSearch');
  let scheduleFilter = 'all';

  function renderScheduleFilters() {
    const box = $('#scheduleFilters');
    box.innerHTML = '';
    scheduleCategories.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip' + (cat.key === scheduleFilter ? ' is-active' : '');
      btn.textContent = cat.label;
      btn.setAttribute('aria-pressed', String(cat.key === scheduleFilter));
      btn.addEventListener('click', () => {
        scheduleFilter = cat.key;
        renderScheduleFilters();
        renderSchedules();
      });
      box.appendChild(btn);
    });
  }

  function nextOccurrence(item) {
    const now = new Date();
    const parts = item.time.split(':');
    const h = parseInt(parts[0], 10), m = parseInt(parts[1], 10);
    const candidate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0, 0);
    let diff = (item.day - candidate.getDay() + 7) % 7;
    if (diff === 0 && candidate.getTime() <= now.getTime()) diff = 7;
    candidate.setDate(candidate.getDate() + diff);
    return candidate;
  }

  function getNearestScheduleId() {
    let bestId = null, bestTime = Infinity;
    worshipSchedules.forEach((item) => {
      const t = nextOccurrence(item).getTime();
      if (t < bestTime) { bestTime = t; bestId = item.id; }
    });
    return bestId;
  }

  function renderSchedules() {
    const q = scheduleSearch.value.trim().toLowerCase();

    const list = worshipSchedules
      .filter((item) => scheduleFilter === 'all' || item.category === scheduleFilter)
      .filter((item) => {
        if (!q) return true;
        return (item.title + ' ' + item.place + ' ' + item.note + ' ' + item.categoryLabel).toLowerCase().indexOf(q) !== -1;
      })
      // Unit & binakel ikut tampil di "Semua" dan punya kategori sendiri (Unit, Binakel)
      .concat(sektorSearchItems().filter((item) =>
        (scheduleFilter === 'all' || item.category === scheduleFilter) &&
        (!q || (item.title + ' ' + item.place + ' ' + item.note + ' ' + item.categoryLabel).toLowerCase().indexOf(q) !== -1)
      ))
      .sort((a, b) => nextOccurrence(a) - nextOccurrence(b));

    scheduleGrid.innerHTML = '';

    if (!list.length) {
      scheduleEmpty.hidden = false;
      scheduleEmpty.className = 'empty-state';
      scheduleEmpty.innerHTML =
        '<svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#calendar-xmark"></use></svg>' +
        '<strong>Tidak ada jadwal yang cocok</strong>' +
        '<p>Coba ubah kata kunci pencarian atau pilih kategori lain.</p>';
      return;
    }
    scheduleEmpty.hidden = true;
    const photoUrl = (path) => {
  if (!path) return '';

  const encodedPath = path
    .split('/')
    .map(encodeURIComponent)
    .join('/');

  return SUPABASE_URL +
    '/storage/v1/object/public/schedule-photos/' +
    encodedPath;
};
    list.forEach((item, i) => {
      const nextDate = nextOccurrence(item);
      const card = document.createElement('article');
      card.className = 'card schedule-card reveal';
      card.style.transitionDelay = Math.min(i * 45, 250) + 'ms';
      const photoHtml = !item.sektor
  ? [
      item.foto_tuan_rumah
        ? '<div class="schedule-photo-item">' +
            '<span>Foto Tuan Rumah</span>' +
            '<img src="' + esc(photoUrl(item.foto_tuan_rumah)) +
            '" alt="Foto Tuan Rumah" loading="lazy">' +
          '</div>'
        : '',
      item.foto_pemimpin_ibadah
        ? '<div class="schedule-photo-item">' +
            '<span>Foto Pemimpin Ibadah</span>' +
            '<img src="' + esc(photoUrl(item.foto_pemimpin_ibadah)) +
            '" alt="Foto Pemimpin Ibadah" loading="lazy">' +
          '</div>'
        : ''
    ].join('')
  : '';
      
      card.innerHTML =
        '<div class="schedule-top">' +
          '<div class="schedule-icon"><svg class="icon" viewBox="0 0 640 512" aria-hidden="true"><use href="icons.svg#church"></use></svg></div>' +
        '</div>' +
        '<h3>' + esc(item.title) + '</h3>' +
        '<ul class="schedule-meta">' +
          '<li><svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#calendar"></use></svg><span>' + esc(dayNames[item.day]) + ', pukul ' + esc(item.time) + ' WIT</span></li>' +
          '<li><svg class="icon" viewBox="0 0 384 512" aria-hidden="true"><use href="icons.svg#location-dot"></use></svg><span>' + esc(item.place) + '</span></li>' +
          '<li><svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#tag"></use></svg><span>' + esc(item.categoryLabel) + '</span></li>' +
        '</ul>' +
        '<p class="schedule-note">' + esc(item.note) + '</p>' +
        (photoHtml ? '<div class="schedule-photos">' + photoHtml + '</div>' : '') +
        '<p class="schedule-note" style="background:transparent;padding:0;margin-bottom:.9rem;font-size:.8rem;">' +
          '<svg class="icon" viewBox="0 0 512 512" aria-hidden="true"><use href="icons.svg#clock"></use></svg> Berikutnya: ' + esc(formatDateTimeID(nextDate)) +
        '</p>' +
        '<div class="schedule-foot">' +
          '<button type="button" class="btn btn-ghost btn-sm" data-ics="' + esc(item.id) + '">' +
            '<svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#calendar-plus"></use></svg> Tambahkan ke Kalender' +
          '</button>' +
        '</div>';
      scheduleGrid.appendChild(card);

      // Kartu hasil pencarian unit/binakel sektor: ganti tombol kalender dengan "Lihat Detail"
      if (item.sektor) {
        const foot = card.querySelector('.schedule-foot');
        if (foot) {
          foot.innerHTML =
            '<button type="button" class="btn btn-navy btn-sm" data-sekdetail="' + esc(item.sektor.type + '|' + item.sektor.sid + '|' + (item.sektor.key || '')) + '">' +
              icon('arrow-right') + ' Lihat Detail' +
            '</button>';
        }
        if (item.noNext) {
          const nx = card.querySelectorAll('.schedule-note')[1];
          if (nx) nx.remove();
        }
      }

      if (!prefersReduced) window.setTimeout(() => card.classList.add('in'), 30);
      else card.classList.add('in');
    });

    $$('[data-sekdetail]', scheduleGrid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const p = btn.getAttribute('data-sekdetail').split('|');
        if (p[0] === 'unit') showSekUnit(p[1], p[2], true);
        else showSekKelompok(p[1], p[2], true);
      });
    });

    $$('[data-ics]', scheduleGrid).forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = worshipSchedules.filter((s) => s.id === btn.getAttribute('data-ics'))[0];
        if (item) downloadICS(item);
      });
    });
  }

  function downloadICS(item) {
    const start = nextOccurrence(item);
    const end = new Date(start.getTime() + 90 * 60 * 1000);
    const fmt = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Jemaat GPM Bumei Sifluru//Jadwal Ibadah//ID',
      'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT',
      'UID:' + item.id + '@gpm-bumei-sifluru'.replace('gpm-bumei-sifluru', 'gpm-bsf'),
      'DTSTAMP:' + fmt(new Date()),
      'DTSTART:' + fmt(start),
      'DTEND:' + fmt(end),
      'RRULE:FREQ=WEEKLY;COUNT=12',
      'SUMMARY:' + item.title,
      'LOCATION:' + item.place,
      'DESCRIPTION:' + item.note,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    try {
      const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = item.id + '.ics';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.setTimeout(() => URL.revokeObjectURL(url), 1500);
      toast('Berkas kalender berhasil diunduh.', 'success');
    } catch (err) {
      toast('Perangkat ini tidak mendukung unduhan kalender.', 'error');
    }
  }

  scheduleSearch.addEventListener('input', renderSchedules);

  /* ==========================================================
     10. RENDER PELAYANAN
     ========================================================== */
  function renderMinistries() {
    const grid = $('#ministryGrid');
    grid.innerHTML = '';
    ministries.forEach((m, i) => {
      const card = document.createElement('article');
      card.className = 'card ministry-card';
      card.style.transitionDelay = Math.min(i * 50, 300) + 'ms';
      card.innerHTML =
        (m.image
          ? '<div class="ministry-thumb"><img src="' + esc(imageUrl(m.image, 900)) + '" alt="Foto pelayanan: ' + esc(m.title) + '" loading="lazy" onerror="imgFallback(this)" /></div>'
          : '') +
        '<div class="value-icon">' + icon(m.icon) + '</div>' +
        '<h3>' + esc(m.title) + '</h3>' +
        '<p>' + esc(m.short) + '</p>' +
        '<button type="button" class="btn btn-ghost btn-sm" data-ministry="' + esc(m.id) + '">' +
          'Pelajari <svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#arrow-right"></use></svg>' +
        '</button>';
      grid.appendChild(card);
    });
  }

  $('#ministryGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-ministry]');
    if (!btn) return;
    const m = ministries.filter((x) => x.id === btn.getAttribute('data-ministry'))[0];
    if (!m) return;
    openModal({
      eyebrow: 'Pelayanan Jemaat',
      title: m.title,
      html:
        (m.image ? '<img src="' + esc(imageUrl(m.image, 1200)) + '" alt="Foto pelayanan: ' + esc(m.title) + '" style="width:100%;border-radius:14px;margin-bottom:1.2rem;" onerror="imgFallback(this)" />' : '') +
        '<p>' + esc(m.short) + '</p>' +
        '<h4>Informasi Lebih Lanjut</h4>' +
        '<p>' + esc(m.detail) + '</p>',
      actions: [
        { label: 'Tutup', variant: 'btn-ghost', onClick: closeModal },
        {
          label: 'Hubungi Kami', variant: 'btn-navy',
          onClick: () => {
            closeModal();
            const target = document.getElementById('kontak');
            if (target) {
              const top = target.getBoundingClientRect().top + window.pageYOffset - (header.offsetHeight + 14);
              window.scrollTo({ top: top, behavior: prefersReduced ? 'auto' : 'smooth' });
            }
          }
        }
      ]
    });
  });

  /* ==========================================================
     11. RENDER BERITA
     ========================================================== */
  const newsGrid = $('#newsGrid');
  const newsEmpty = $('#newsEmpty');
  const newsSearch = $('#newsSearch');
  const newsLoadMoreWrap = $('#newsLoadMoreWrap');
  const newsLoadMore = $('#newsLoadMore');
  let newsFilter = 'all';
  let newsVisible = 3;
  const NEWS_STEP = 3;

  function renderNewsFilters() {
    const box = $('#newsFilters');
    box.innerHTML = '';
    newsCategories.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip' + (cat.key === newsFilter ? ' is-active' : '');
      btn.textContent = cat.label;
      btn.setAttribute('aria-pressed', String(cat.key === newsFilter));
      btn.addEventListener('click', () => {
        newsFilter = cat.key;
        newsVisible = NEWS_STEP;
        renderNewsFilters();
        renderNews();
      });
      box.appendChild(btn);
    });
  }

  function getFilteredNews() {
    const q = newsSearch.value.trim().toLowerCase();
    return newsArticles
      .filter((a) => newsFilter === 'all' || a.category === newsFilter)
      .filter((a) => {
        if (!q) return true;
        return (a.title + ' ' + a.excerpt + ' ' + a.categoryLabel).toLowerCase().indexOf(q) !== -1;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function renderNews() {
    const all = getFilteredNews();
    const visible = all.slice(0, newsVisible);
    newsGrid.innerHTML = '';

    if (!all.length) {
      newsEmpty.hidden = false;
      newsEmpty.className = 'empty-state';
      newsEmpty.innerHTML =
        '<svg class="icon" viewBox="0 0 512 512" aria-hidden="true"><use href="icons.svg#newspaper"></use></svg>' +
        '<strong>Berita tidak ditemukan</strong>' +
        '<p>Tidak ada artikel yang sesuai dengan pencarian atau kategori yang dipilih.</p>';
      newsLoadMoreWrap.hidden = true;
      return;
    }
    newsEmpty.hidden = true;

    visible.forEach((article, i) => {
      const card = document.createElement('article');
      card.className = 'card news-card reveal';
      card.style.transitionDelay = Math.min(i * 50, 250) + 'ms';
      card.innerHTML =
        '<div class="news-thumb">' +
          '<img src="' + esc(imageUrl(article.image, 900)) + '" alt="Ilustrasi berita: ' + esc(article.title) + '" loading="lazy" onerror="imgFallback(this)" />' +
          '<span class="news-cat">' + esc(article.categoryLabel) + '</span>' +
        '</div>' +
        '<div class="news-body">' +
          '<p class="news-date"><svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#calendar"></use></svg> ' + esc(formatDateID(article.date)) + '</p>' +
          '<h3>' + esc(article.title) + '</h3>' +
          '<p class="news-excerpt">' + esc(article.excerpt) + '</p>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-news="' + esc(article.id) + '">' +
            'Baca Selengkapnya <svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#arrow-right"></use></svg>' +
          '</button>' +
        '</div>';
      newsGrid.appendChild(card);
      if (!prefersReduced) window.setTimeout(() => card.classList.add('in'), 30);
      else card.classList.add('in');
    });

    newsLoadMoreWrap.hidden = all.length <= newsVisible;
  }

  newsLoadMore.addEventListener('click', () => {
    const original = newsLoadMore.innerHTML;
    newsLoadMore.disabled = true;
    newsLoadMore.innerHTML = '<span class="spinner" style="border-color:rgba(23,54,93,.3);border-top-color:#17365D;"></span> Memuat...';
    window.setTimeout(() => {
      newsVisible += NEWS_STEP;
      renderNews();
      newsLoadMore.disabled = false;
      newsLoadMore.innerHTML = original;
    }, 550);
  });

  newsSearch.addEventListener('input', () => { newsVisible = NEWS_STEP; renderNews(); });

  newsGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-news]');
    if (!btn) return;
    const article = newsArticles.filter((a) => a.id === btn.getAttribute('data-news'))[0];
    if (!article) return;
    openModal({
      eyebrow: article.categoryLabel,
      title: article.title,
      html:
        '<img src="' + esc(imageUrl(article.image, 1200)) + '" alt="Ilustrasi: ' + esc(article.title) + '" style="width:100%;border-radius:14px;margin-bottom:1.2rem;" onerror="imgFallback(this)" />' +
        '<p style="font-size:.82rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">' + esc(formatDateID(article.date)) + '</p>' +
        '<p>' + esc(article.body) + '</p>',
      actions: [
        { label: 'Tutup', variant: 'btn-ghost', onClick: closeModal },
        { label: 'Bagikan', variant: 'btn-navy', onClick: () => shareContent(article.title, article.excerpt) }
      ]
    });
  });

  /* ==========================================================
     12. RENDER RENUNGAN
     ========================================================== */
  const devotionCard = $('#devotionCard');
  let devotionIndex = 0;

  function renderDevotion() {
    if (!devotionCard) return;
    if (devotionIndex >= dailyDevotions.length || devotionIndex < 0) devotionIndex = 0;
    const d = dailyDevotions[devotionIndex];
    if (!d) return;

    devotionCard.innerHTML =
      '<h3 class="devotion-title">' + esc(d.title) + '</h3>' +
      '<blockquote>' + esc(d.verse) + '<span class="devotion-ref">' + esc(d.reference) + '</span></blockquote>' +
      '<p class="devotion-text">' + esc(d.reflection) + '</p>' +
      '<div class="devotion-questions">' +
        '<h4>Pertanyaan Perenungan</h4>' +
        '<ol>' + d.questions.map((q) => '<li>' + esc(q) + '</li>').join('') + '</ol>' +
      '</div>' +
      '<div class="devotion-actions">' +
        '<button type="button" class="btn btn-gold btn-sm" id="devCopy">' +
          '<svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#copy"></use></svg> Salin Teks</button>' +
        '<button type="button" class="btn btn-outline btn-sm" id="devShare">' +
          '<svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#share-nodes"></use></svg> Bagikan Renungan</button>' +
      '</div>' +
      '<div class="devotion-nav">' +
        '<button type="button" class="btn btn-outline btn-sm" id="devPrev">' +
          '<svg class="icon" viewBox="0 0 320 512" aria-hidden="true"><use href="icons.svg#chevron-left"></use></svg> Sebelumnya</button>' +
        '<div class="devotion-dots" id="devDots" role="tablist" aria-label="Pilih renungan"></div>' +
        '<span class="devotion-counter">' + (devotionIndex + 1) + ' / ' + dailyDevotions.length + '</span>' +
        '<button type="button" class="btn btn-outline btn-sm" id="devNext">' +
          'Berikutnya <svg class="icon" viewBox="0 0 320 512" aria-hidden="true"><use href="icons.svg#chevron-right"></use></svg></button>' +
      '</div>';

    const dots = $('#devDots');
    if (dots) dailyDevotions.forEach((item, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = i === devotionIndex ? 'is-active' : '';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-selected', String(i === devotionIndex));
      dot.setAttribute('aria-label', 'Renungan ' + (i + 1) + ': ' + item.title);
      dot.addEventListener('click', () => { devotionIndex = i; renderDevotion(); });
      dots.appendChild(dot);
    });

    const copyBtn = $('#devCopy');
    if (copyBtn) copyBtn.addEventListener('click', () => {
      const text = d.title + '\n\n' + d.verse + ' (' + d.reference + ')\n\n' + d.reflection +
        '\n\nPertanyaan Perenungan:\n' + d.questions.map((q, i) => (i + 1) + '. ' + q).join('\n');
      copyText(text)
        .then(() => toast('Teks renungan berhasil disalin.', 'success'))
        .catch(() => toast('Gagal menyalin teks renungan.', 'error'));
    });

    const shareBtn = $('#devShare');
    if (shareBtn) shareBtn.addEventListener('click', () => {
      shareContent('Renungan: ' + d.title, d.verse + ' (' + d.reference + ')');
    });

    const prevBtn = $('#devPrev');
    if (prevBtn) prevBtn.addEventListener('click', () => {
      devotionIndex = (devotionIndex - 1 + dailyDevotions.length) % dailyDevotions.length;
      renderDevotion();
    });
    const nextBtn = $('#devNext');
    if (nextBtn) nextBtn.addEventListener('click', () => {
      devotionIndex = (devotionIndex + 1) % dailyDevotions.length;
      renderDevotion();
    });
  }

  /* ==========================================================
     13. RENDER GALERI
     ========================================================== */
  const galleryGrid = $('#galleryGrid');
  const galleryEmpty = $('#galleryEmpty');
  let galleryFilter = 'all';

  function renderGalleryFilters() {
    const box = $('#galleryFilters');
    if (!box) return;
    box.innerHTML = '';
    galleryCategories.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip' + (cat.key === galleryFilter ? ' is-active' : '');
      btn.textContent = cat.label;
      btn.setAttribute('aria-pressed', String(cat.key === galleryFilter));
      btn.addEventListener('click', () => {
        galleryFilter = cat.key;
        renderGalleryFilters();
        renderGallery();
      });
      box.appendChild(btn);
    });
  }

  function getFilteredGallery() {
    return galleryItems.filter((g) => galleryFilter === 'all' || g.category === galleryFilter);
  }

  function renderGallery() {
    if (!galleryGrid || !galleryEmpty) return;
    const list = getFilteredGallery();
    galleryGrid.innerHTML = '';

    if (!list.length) {
      galleryEmpty.hidden = false;
      galleryEmpty.className = 'empty-state';
      galleryEmpty.innerHTML =
        '<svg class="icon" viewBox="0 0 576 512" aria-hidden="true"><use href="icons.svg#images"></use></svg>' +
        '<strong>Belum ada foto pada kategori ini</strong>' +
        '<p>Silakan pilih kategori lain.</p>';
      return;
    }
    galleryEmpty.hidden = true;

    list.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'gallery-item';
      btn.setAttribute('aria-label', 'Buka foto: ' + item.caption);
      btn.innerHTML =
        '<img src="' + esc(imageUrl(item.image, 900)) + '" alt="' + esc(item.caption) + '" loading="lazy" onerror="imgFallback(this)" />' +
        '<span class="gallery-caption">' +
          '<small>' + esc(item.categoryLabel) + '</small>' + esc(item.caption) +
        '</span>';
      btn.addEventListener('click', () => openLightbox(list, index));
      galleryGrid.appendChild(btn);
    });
  }

  /* ==========================================================
     14. RENDER PENGUMUMAN
     ========================================================== */
  function sortedAnnouncements() {
    return announcements.slice().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }

  function renderAnnouncements() {
    const list = $('#announceList');
    const empty = $('#announceEmpty');
    if (!list || !empty) return;
    list.innerHTML = '';

    if (!announcements.length) {
      empty.hidden = false;
      empty.className = 'empty-state';
      empty.innerHTML =
        '<svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#bell"></use></svg>' +
        '<strong>Belum ada pengumuman</strong><p>Pengumuman baru akan ditampilkan di sini.</p>';
      return;
    }
    empty.hidden = true;

    sortedAnnouncements().forEach((ann) => {
      const item = document.createElement('article');
      item.className = 'announce-item priority-' + ann.priority;
      item.innerHTML =
        '<div class="announce-icon">' + icon(ann.icon) + '</div>' +
        '<div class="announce-body">' +
          '<div class="announce-meta">' +
            '<span class="prio-badge prio-' + esc(ann.priority) + '">' + esc(ann.priorityLabel) + '</span>' +
            '<span><svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#calendar"></use></svg> ' + esc(formatDateID(ann.date)) + '</span>' +
          '</div>' +
          '<h3>' + esc(ann.title) + '</h3>' +
          '<p class="announce-excerpt">' + esc(ann.excerpt) + '</p>' +
        '</div>' +
        '<div class="announce-actions">' +
          '<button type="button" class="btn btn-ghost btn-sm" data-ann="' + esc(ann.id) + '">Baca</button>' +
          '<button type="button" class="btn btn-ghost btn-sm" data-ann-copy="' + esc(ann.id) + '" aria-label="Salin pengumuman"><svg class="icon" viewBox="0 0 448 512" aria-hidden="true"><use href="icons.svg#copy"></use></svg></button>' +
        '</div>';
      list.appendChild(item);
    });
  }

  const announceListEl = $('#announceList');
  if (announceListEl) announceListEl.addEventListener('click', (e) => {
    const readBtn = e.target.closest('[data-ann]');
    const copyBtn = e.target.closest('[data-ann-copy]');

    if (readBtn) {
      const ann = announcements.filter((a) => a.id === readBtn.getAttribute('data-ann'))[0];
      if (!ann) return;
      openModal({
        eyebrow: 'Pengumuman — ' + ann.priorityLabel,
        title: ann.title,
        html:
          '<p style="font-size:.82rem;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);">' + esc(formatDateID(ann.date)) + '</p>' +
          '<p>' + esc(ann.body) + '</p>',
        actions: [
          { label: 'Tutup', variant: 'btn-ghost', onClick: closeModal },
          { label: 'Bagikan', variant: 'btn-navy', onClick: () => shareContent(ann.title, ann.excerpt) }
        ]
      });
    }

    if (copyBtn) {
      const ann = announcements.filter((a) => a.id === copyBtn.getAttribute('data-ann-copy'))[0];
      if (!ann) return;
      copyText(ann.title + '\n' + formatDateID(ann.date) + '\n\n' + ann.body)
        .then(() => toast('Pengumuman disalin ke clipboard.', 'success'))
        .catch(() => toast('Gagal menyalin pengumuman.', 'error'));
    }
  });

  /* ==========================================================
     15. RENDER LOKASI & KONTAK
     ========================================================== */
  function renderLocation() {
    const setText = (selector, value) => { const el = $(selector); if (el) el.textContent = value == null ? '' : value; };
    setText('#locAddress', contactInformation.address.value);
    setText('#locBuilding', contactInformation.building.value);
    setText('#locServiceArea', contactInformation.serviceArea.value);
    setText('#locClassis', contactInformation.classis.value);
    setText('#locBoundaries', contactInformation.boundaries.value);
    setText('#locDirections', contactInformation.directions);
    setText('#locServiceTime', contactInformation.serviceTime);

    const q = encodeURIComponent(contactInformation.mapsQuery);
    const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + q;
    const dirUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + q;

    const mapsBtn = $('#mapsBtn');
    if (mapsBtn) mapsBtn.href = mapsUrl;

    const dirBtn = $('#directionsBtn');
    if (dirBtn) dirBtn.href = dirUrl;

    const frame = $('#mapsFrame');
    if (frame && contactInformation.mapsQuery !== MAPS_DEFAULT) {
      frame.src = 'https://www.google.com/maps?q=' + q + '&z=16&hl=id&output=embed';
    }

    const coordEl = $('#locCoord');
    if (coordEl) {
      const parts = contactInformation.mapsQuery.split(',');
      const lat = parseFloat(parts[0]), lng = parseFloat(parts[1]);
      const coord = (parts.length === 2 && !isNaN(lat) && !isNaN(lng))
        ? lat.toFixed(6) + ', ' + lng.toFixed(6)
        : contactInformation.mapsQuery;
      coordEl.textContent = 'Koordinat: ' + coord + ' — ' + contactInformation.serviceArea.value + '.';
    }
  }

  function renderContact() {
    const list = $('#contactList');
    if (!list) return;
    list.innerHTML = '';

    const items = [
      { icon: 'location-dot', label: 'Alamat', value: contactInformation.address.value, verified: contactInformation.address.verified },
      { icon: 'church', label: 'Gedung Gereja', value: contactInformation.building.value, verified: contactInformation.building.verified },
      { icon: 'sitemap', label: 'Klasis', value: contactInformation.classis.value, verified: contactInformation.classis.verified },
      { icon: 'phone', label: 'Telepon', value: contactInformation.phone.value || 'Belum tersedia', verified: contactInformation.phone.verified },
      { icon: 'envelope', label: 'Email', value: contactInformation.email.value || 'Belum tersedia', verified: contactInformation.email.verified }
    ];

    items.forEach((it) => {
      const row = document.createElement('div');
      row.className = 'info-row';
      row.innerHTML =
        '<div class="info-icon">' + icon(it.icon) + '</div>' +
        '<div><h4>' + esc(it.label) + '</h4><p>' + esc(it.value) + '</p></div>';
      list.appendChild(row);
    });

    const socialRow = $('#socialRow');
    socialRow.innerHTML = '';
    const verifiedSocials = contactInformation.socials.filter((s) => s.verified && s.url);
    if (!verifiedSocials.length) {
      socialRow.innerHTML = '<p style="font-size:.85rem;color:var(--muted);margin:0;">Akun media sosial resmi belum tersedia.</p>';
    } else {
      verifiedSocials.forEach((s) => {
        const a = document.createElement('a');
        a.className = 'social-btn';
        a.href = s.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', s.label);
        a.innerHTML = icon(s.icon);
        socialRow.appendChild(a);
      });
    }

    const wrap = $('#whatsappWrap');
    if (contactInformation.whatsapp.verified && contactInformation.whatsapp.value) {
      const btn = $('#whatsappBtn');
      let number = contactInformation.whatsapp.value.replace(/[^0-9]/g, '');
      if (number.charAt(0) === '0') number = '62' + number.slice(1);
      btn.href = 'https://wa.me/' + number;
      wrap.hidden = false;
    } else {
      wrap.hidden = true;
    }

    const footerContact = $('#footerContact');
    footerContact.innerHTML =
      '<p><svg class="icon" viewBox="0 0 384 512" aria-hidden="true"><use href="icons.svg#location-dot"></use></svg> ' + esc(contactInformation.address.value) + '</p>' +
      '<p><svg class="icon" viewBox="0 0 640 512" aria-hidden="true"><use href="icons.svg#church"></use></svg> ' + esc(contactInformation.building.value) + '</p>' +
      '<p><svg class="icon" viewBox="0 0 576 512" aria-hidden="true"><use href="icons.svg#sitemap"></use></svg> ' + esc(contactInformation.classis.value) + '</p>';
  }

  /* ==========================================================
     16. TOPBAR PENGUMUMAN
     ========================================================== */
  const TOPBAR_KEY = 'gpm-bsf-banner-dismissed';
  const topbarEl = $('#topbar');
  let topbarItem = null;

  function renderTopbar() {
    topbarItem = sortedAnnouncements().filter((a) => a.priority === 'high')[0] || null;
    topbarEl.hidden = true;
    if (!topbarItem) return;

    let dismissed = false;
    try { dismissed = localStorage.getItem(TOPBAR_KEY) === topbarItem.id; } catch (e) { dismissed = false; }
    if (dismissed) return;

    $('#topbarText').textContent = topbarItem.title;
    topbarEl.hidden = false;
  }

  $('#topbarRead').addEventListener('click', () => {
    if (!topbarItem) return;
    openModal({
      eyebrow: 'Pengumuman Penting',
      title: topbarItem.title,
      html: '<p>' + esc(topbarItem.body) + '</p>',
      actions: [{ label: 'Tutup', variant: 'btn-navy', onClick: closeModal }]
    });
  });

  $('#topbarClose').addEventListener('click', () => {
    topbarEl.hidden = true;
    try { if (topbarItem) localStorage.setItem(TOPBAR_KEY, topbarItem.id); } catch (e) {}
    toast('Banner pengumuman disembunyikan.', 'info');
  });

  /* ==========================================================
     17. FORMULIR KONTAK
     ========================================================== */
  (function initContactForm() {
    const form = $('#contactForm');
    const submitBtn = $('#submitBtn');
    const formStatus = $('#formStatus');

    const fields = {
      nama: { el: $('#nama'), err: $('#err-nama') },
      kontak: { el: $('#kontakInput'), err: $('#err-kontak') },
      subjek: { el: $('#subjek'), err: $('#err-subjek') },
      pesan: { el: $('#pesan'), err: $('#err-pesan') }
    };
    const consent = $('#persetujuan');
    const consentErr = $('#err-persetujuan');

    function setError(key, message) {
      const f = fields[key];
      if (!f) return;
      f.err.textContent = message || '';
      f.el.setAttribute('aria-invalid', message ? 'true' : 'false');
    }

    function validate() {
      let ok = true;

      const nama = fields.nama.el.value.trim();
      if (nama.length < 3) { setError('nama', 'Nama minimal 3 karakter.'); ok = false; } else setError('nama', '');

      const kontak = fields.kontak.el.value.trim();
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      const phoneRe = /^[0-9+\-\s()]{8,20}$/;
      if (!kontak) { setError('kontak', 'Email atau nomor kontak wajib diisi.'); ok = false; }
      else if (kontak.indexOf('@') !== -1 && !emailRe.test(kontak)) { setError('kontak', 'Format email tidak valid.'); ok = false; }
      else if (kontak.indexOf('@') === -1 && !phoneRe.test(kontak)) { setError('kontak', 'Format nomor kontak tidak valid.'); ok = false; }
      else setError('kontak', '');

      if (fields.subjek.el.value.trim().length < 3) { setError('subjek', 'Subjek minimal 3 karakter.'); ok = false; } else setError('subjek', '');
      if (fields.pesan.el.value.trim().length < 10) { setError('pesan', 'Pesan minimal 10 karakter.'); ok = false; } else setError('pesan', '');

      if (!consent.checked) {
        consentErr.textContent = 'Persetujuan penggunaan data wajib dicentang.';
        consent.setAttribute('aria-invalid', 'true');
        ok = false;
      } else {
        consentErr.textContent = '';
        consent.setAttribute('aria-invalid', 'false');
      }
      return ok;
    }

    Object.keys(fields).forEach((key) => {
      fields[key].el.addEventListener('input', () => setError(key, ''));
    });
    consent.addEventListener('change', () => {
      if (consent.checked) { consentErr.textContent = ''; consent.setAttribute('aria-invalid', 'false'); }
    });


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  formStatus.textContent = '';
  formStatus.className = 'form-status';

  if (!validate()) {
    formStatus.textContent = 'Periksa kembali kolom yang ditandai merah.';
    formStatus.classList.add('is-error');

    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span> Mengirim...';

  try {
    const response = await fetch(
      'https://uahfjcvaplypurhwzfbt.supabase.co/functions/v1/admin-auth',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'sb_publishable_S3cEUafXUwWUCyLdwSmFDw_-rVmzelZ'
        },
        body: JSON.stringify({
          action: 'submit_contact',
          nama: fields.nama.el.value.trim(),
          kontak: fields.kontak.el.value.trim(),
          subjek: fields.subjek.el.value.trim(),
          pesan: fields.pesan.el.value.trim()
        })
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Pesan gagal dikirim.');
    }

    formStatus.textContent = 'Pesan berhasil dikirim. Terima kasih telah menghubungi kami.';
    formStatus.classList.add('is-success');

    toast('Pesan berhasil dikirim.', 'success');

    form.reset();

    Object.keys(fields).forEach((key) => setError(key, ''));

    consentErr.textContent = '';
    consent.setAttribute('aria-invalid', 'false');

  } catch (error) {
    console.error('Kesalahan pengiriman pesan:', error);

    formStatus.textContent =
      error.message || 'Pesan gagal dikirim. Silakan coba kembali.';
    formStatus.classList.add('is-error');

    toast('Pesan gagal dikirim.', 'error');

  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML =
      '<svg class="icon" viewBox="0 0 512 512" aria-hidden="true"><use href="icons.svg#paper-plane"></use></svg> Kirim Pesan';
  }
});
  })();

  /* ==========================================================
     18. KEBIJAKAN PRIVASI
     ========================================================== */
  $('#privacyLink').addEventListener('click', (e) => {
    e.preventDefault();
    openModal({
      eyebrow: 'Informasi',
      title: 'Kebijakan Privasi',
      html:
        '<p>Halaman ini menjelaskan bagaimana data yang Anda kirim melalui formulir kontak digunakan.</p>' +
        '<h4>Data yang Dikumpulkan</h4>' +
        '<p>Nama, alamat email atau nomor kontak, subjek, dan isi pesan.</p>' +
        '<h4>Tujuan Penggunaan</h4>' +
        '<p>Data hanya digunakan untuk menanggapi pesan yang Anda kirimkan.</p>' +
        '<h4>Penyimpanan</h4>' +
        '<p>Formulir sedang dalam proses integrasi sistem. Data yang Anda kirim akan dijaga kerahasiaannya ' +
        'dan tidak dibagikan kepada pihak lain tanpa izin.</p>',
      actions: [{ label: 'Mengerti', variant: 'btn-navy', onClick: closeModal }]
    });
  });

  /* ==========================================================
     19. KEYBOARD GLOBAL
     ========================================================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxOverlay.classList.contains('open')) { closeLightbox(); return; }
      if (modalOverlay.classList.contains('open')) { closeModal(); return; }
      if (mainNav.classList.contains('open')) { closeMobileNav(); return; }
    }
    if (lightboxOverlay.classList.contains('open')) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); lbPrev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); lbNext(); }
    }
    if (e.key === 'Tab') {
      if (modalOverlay.classList.contains('open')) trapFocus(modalOverlay, e);
      else if (lightboxOverlay.classList.contains('open')) trapFocus(lightboxOverlay, e);
    }
  });

  /* ==========================================================
     20. TAHUN FOOTER
     ========================================================== */
  $('#year').textContent = String(new Date().getFullYear());

  /* ==========================================================
     TAMBAHAN A: KOLEKTAN
     ========================================================== */
  // Tambah data baru di ATAS daftar ini (urut terbaru dulu). Isi 'words' manual.
  const kolektanData = []; // Tidak ada nominal contoh/palsu; data harus dimasukkan petugas.

  function rupiah(n) {
    return 'Rp' + new Intl.NumberFormat('id-ID').format(n);
  }

  function dateInChurchZone() {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Jayapura', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(new Date());
    const get = (t) => parts.find((p) => p.type === t).value;
    return get('year') + '-' + get('month') + '-' + get('day');
  }
  function weekRangeForDate(iso) {
    const d = new Date(iso + 'T00:00:00Z');
    const day = d.getUTCDay() || 7;
    const start = new Date(d); start.setUTCDate(d.getUTCDate() - day + 1);
    const end = new Date(start); end.setUTCDate(start.getUTCDate() + 6);
    const fmt = (x) => x.getUTCFullYear() + '-' + String(x.getUTCMonth() + 1).padStart(2, '0') + '-' + String(x.getUTCDate()).padStart(2, '0');
    return { start: fmt(start), end: fmt(end) };
  }
  function renderKolektan() {
    const grid = $('#kolektanGrid');
    const totalBox = $('#kolektanTotal');
    if (!grid || !totalBox) return;
    const filter = $('#kolektanArchiveFilter');
    const month = filter ? filter.value : '';
    const today = dateInChurchZone();
    const week = weekRangeForDate(today);
    const currentWeekRows = kolektanData.filter((k) => k.date >= week.start && k.date <= week.end);
    const visible = kolektanData.filter((k) => !month || k.date.slice(0, 7) === month)
      .slice().sort((a, b) => b.date.localeCompare(a.date));
    grid.innerHTML = '';
    if (!visible.length) {
      grid.innerHTML = '<p class="adm-empty">' + (month ? 'Belum ada arsip kolektan pada bulan yang dipilih.' : 'Belum ada dokumentasi kolektan yang dipublikasikan.') + '</p>';
    } else {
      visible.forEach((k) => {
        const card = document.createElement('article');
        card.className = 'card kolektan-card';
        const proof = k.photo
          ? '<div class="kolektan-proof"><img src="' + esc(k.photo) + '" alt="Foto bukti kolektan ' + esc(formatDateID(k.date)) + '" loading="lazy"></div>'
          : '<p class="kolektan-no-proof">Foto belum diunggah.</p>';
        card.innerHTML =
          '<p class="kolektan-date">' + icon('calendar') + ' ' + esc(formatDateID(k.date)) + '</p>' +
          '<p class="kolektan-amount">' + esc(rupiah(k.total)) + '</p>' +
          '<p class="kolektan-words">(' + esc(k.words || terbilang(k.total)) + ')</p>' +
          proof +
          (k.note ? '<p class="kolektan-note">' + esc(k.note) + '</p>' : '') +
          '<p><span class="kolektan-status">' + esc(k.status || 'Dokumentasi') + '</span></p>';
        grid.appendChild(card);
      });
    }
    const weeklyTotal = currentWeekRows.reduce((sum, k) => sum + Number(k.total || 0), 0);
    const weekLabel = formatDateID(week.start) + ' – ' + formatDateID(week.end);
    totalBox.innerHTML = '<span><strong>Total minggu berjalan</strong><br><small>' + esc(weekLabel) + '</small><br>' +
      (currentWeekRows.length ? 'Berdasarkan ' + currentWeekRows.length + ' catatan minggu ini.' : 'Belum ada data minggu ini.') +
      '</span><strong>' + esc(rupiah(weeklyTotal)) + '</strong>';
  }
  const kolektanArchiveFilter = $('#kolektanArchiveFilter');
  if (kolektanArchiveFilter) kolektanArchiveFilter.addEventListener('change', renderKolektan);
  const kolektanArchiveReset = $('#kolektanArchiveReset');
  if (kolektanArchiveReset) kolektanArchiveReset.addEventListener('click', () => {
    if (kolektanArchiveFilter) kolektanArchiveFilter.value = '';
    renderKolektan();
  });

  /* ==========================================================
     TAMBAHAN C: SUMBANGAN
     ========================================================== */
  const sumbData = { bank: 'BCA', norek: '610976878' };

  function renderSumbangan() {
    const b = $('#sumbBank'), n = $('#sumbNorek');
    if (b) b.textContent = sumbData.bank;
    if (n) n.textContent = sumbData.norek;
  }

  (function initSumbangan() {
    const btn = $('#copyNorek');
    const norek = $('#sumbNorek');
    if (!btn || !norek) return;
    btn.addEventListener('click', () => {
      copyText(norek.textContent.trim())
        .then(() => toast('Nomor rekening berhasil disalin.', 'success'))
        .catch(() => toast('Gagal menyalin nomor rekening.', 'error'));
    });
  })();

  /* ==========================================================
     TAMBAHAN D: SEKTOR, UNIT & BINAKEL
     ========================================================== */
  // CARA MENGISI DATA:
  // - host.name / host.photo   : nama & foto tuan rumah   (photo contoh: '/images/tuan-rumah.jpg')
  // - leader.name / .status / .photo : nama, status & foto pemimpin ibadah
  // - place / time / day       : tempat ibadah, jam (24 jam, WIT), hari (0=Minggu ... 6=Sabtu)
  // - tanggal (binakel)        : keterangan minggu/tanggal ibadah
  // Photo kosong ('') = tampil kotak "FOTO 3 × 4".
  // (Super Admin juga dapat mengisi semua ini lewat panel admin, tab "Sektor".)
  function mkPerson(name) { return { name: name, photo: '' }; }
  function mkLeader() { return { name: 'Nama Pemimpin Ibadah', status: 'Status / Jabatan', photo: '' }; }

  function mkUnit(no) {
    return {
      id: 'unit' + no, name: 'Unit ' + no,
      day: 3, time: '17:00',
      place: 'Rumah Tuan Rumah Unit ' + no,
      host: mkPerson('Nama Tuan Rumah'),
      leader: mkLeader()
    };
  }

  function mkBinakel(count) {
    const groups = Array.apply(null, { length: count }).map((_, i) => {
      const n = i + 1;
      return {
        id: 'kel' + n, name: 'Kelompok ' + n,
        tanggal: 'Minggu ke-1 dan ke-2 setiap bulan',
        day: 5, time: '17:00',
        place: 'Rumah Tuan Rumah Kelompok ' + n,
        host: mkPerson('Nama Tuan Rumah'),
        leader: mkLeader()
      };
    });
    return { groups: groups };
  }

  // [id, nama sektor, jumlah unit, jumlah kelompok binakel]
  const sektorData = [
    ['embun-hermon', 'Embun Hermon', 2, 4],
    ['imanuel', 'Imanuel', 2, 4],
    ['maranatha', 'Maranatha', 2, 4],
    ['ebenheazer', 'Ebenheazer', 2, 4],
    ['efrata', 'Efrata', 2, 4],
    ['lahai-roi', 'Lahai-Roi', 3, 6]
  ].map((s) => ({
    id: s[0], name: s[1],
    units: Array.apply(null, { length: s[2] }).map((_, i) => mkUnit(i + 1)),
    binakel: mkBinakel(s[3])
  }));

  function getSektor(id) { return sektorData.filter((s) => s.id === id)[0]; }
  function jamLabel(t) { return t + ' WIT'; }

  function sekPhoto(p, name) {
    return p
      ? '<img src="' + esc(imageUrl(p, 400)) + '" alt="Foto ' + esc(name) + '" onerror="imgFallback(this)" />'
      : 'FOTO<br>3 × 4';
  }

  // Perbarui isi modal tanpa membuka ulang (fokus & tombol tutup tetap aman)
  function setModalContent(opts) {
    modalEyebrowEl.textContent = opts.eyebrow || '';
    modalTitleEl.textContent = opts.title || 'Informasi';
    modalBodyEl.innerHTML = opts.html || '';
    modalFootEl.innerHTML = '';
    (opts.actions || []).forEach((action) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn ' + (action.variant || 'btn-ghost') + ' btn-sm';
      btn.textContent = action.label;
      btn.addEventListener('click', action.onClick);
      modalFootEl.appendChild(btn);
    });
    modalBodyEl.scrollTop = 0;
  }
  function sekShow(opts, fresh) { if (fresh) openModal(opts); else setModalContent(opts); }

  // Tata letak detail: tuan rumah (kiri atas) + info (kanan), pemimpin ibadah (kanan bawah)
  function sekDetailHtml(o) {
    const rows = o.rows.map((r) =>
      '<li>' + icon(r.icon) + '<div><small>' + esc(r.label) + '</small><span>' + esc(r.value) + '</span></div></li>'
    ).join('');
    return '<div class="sek-detail">' +
      '<div class="sek-top">' +
        '<figure class="sek-person">' +
          '<div class="org-photo sek-photo">' + sekPhoto(o.host.photo, o.host.name) + '</div>' +
          '<figcaption><strong>' + esc(o.host.name) + '</strong><small>Tuan Rumah</small></figcaption>' +
        '</figure>' +
        '<div class="sek-info"><h4>' + esc(o.title) + '</h4><ul class="sek-rows">' + rows + '</ul></div>' +
      '</div>' +
      '<div class="sek-leader">' +
        '<div class="sek-leader-text"><small>Pemimpin Ibadah</small><strong>' + esc(o.leader.name) + '</strong><span>' + esc(o.leader.status) + '</span></div>' +
        '<div class="org-photo sek-photo">' + sekPhoto(o.leader.photo, o.leader.name) + '</div>' +
      '</div>' +
    '</div>';
  }

  function sekActions(backFn, backLabel) {
    const acts = [];
    if (backFn) acts.push({ label: backLabel || 'Kembali', variant: 'btn-ghost', onClick: backFn });
    acts.push({ label: 'Tutup', variant: 'btn-navy', onClick: closeModal });
    return acts;
  }

  function showSektor(sid, fresh) {
    const s = getSektor(sid);
    if (!s) return;
    const unitPills = s.units.map((u) =>
      '<button type="button" class="sek-pill" data-sek-go="unit|' + esc(s.id) + '|' + esc(u.id) + '">' +
        icon('users') + '<span><strong>' + esc(u.name) + '</strong><small>' + esc(dayNames[u.day]) + ', ' + esc(jamLabel(u.time)) + '</small></span>' +
      '</button>'
    ).join('');
    sekShow({
      eyebrow: 'Sektor',
      title: 'Sektor ' + s.name,
      html:
        '<p>Pilih unit ibadah atau ibadah binakel untuk melihat tuan rumah, tempat, jam, dan pemimpin ibadah.</p>' +
        '<h4>Unit Ibadah</h4><div class="sek-pills">' + unitPills + '</div>' +
        '<h4>Ibadah Binakel</h4><div class="sek-pills">' +
          '<button type="button" class="sek-pill" data-sek-go="binakel|' + esc(s.id) + '">' +
            icon('people-group') + '<span><strong>Ibadah Binakel</strong><small>' + s.binakel.groups.length + ' kelompok binakel</small></span>' +
          '</button>' +
        '</div>',
      actions: sekActions()
    }, fresh);
  }

  function showSekUnit(sid, uid, fresh) {
    const s = getSektor(sid);
    const u = s && s.units.filter((x) => x.id === uid)[0];
    if (!u) return;
    sekShow({
      eyebrow: 'Sektor ' + s.name,
      title: s.name + ' — ' + u.name,
      html: sekDetailHtml({
        title: u.name,
        host: u.host, leader: u.leader,
        rows: [
          { icon: 'church', label: 'Tempat Ibadah', value: u.place },
          { icon: 'calendar', label: 'Hari', value: 'Setiap ' + dayNames[u.day] },
          { icon: 'clock', label: 'Jam', value: jamLabel(u.time) }
        ]
      }),
      actions: sekActions(() => showSektor(sid, false), 'Kembali ke Sektor')
    }, fresh);
  }

  function showSekBinakel(sid, fresh) {
    const s = getSektor(sid);
    if (!s) return;
    const pills = s.binakel.groups.map((g) =>
      '<button type="button" class="sek-pill" data-sek-go="kel|' + esc(s.id) + '|' + esc(g.id) + '">' +
        icon('users') + '<span><strong>' + esc(g.name) + '</strong><small>' + esc(jamLabel(g.time)) + '</small></span>' +
      '</button>'
    ).join('');
    sekShow({
      eyebrow: 'Sektor ' + s.name,
      title: 'Ibadah Binakel — ' + s.name,
      html:
        '<p>Pilih salah satu kelompok binakel untuk melihat tuan rumah, tempat, tanggal, jam, dan pemimpin ibadah.</p>' +
        '<h4>Kelompok Binakel</h4><div class="sek-pills">' + pills + '</div>',
      actions: sekActions(() => showSektor(sid, false), 'Kembali ke Sektor')
    }, fresh);
  }

  // Detail satu kelompok binakel
  function showSekKelompok(sid, key, fresh) {
    const s = getSektor(sid);
    if (!s) return;
    if (!key) { showSekBinakel(sid, fresh); return; }
    const g = s.binakel.groups.filter((x) => x.id === key)[0];
    if (!g) return;
    sekShow({
      eyebrow: 'Binakel — Sektor ' + s.name,
      title: s.name + ' — ' + g.name,
      html: sekDetailHtml({
        title: g.name,
        host: g.host, leader: g.leader,
        rows: [
          { icon: 'church', label: 'Tempat Ibadah', value: g.place },
          { icon: 'calendar', label: 'Tanggal', value: g.tanggal },
          { icon: 'clock', label: 'Jam', value: jamLabel(g.time) }
        ]
      }),
      actions: sekActions(() => showSekBinakel(sid, false), 'Kembali ke Binakel')
    }, fresh);
  }

  // Navigasi di dalam modal (unit, binakel, kelompok)
  modalBodyEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-sek-go]');
    if (!b) return;
    const p = b.getAttribute('data-sek-go').split('|');
    if (p[0] === 'unit') showSekUnit(p[1], p[2], false);
    else if (p[0] === 'binakel') showSekBinakel(p[1], false);
    else if (p[0] === 'kel') showSekKelompok(p[1], p[2], false);
  });

  // Data unit & binakel yang ditampilkan di bagian Jadwal Ibadah (kategori: Unit, Binakel)
  function sektorSearchItems() {
    const out = [];
    sektorData.forEach((s) => {
      s.units.forEach((u) => {
        out.push({
          id: 'sek-' + s.id + '-' + u.id,
          title: 'Sektor ' + s.name + ' — ' + u.name,
          category: 'unit', categoryLabel: 'Unit',
          day: u.day, time: u.time, place: u.place,
          note: 'Unit ibadah sektor ' + s.name + '. Tuan rumah: ' + u.host.name + '. Pemimpin ibadah: ' + u.leader.name + '.',
          sektor: { type: 'unit', sid: s.id, key: u.id }
        });
      });
      s.binakel.groups.forEach((g) => {
        out.push({
          id: 'sek-' + s.id + '-' + g.id,
          title: 'Binakel ' + s.name + ' — ' + g.name,
          category: 'binakel', categoryLabel: 'Binakel',
          day: g.day, time: g.time, place: g.place,
          note: g.tanggal + '. Tuan rumah: ' + g.host.name + '. Pemimpin ibadah: ' + g.leader.name + '.',
          noNext: true,
          sektor: { type: 'kel', sid: s.id, key: g.id }
        });
      });
    });
    return out;
  }

  function renderSektor() {
    const grid = $('#sektorGrid');
    if (!grid) return;
    grid.innerHTML = '';
    sektorData.forEach((s) => {
      const card = document.createElement('article');
      card.className = 'card ministry-card sektor-card';
      card.innerHTML =
        '<div class="value-icon">' + icon('people-group') + '</div>' +
        '<h3>Sektor ' + esc(s.name) + '</h3>' +
        '<p>' + s.units.length + ' unit ibadah dan ' + s.binakel.groups.length + ' kelompok binakel.</p>' +
        '<button type="button" class="btn btn-ghost btn-sm" data-sektor="' + esc(s.id) + '">' +
          'Lihat Unit ' + icon('arrow-right') +
        '</button>';
      grid.appendChild(card);
    });
  }

  (function initSektorGrid() {
    const grid = $('#sektorGrid');
    if (!grid) return;
    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-sektor]');
      if (btn) showSektor(btn.getAttribute('data-sektor'), true);
    });
  })();

  /* ==========================================================
     TAMBAHAN B: STRUKTUR KEPENGURUSAN
     ========================================================== */
  // photo: isi path foto nanti, contoh '/images/ketua.jpg'. Kosong = placeholder "FOTO 3 × 4".
  // Nama & tugas disalin dari gambar; mohon cocokkan lagi dengan dokumen resmi.
  // (Super Admin dapat mengubah nama, sektor, tugas, dan foto lewat panel admin, tab "Struktur".)
  const strukturData = {
    period: '2025/2030',
    // Logo resmi GPM: simpan file di 'gambar/logo-gpm.jpeg' (ubah path jika berbeda), atau unggah lewat panel admin.
    logo: 'gambar/logo-gpm.jpeg',
    ketua:      { role: 'Ketua Majelis Jemaat',       name: 'Pdt. Y. Y. Tahalele, S.Th', photo: 'gambar/ketua.jpg' },
    wakil:      { role: 'Wakil Ketua Majelis Jemaat', name: 'Pnt. Raristam L. Latuinury/K', photo: '' },
    sekretaris: { role: 'Sekretaris',        name: 'Pnt. Tamahum - Latuinury', photo: '' },
    wSekretaris:{ role: 'Wakil Sekretaris',  name: 'Pnt. Johana Soplanty/M', photo: '' },
    bendahara:  { role: 'Bendahara',         name: 'Pnt. Oeboray R. Kobunwair', photo: '' },
    wBendahara: { role: 'Wakil Bendahara',   name: 'Dkn. M. L. Tufail', photo: '' },
    anggota:    { role: 'Anggota',           name: 'Pdt. N. Arena Hukom, S.Si', photo: '' },
    seksi: [
      { role: 'Ketua Seksi PTPU', name: 'Pnt. Willem Makattita', photo: '', members: [
        { name: 'Pnt. Helena Lakotamy/K', photo: '', tasks: ['Pendataan Anak Jemaat','Pembinaan Warga Gereja','Pengajaran'] },
        { name: 'Dkn. Marfit Lakotamy/L', photo: '', tasks: ['Pembinaan Pemuda','Pembinaan Persekutuan','Jumlah dan Anak Gereja'] },
        { name: 'Pnt. Salomi Tameloy/S', photo: '', tasks: ['Pembinaan Keluarga dan Anak','Pembinaan Wanita Gereja'] },
        { name: 'Dkn. Mestanisa Siahaitani.', photo: '', tasks: ['Pembinaan Kaum Bapak','Pembinaan Pester dan Kontekting'] }
      ]},
      { role: 'Ketua Seksi PIPK', name: 'Pnt. Idorwarky A. Katuwora', photo: '', members: [
        { name: 'Pnt. Y. James Lakotof', photo: '', tasks: ['Pemberitaan Kedi Sitaan','Pembinaan Kelompok','Pengembangan Pelayanan'] },
        { name: 'Dkn. Robby Tukley', photo: '', tasks: ['Pelayanan Hukum dan Advokasi','Sosial Pemberdayaan Umat'] },
        { name: 'Dkn. Tramahe Nuaranof', photo: '', tasks: ['Pelayanan Kesehatan','Pelayanan Pendidikan'] }
      ]},
      { role: 'Ketua Seksi POS', name: 'Pnt. Uman Lptley', photo: '', members: [
        { name: 'Dkn. Yulinda Tameloy/L', photo: '', tasks: ['Pembinaan Kerei Jemaat Lainnya','Pembinaan Gorga','Pembinaan Keluarga Muda'] },
        { name: 'Dkn. Charlton Koletttura', photo: '', tasks: ['Pelayanan Liturgi dan Khotbah','Girdiaya','Bincana Alam dan Sosial'] }
      ]},
      { role: 'Ketua Seksi PPK', name: 'Pnt. Ishak Tithawa', photo: '', members: [
        { name: 'Dkn. Rina Tameloy/L', photo: '', tasks: ['Pembinaan Kesehatan Jemaat','Pembinaan Keluarga','Pembinaan Sumber-Sumber Daya Gereja'] },
        { name: 'Dkn. Yusuf Tameloy', photo: '', tasks: ['Pembinaan Pengembangan Jemaat','Pembinaan Kewirausahaan'] },
        { name: 'Dkn. Albertina Oraplean', photo: '', tasks: ['Pengelolaan Program','Pembinaan Perempuan dan Anak'] },
        { name: 'Dkn. Libet Kotlura', photo: '', tasks: ['Pembinaan Pendidikan dan Keterampilan','Pembinaan Keluarga Muda'] },
        { name: 'Pnt. Welom Nusamaru', photo: '', tasks: ['Pengelolaan Tormas','Dokumentasi dan Publikasi'] }
      ]}
    ],
    pilauNila: [
      { name: 'Pnt. Yannes Lounura', photo: '' },
      { name: 'Dkn. Welom Tamelloy', photo: '' }
    ],
    tandaTanganSekretaris: 'Pnt. Y. Y. Leunura'
  };

  // SEKTOR PELAYANAN tiap orang: tambahkan properti pada datanya di atas, contoh:
  //   { name: 'Pnt. Willem Makattita', photo: '', sektor: '1 — Nama Sektor' }
  // Jika kosong, tampil "Sektor Pelayanan: —" (tidak dikarang).

  function ocPhoto(p) {
    return p.photo
      ? '<img src="' + esc(imageUrl(p.photo, 400)) + '" alt="Foto ' + esc(p.name) + '" loading="lazy" onerror="imgFallback(this)" />'
      : 'FOTO<br>3 × 4';
  }

  function ocSektor(p) {
    return '<p class="oc-sektor">Sektor Pelayanan: ' + esc(p.sektor || '—') + '</p>';
  }

  // cls: kelas posisi/panah, contoh 'gc2 gr1 v-down'
  function ocCard(p, cls) {
    const tasks = (p.tasks && p.tasks.length)
      ? '<ul class="oc-tasks">' + p.tasks.map((t) => '<li>' + esc(t) + '</li>').join('') + '</ul>' : '';
    return '<div class="oc-card ' + (cls || '') + '">' +
      (p.role ? '<p class="oc-role">' + esc(p.role) + '</p>' : '') +
      '<div class="org-photo oc-photo">' + ocPhoto(p) + '</div>' +
      '<p class="oc-name">' + esc(p.name) + '</p>' +
      ocSektor(p) + tasks + '</div>';
  }

  function renderStruktur() {
    const box = $('#strukturChart');
    if (!box) return;
    const d = strukturData;
    const logoUrl = imageUrl(d.logo || '', 600);
    const periodEl = $('#strukturPeriod');
    if (periodEl) periodEl.textContent = 'Periode ' + (d.period || '');

    const head =
      '<header class="poster-head">' +
        '<div class="poster-logo">' +
          '<img src="' + esc(logoUrl) + '" alt="Logo Gereja Protestan Maluku" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\'" />' +
          '<span class="poster-logo-ph">LOGO<br>GPM</span>' +
        '</div>' +
        '<div class="poster-titles">' +
          '<h3 class="poster-title">STRUKTUR</h3>' +
          '<p class="poster-sub">MAJELIS JEMAAT GPM BUMEI SIFLURU</p>' +
          '<p class="poster-period">Periode ' + esc(d.period || '') + '</p>' +
        '</div>' +
      '</header>';

    const top =
      '<div class="oc-top">' +
        ocCard(d.ketua,       'gc2 gr1 v-down') +
        ocCard(d.sekretaris,  'gc1 gr2 v-down h-both') +
        ocCard(d.wakil,       'gc2 gr2 v-down h-both') +
        ocCard(d.bendahara,   'gc3 gr2 v-down') +
        ocCard(d.wSekretaris, 'gc1 gr3 h-right') +
        ocCard(d.anggota,     'gc2 gr3 v-down') +
        ocCard(d.wBendahara,  'gc3 gr3 h-left') +
      '</div>';

    const cols = d.seksi.map((s) =>
      '<div class="oc-col">' + ocCard(s, 'oc-head') +
      s.members.map((m, i) => ocCard({ name: (i + 1) + '. ' + m.name, photo: m.photo, sektor: m.sektor, tasks: m.tasks }, 'oc-member')).join('') +
      '</div>').join('');
    const drops = d.seksi.map(() => '<span class="oc-drop"></span>').join('');

    const sections =
      '<div class="oc-sections">' +
        '<div class="oc-bus" aria-hidden="true">' + drops + '</div>' +
        '<div class="oc-grid">' + cols + '</div>' +
      '</div>';

    const pilau =
      '<div class="oc-pilau">' +
        '<div class="oc-card oc-pilau-card">' +
          '<p class="oc-role">Majelis Pulau Nila</p>' +
          '<div class="oc-pilau-list">' +
            d.pilauNila.map((p, i) =>
              '<div class="oc-person">' +
                '<div class="org-photo oc-photo">' + ocPhoto(p) + '</div>' +
                '<p class="oc-name">' + (i + 1) + '. ' + esc(p.name) + '</p>' +
                ocSektor(p) +
              '</div>').join('') +
          '</div>' +
        '</div>' +
      '</div>';

    const foot =
      '<footer class="poster-foot">' +
        '<p class="poster-foot-title">Majelis Jemaat</p>' +
        '<div class="poster-sign">' +
          '<div><span>Ketua</span><i></i><strong>' + esc(d.ketua.name) + '</strong></div>' +
          '<div><span>Sekretaris</span><i></i><strong>' + esc(d.tandaTanganSekretaris) + '</strong></div>' +
        '</div>' +
      '</footer>';

    box.innerHTML =
      '<div class="poster" id="strukturPoster" style="--poster-logo:url(\'' + logoUrl + '\')">' +
        head +
        '<div class="poster-body"><div class="oc">' + top + sections + pilau + foot + '</div></div>' +
      '</div>';
  }

  // Tombol cetak: hanya poster struktur yang dicetak (pilih A4 atau A3 di dialog cetak)
  (function initPrintStruktur() {
    const btn = $('#printStruktur');
    if (!btn) return;
    btn.addEventListener('click', () => {
      document.body.classList.add('print-struktur');
      window.print();
    });
    window.addEventListener('afterprint', () => document.body.classList.remove('print-struktur'));
  })();

  /* ==========================================================
     TAMBAHAN E: LOGIN & PANEL ADMIN
     ========================================================== */
  // PENTING: login ini berjalan di browser saja (tanpa server).
  // - Perubahan jadwal, kolekta, akun, dan seluruh isi website tersimpan di browser perangkat yang dipakai admin,
  //   TIDAK otomatis terlihat oleh pengunjung/admin lain.
  // - Kata sandi disimpan sebagai hash (bukan teks biasa), tetapi tetap bukan pengamanan sungguhan.
  //
  // GANTI KATA SANDI AKUN BAWAAN: buat hash SHA-256 dari teks  gpm-bsf:NAMAPENGGUNA:SANDIBARU
  //   contoh teks: gpm-bsf:admin:SandiBaruSaya  -> tempel hasilnya pada 'hash' akun yang sesuai.
  const SUPABASE_URL = 'https://uahfjcvaplypurhwzfbt.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_S3cEUafXUwWUCyLdwSmFDw_-rVmzelZ';
  const ADMIN_AUTH_URL = SUPABASE_URL + '/functions/v1/admin-auth';
  
async function uploadSchedulePhoto(file, scheduleId, photoType, accessToken) {
  if (!file) return null;

  if (!file.type.startsWith('image/')) {
    throw new Error('File harus berupa gambar.');
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Ukuran foto maksimal 5 MB.');
  }

  const extension = (file.name.split('.').pop() || 'jpg')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  const safeId = String(scheduleId).replace(/[^a-zA-Z0-9_-]/g, '_');
  const fileName = Date.now() + '_' + photoType + '.' + extension;
  const path = safeId + '/' + fileName;

  const encodedPath = path
    .split('/')
    .map(encodeURIComponent)
    .join('/');

  const response = await fetch(
    SUPABASE_URL + '/storage/v1/object/schedule-photos/' + encodedPath,
    {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_PUBLISHABLE_KEY,
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': file.type,
        'x-upsert': 'true'
      },
      body: file
    }
  );

  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(
      result.message || result.error || 'Gagal mengunggah foto ke Supabase.'
    );
  }

  return path;
}

function schedulePhotoPublicUrl(path) {
  if (!path) return '';
  if (/^https?:\/\//i.test(path) || path.indexOf('data:') === 0 || path.charAt(0) === '/') return path;
  return SUPABASE_URL + '/storage/v1/object/public/schedule-photos/' +
    path.split('/').map(encodeURIComponent).join('/');
}

function schedulePhotoPath(value) {
  if (!value) return null;
  const marker = '/storage/v1/object/public/schedule-photos/';
  const at = String(value).indexOf(marker);
  if (at >= 0) return decodeURIComponent(String(value).slice(at + marker.length));
  return value;
}

async function uploadScheduleDataUrl(dataUrl, scheduleId, photoType, accessToken) {
  if (!dataUrl || dataUrl.indexOf('data:') !== 0) return schedulePhotoPath(dataUrl);
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  const file = new File([blob], photoType + '.jpg', { type: blob.type || 'image/jpeg' });
  return await uploadSchedulePhoto(file, scheduleId, photoType, accessToken);
}

async function loadScheduleFromSupabase() {
  try {
    const response = await fetch(
      SUPABASE_URL + '/rest/v1/schedule_overrides?select=*',
      {
        headers: {
          'apikey': SUPABASE_PUBLISHABLE_KEY
        }
      }
    );

    if (!response.ok) {
      throw new Error('Gagal mengambil data jadwal dari Supabase.');
    }

    const data = await response.json();

    scheduleOverrides = {};

    data.forEach((item) => {
      scheduleOverrides[item.id] = {
        place: item.place,
        day: item.day,
        time: item.time,
        week: item.week,
        by: item.updated_by,
        at: item.updated_at,
        title: item.title,
        note: item.note,
        foto_tuan_rumah: item.foto_tuan_rumah,
        foto_pemimpin_ibadah: item.foto_pemimpin_ibadah,
        nama_tuan_rumah: item.nama_tuan_rumah || '',
        nama_pemimpin_ibadah: item.nama_pemimpin_ibadah || '',
        status_pemimpin_ibadah: item.status_pemimpin_ibadah || ''
      };
    });

    applyScheduleOverrides();

    renderSchedules();

  } catch (error) {
    console.error('Gagal memuat jadwal:', error);
  }
}

  const AUTH_PREFIX = 'gpm-bsf:';
  const adminAccounts = [
    { id: 'superadmin-1', username: 'supergereja', name: 'Super Admin 1', role: 'superadmin', hash: '0ee633214e76f9b8ae6a48c723fd4cfe92d40d7c97d66baa99b4229b17799ef3' },
    { id: 'superadmin-2', username: 'superkmj', name: 'Super Admin 2', role: 'superadmin', hash: 'a13e0077d427634dd50cd4b150968b2a8f2266f767d792b45643dfc6b40a61f5' },
    { id: 'sektor-embun-hermon', username: 'admin_hermon', name: 'Admin Sektor Embun Hermon', role: 'admin', sector: 'Embun Hermon', hash: '8d4de99c42607f0779ab28ca2bf3a7207ab393f3e5dd36afe504c3c1cb5cf594' },
    { id: 'sektor-imanuel', username: 'admin_imanuel', name: 'Admin Sektor Imanuel', role: 'admin', sector: 'Imanuel', hash: '171955253501a997b007ecb60a009d40190fef38ce6fcf2aeb0470e5f8b00a1c' },
    { id: 'sektor-maranatha', username: 'admin_maranatha', name: 'Admin Sektor Maranatha', role: 'admin', sector: 'Maranatha', hash: '5d34f060f5b1867490a7e75713f3c5539f1c7c32142dac140e3d65185301495a' },
    { id: 'sektor-ebenhaezer', username: 'admin_ebenhaezer', name: 'Admin Sektor Ebenhaezer', role: 'admin', sector: 'Ebenhaezer', hash: '7ef3b0c686adb5e71d0c566718a608a00aa7753a3c7deb8169d57d8b0644c896' },
    { id: 'sektor-efrata', username: 'admin_efrata', name: 'Admin Sektor Efrata', role: 'admin', sector: 'Efrata', hash: '50c7ca35c3754be79c512a8fe640a9dff12f5685010feef286302f3d8ba5ba55' },
    { id: 'sektor-lahairoi', username: 'admin_lahairoi', name: 'Admin Sektor Lahairoi', role: 'admin', sector: 'Lahairoi', hash: 'a3d0842c38e8ec8bc132264caa3c4426268cb23557377d2d87cf8515bb8688ad' },
    { id: 'bendahara-1', username: 'bendahara_keuangan1', name: 'Admin Bendahara 1', role: 'bendahara', hash: '636eaf57329022c93fff5875109da1c4c2f1a8905e750958e515849db1df0e10' },
    { id: 'bendahara-2', username: 'bendahara_keuangan2', name: 'Admin Bendahara 2', role: 'bendahara', hash: 'f8ffad89248597032cc79d00da2c304c9d3183b1d14b7b5c4cc7a9326b16a661' }
  ];
  const ROLE_LABEL = { superadmin: 'Super Admin', admin: 'Admin', bendahara: 'Admin Bendahara' };

  // Batas jumlah akun per peran (akun bawaan ikut dihitung) + penyimpanan akun yang didaftarkan
  const ROLE_LIMIT = { superadmin: 2, admin: 6, bendahara: 2 };
  const LS_ACC = 'gpm-bsf-akun';
  function roleCount(r) { return adminAccounts.filter((a) => a.role === r).length; }
  function saveAkun() { return lsSet(LS_ACC, adminAccounts.filter((a) => a.custom)); }
  function normPhone(s) {
    let d = String(s || '').replace(/\D/g, '');
    if (d.indexOf('62') === 0) d = '0' + d.slice(2);
    return d;
  }
  lsGet(LS_ACC, []).forEach((a) => {
    if (a && a.username && a.hash && ROLE_LIMIT[a.role] &&
        !adminAccounts.some((x) => x.username === a.username) &&
        roleCount(a.role) < ROLE_LIMIT[a.role]) {
      adminAccounts.push(Object.assign({}, a, { custom: true }));
    }
  });

  // Hak akses: super admin = seluruh website; admin = jadwal ibadah saja; bendahara = kolektan saja
  const ROLE_TABS = {
    superadmin: ['jadwal', 'kolektan', 'beranda', 'profil', 'struktur', 'sektor', 'pelayanan', 'berita', 'renungan', 'galeri', 'pengumuman', 'informasi', 'pesan', 'password', 'staff'],
    admin: ['jadwal', 'password'],
    bendahara: ['kolektan', 'password']
  };
  const TAB_LABEL = {
    jadwal: 'Jadwal Ibadah', kolektan: 'Kolektan', beranda: 'Beranda', profil: 'Profil', struktur: 'Struktur',
    sektor: 'Sektor', pelayanan: 'Pelayanan', berita: 'Berita', renungan: 'Renungan', galeri: 'Galeri',
    pengumuman: 'Pengumuman', informasi: 'Informasi & Kontak', pesan: 'Kontak & Pesan', password: 'Ubah Kata Sandi', staff: 'Admin Yang Bertugas'
  };
  // Ikon & keterangan singkat untuk halaman "Menu Panel"
  const TAB_ICON = {
    jadwal: 'calendar-check', kolektan: 'hand-holding-heart', beranda: 'church', profil: 'book-open', struktur: 'sitemap',
    sektor: 'people-group', pelayanan: 'hands-holding-circle', berita: 'newspaper', renungan: 'hands-praying',
    galeri: 'images', pengumuman: 'bullhorn', informasi: 'phone', pesan: 'envelope', password: 'shield-heart', staff: 'users'
  };
  const TAB_DESC = {
    jadwal: 'Tempat, hari, dan jam ibadah', kolektan: 'Data kolekta mingguan', beranda: 'Teks & foto bagian atas',
    profil: 'Profil, visi, misi, sejarah', struktur: 'Majelis & kepengurusan', sektor: 'Tuan rumah & pemimpin ibadah',
    pelayanan: 'Kartu pelayanan jemaat', berita: 'Berita & kegiatan', renungan: 'Renungan harian',
    galeri: 'Foto dokumentasi', pengumuman: 'Pengumuman jemaat', informasi: 'Alamat, kontak, peta, rekening',
    pesan: 'Pesan dari formulir Kontak pengunjung', password: 'Ganti kata sandi akun sendiri', staff: 'Daftar 6 Admin dan 2 Bendahara'
  };

  const LS_JADWAL = 'gpm-bsf-jadwal';
  const LS_KOLEKTAN = 'gpm-bsf-kolektan';
  const LS_SITE = 'gpm-bsf-site';
  const SS_SESSION = 'gpm-bsf-session';
  const STORE_ERR = 'Gagal menyimpan. Penyimpanan browser penuh atau tidak tersedia — coba gunakan foto yang lebih kecil.';

  // Gaya tambahan untuk pilihan peran & formulir daftar (disuntikkan dari sini agar style.css tidak perlu diubah)
  (function injectLoginCss() {
    const st = document.createElement('style');
    st.textContent =
      '.modal-body[hidden],.modal form[hidden]{display:none !important}' +
      '.adm-tabs[hidden]{display:none !important}' +
      '.lg-roles{display:grid;gap:.75rem;margin-top:.5rem}' +
      '.lg-role{display:flex;align-items:center;gap:.9rem;text-align:left;background:#fff;border:1.5px solid rgba(23,54,93,.18);border-radius:14px;padding:.95rem 1rem;cursor:pointer;color:var(--navy);transition:all .22s var(--ease)}' +
      '.lg-role:hover{border-color:var(--gold);box-shadow:var(--shadow-1);transform:translateY(-2px)}' +
      '.lg-role .icon{width:42px;height:42px;padding:11px;border-radius:12px;flex-shrink:0;box-sizing:border-box;background:linear-gradient(150deg,var(--navy),var(--sea));color:var(--gold)}' +
      '.lg-role span{display:flex;flex-direction:column;line-height:1.35}' +
      '.lg-role strong{font-size:.95rem}' +
      '.lg-role small{font-size:.78rem;color:var(--muted)}' +
      '.lg-link{border:none;background:transparent;padding:0;color:var(--sea);font-weight:700;font-size:inherit;cursor:pointer;text-decoration:underline}' +
      '.field .password-toggle-wrap{position:relative;display:block;width:100%}' +
      '.field .password-toggle-wrap input{width:100%;padding-right:3.1rem}' +
      '.password-toggle-wrap input::-ms-reveal,.password-toggle-wrap input::-ms-clear{display:none;width:0;height:0}' +
      '.password-toggle-wrap input::-webkit-credentials-auto-fill-button{visibility:hidden;display:none!important;pointer-events:none;height:0;width:0;margin:0}' +
      '.password-toggle-btn{position:absolute;right:.45rem;top:50%;transform:translateY(-50%);display:grid;place-items:center;width:2.25rem;height:2.25rem;padding:.35rem;border:0;border-radius:8px;background:transparent;color:var(--muted);cursor:pointer;z-index:2}' +
      '.password-toggle-btn:hover{background:rgba(23,54,93,.08);color:var(--navy)}' +
      '.password-toggle-btn:focus-visible{outline:3px solid var(--gold);outline-offset:1px}' +
      '.password-toggle-btn svg{width:1.15rem;height:1.15rem;display:block;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}' +
      '.field label small{font-weight:400;color:var(--muted)}' +
      /* Menu Panel (halaman utama panel admin) */
      '.adm-menu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:.4rem}' +
      '.adm-menu-item{display:flex;align-items:center;gap:.8rem;text-align:left;background:#fff;border:1.5px solid rgba(23,54,93,.18);border-radius:14px;padding:.85rem .95rem;cursor:pointer;color:var(--navy);transition:all .22s var(--ease)}' +
      '.adm-menu-item:hover{border-color:var(--gold);box-shadow:var(--shadow-1);transform:translateY(-2px)}' +
      '.adm-menu-item .icon{width:40px;height:40px;padding:10px;border-radius:12px;flex-shrink:0;box-sizing:border-box;background:linear-gradient(150deg,var(--navy),var(--sea));color:var(--gold)}' +
      '.adm-menu-item span{display:flex;flex-direction:column;line-height:1.3;min-width:0}' +
      '.adm-menu-item strong{font-size:.92rem}' +
      '.adm-menu-item small{font-size:.74rem;color:var(--muted)}' +
      '.adm-back-menu{font-weight:700;padding:.45rem .9rem;border:1.5px solid rgba(36,90,129,.35);border-radius:999px;background:rgba(36,90,129,.06)}' +
      '.adm-back-menu:hover{background:var(--navy);color:#fff;border-color:var(--navy)}' +
      '@media (max-width:760px){.adm-menu-grid{grid-template-columns:repeat(2,1fr)}}' +
      '@media (max-width:460px){.adm-menu-grid{grid-template-columns:1fr}}';
    document.head.appendChild(st);
  })();

  // Tombol mata untuk seluruh input password, termasuk formulir yang dirender ulang.
  (function initPasswordVisibilityToggles() {
    const eyeOpen = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    const eyeClosed = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18"></path><path d="M10.6 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.1 3.8"></path><path d="M6.2 6.3C3.5 8.1 2 12 2 12s3.6 7 10 7a10.8 10.8 0 0 0 4-.8"></path><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"></path></svg>';
    function addToggle(input) {
      if (!(input instanceof HTMLInputElement) || input.type !== 'password' || input.dataset.passwordToggleReady === 'true') return;
      input.dataset.passwordToggleReady = 'true';
      const wrap = document.createElement('span');
      wrap.className = 'password-toggle-wrap';
      input.parentNode.insertBefore(wrap, input);
      wrap.appendChild(input);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'password-toggle-btn';
      button.setAttribute('aria-label', 'Tampilkan kata sandi');
      button.setAttribute('aria-pressed', 'false');
      button.innerHTML = eyeClosed;
      button.addEventListener('click', function () {
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        button.setAttribute('aria-pressed', String(show));
        button.setAttribute('aria-label', show ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
        button.innerHTML = show ? eyeOpen : eyeClosed;
        input.focus({ preventScroll: true });
      });
      wrap.appendChild(button);
    }
    function scan(root) {
      if (root.matches && root.matches('input[type="password"]')) addToggle(root);
      if (root.querySelectorAll) root.querySelectorAll('input[type="password"]').forEach(addToggle);
    }
    scan(document);
    const observer = new MutationObserver(function (records) {
      records.forEach(function (record) {
        record.addedNodes.forEach(function (node) { if (node.nodeType === 1) scan(node); });
      });
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  })();

  /* ---------- Util ---------- */
  function sha256(msg) {
    const K = [
      0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
      0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
      0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
      0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
      0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
      0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
      0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
      0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
    ];
    const H = [0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
    const bytes = Array.prototype.slice.call(new TextEncoder().encode(msg));
    const bitLen = bytes.length * 8;
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) bytes.push(0);
    for (let i = 7; i >= 0; i--) bytes.push(i >= 4 ? 0 : (bitLen >>> (8 * i)) & 255);
    const rotr = (x, n) => (x >>> n) | (x << (32 - n));
    for (let o = 0; o < bytes.length; o += 64) {
      const w = new Array(64);
      for (let i = 0; i < 16; i++) {
        w[i] = (bytes[o + 4 * i] << 24) | (bytes[o + 4 * i + 1] << 16) | (bytes[o + 4 * i + 2] << 8) | bytes[o + 4 * i + 3];
      }
      for (let i = 16; i < 64; i++) {
        const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
        const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
        w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
      }
      let a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
      for (let i = 0; i < 64; i++) {
        const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
        const ch = (e & f) ^ (~e & g);
        const t1 = (h + S1 + ch + K[i] + w[i]) | 0;
        const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const t2 = (S0 + maj) | 0;
        h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
      H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
    }
    return H.map((x) => ('00000000' + (x >>> 0).toString(16)).slice(-8)).join('');
  }

  function lsGet(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function lsSet(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); return true; } catch (e) { return false; }
  }

  // Nomor minggu (Senin–Minggu), contoh "2026-W44"
  function weekKey(date) {
    const t = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dn = t.getUTCDay() || 7;
    t.setUTCDate(t.getUTCDate() + 4 - dn);
    const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
    const w = Math.ceil(((t - y0) / 86400000 + 1) / 7);
    return t.getUTCFullYear() + '-W' + ('0' + w).slice(-2);
  }

  function todayISO() {
    if (typeof dateInChurchZone === 'function') return dateInChurchZone();
    const d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  function fmtStamp(iso) {
    try {
      return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
    } catch (e) { return iso; }
  }

  // Angka -> teks rupiah, contoh 1500000 -> "Satu juta lima ratus ribu rupiah"
  function terbilang(n) {
    n = Math.floor(Math.abs(n));
    if (n === 0) return 'Nol rupiah';
    const s = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
    function t(x) {
      if (x < 12) return s[x];
      if (x < 20) return t(x - 10) + ' belas';
      if (x < 100) return t(Math.floor(x / 10)) + ' puluh' + (x % 10 ? ' ' + t(x % 10) : '');
      if (x < 200) return 'seratus' + (x - 100 ? ' ' + t(x - 100) : '');
      if (x < 1000) return t(Math.floor(x / 100)) + ' ratus' + (x % 100 ? ' ' + t(x % 100) : '');
      if (x < 2000) return 'seribu' + (x - 1000 ? ' ' + t(x - 1000) : '');
      if (x < 1e6) return t(Math.floor(x / 1000)) + ' ribu' + (x % 1000 ? ' ' + t(x % 1000) : '');
      if (x < 1e9) return t(Math.floor(x / 1e6)) + ' juta' + (x % 1e6 ? ' ' + t(x % 1e6) : '');
      return t(Math.floor(x / 1e9)) + ' miliar' + (x % 1e9 ? ' ' + t(x % 1e9) : '');
    }
    const r = t(n) + ' rupiah';
    return r.charAt(0).toUpperCase() + r.slice(1);
  }

  function lines(s) {
    return String(s || '').split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
  }

  /* ---------- Data tersimpan (jadwal & kolekta) ---------- */
  // Semua item jadwal yang bisa diubah: jadwal umum, sektor, unit, binakel
  function scheduleRegistry() {
    const out = [];
    worshipSchedules.forEach((i) => out.push({
      id: i.id, ref: i, title: i.title, cat: i.category, catLabel: i.categoryLabel, weekly: i.category === 'sektor'
    }));
    sektorData.forEach((s) => {
      s.units.forEach((u) => out.push({
        id: 'sek-' + s.id + '-' + u.id, ref: u, title: 'Sektor ' + s.name + ' — ' + u.name,
        cat: 'unit', catLabel: 'Unit', weekly: true
      }));
      s.binakel.groups.forEach((g) => out.push({
        id: 'sek-' + s.id + '-' + g.id, ref: g, title: 'Binakel ' + s.name + ' — ' + g.name,
        cat: 'binakel', catLabel: 'Binakel', weekly: true
      }));
    });
    return out;
  }

  let scheduleOverrides = lsGet(LS_JADWAL, {});
  if (!scheduleOverrides || typeof scheduleOverrides !== 'object') scheduleOverrides = {};


function applyScheduleOverrides() {
  scheduleRegistry().forEach((r) => {
    const o = scheduleOverrides[r.id];
    if (!o) return;

    if (o.place) r.ref.place = o.place;

    if (typeof o.day === 'number' && o.day >= 0 && o.day <= 6) {
      r.ref.day = o.day;
    }

    if (/^([01]\d|2[0-3]):[0-5]\d$/.test(o.time || '')) {
      r.ref.time = o.time;
    }

    // Nama kegiatan & keterangan hanya untuk jadwal umum.
    if (r.ref.title !== undefined) {
      if (o.title) r.ref.title = o.title;
      if (typeof o.note === 'string' && o.note) {
        r.ref.note = o.note;
      }
    }

    // Terapkan lokasi foto dari Supabase.
    r.ref.foto_tuan_rumah = o.foto_tuan_rumah || null;
    r.ref.foto_pemimpin_ibadah = o.foto_pemimpin_ibadah || null;
    if (r.ref.host && o.nama_tuan_rumah) r.ref.host.name = o.nama_tuan_rumah;
    if (r.ref.leader && o.nama_pemimpin_ibadah) r.ref.leader.name = o.nama_pemimpin_ibadah;
    if (r.ref.leader && o.status_pemimpin_ibadah) r.ref.leader.status = o.status_pemimpin_ibadah;
    if (r.ref.host && o.foto_tuan_rumah) r.ref.host.photo = schedulePhotoPublicUrl(o.foto_tuan_rumah);
    if (r.ref.leader && o.foto_pemimpin_ibadah) r.ref.leader.photo = schedulePhotoPublicUrl(o.foto_pemimpin_ibadah);
  });
}

  applyScheduleOverrides();

  function sortKolektan() { kolektanData.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)); }
  (function loadKolektan() {
    const saved = lsGet(LS_KOLEKTAN, null);
    if (!Array.isArray(saved)) return;
    const clean = saved.filter((k) => k && /^\d{4}-\d{2}-\d{2}$/.test(k.date) && Number.isFinite(Number(k.total)) && Number(k.total) > 0);
    kolektanData.length = 0;
    clean.forEach((k) => kolektanData.push({
      id: k.id || ('kol-' + k.date), date: k.date, total: Number(k.total),
      words: k.words || terbilang(Number(k.total)), photo: typeof k.photo === 'string' ? k.photo : '',
      note: typeof k.note === 'string' ? k.note : '', status: k.status || 'Dokumentasi',
      updatedBy: k.updatedBy || '', updatedAt: k.updatedAt || ''
    }));
    sortKolektan();
  })();

  /* ---------- Isi website yang diedit Super Admin ---------- */
  let siteStore = lsGet(LS_SITE, {});
  if (!siteStore || typeof siteStore !== 'object' || Array.isArray(siteStore)) siteStore = {};

  function saveSite(key, val) {
    const prev = siteStore[key];
    siteStore[key] = val;
    if (lsSet(LS_SITE, siteStore)) return true;
    if (prev === undefined) delete siteStore[key]; else siteStore[key] = prev;
    return false;
  }

  function replaceArr(target, src, minLen) {
    if (!Array.isArray(src) || src.length < (minLen || 0)) return;
    target.length = 0;
    src.forEach((x) => target.push(x));
  }

  // -- Beranda
  function applyHero(v) {
    ['eyebrow', 'title', 'tagline', 'desc'].forEach((k) => {
      if (typeof v[k] === 'string' && v[k].trim()) siteHero[k] = v[k].trim();
    });
    if (typeof v.image === 'string') siteHero.image = v.image;
  }
  function readHero() {
    return { eyebrow: siteHero.eyebrow, title: siteHero.title, tagline: siteHero.tagline, desc: siteHero.desc, image: siteHero.image };
  }

  // -- Profil
  function parseValues(str, prev) {
    return lines(str).map((ln, i) => {
      const p = ln.split('|');
      return { icon: (prev[i] && prev[i].icon) || 'heart', title: p[0].trim(), text: p.slice(1).join('|').trim() };
    }).filter((v) => v.title);
  }
  function applyProfile(v) {
    const c = churchProfile;
    ['quote', 'intro', 'serviceArea', 'vision', 'building', 'classis', 'region', 'boundaries'].forEach((k) => {
      if (typeof v[k] === 'string' && v[k].trim()) c[k] = v[k].trim();
    });
    if (typeof v.image === 'string') c.image = v.image;
    if (typeof v.missions === 'string') { const m = lines(v.missions); if (m.length) c.missions = m; }
    if (typeof v.history === 'string') c.history = lines(v.history);
    if (typeof v.values === 'string') { const vs = parseValues(v.values, c.values); if (vs.length) c.values = vs; }
  }
  function readProfile() {
    const c = churchProfile;
    return {
      quote: c.quote, intro: c.intro, serviceArea: c.serviceArea, vision: c.vision,
      missions: c.missions.join('\n'), values: c.values.map((v) => v.title + ' | ' + v.text).join('\n'),
      history: c.history.join('\n'),
      building: c.building, classis: c.classis, region: c.region, boundaries: c.boundaries, image: c.image
    };
  }

  // -- Informasi, kontak & sumbangan
  function applyContact(v) {
    const c = contactInformation;
    ['address', 'building', 'classis', 'serviceArea', 'boundaries'].forEach((k) => {
      if (typeof v[k] === 'string' && v[k].trim()) c[k].value = v[k].trim();
    });
    ['phone', 'email', 'whatsapp'].forEach((k) => {
      if (typeof v[k] === 'string') { c[k].value = v[k].trim(); c[k].verified = !!c[k].value; }
    });
    ['serviceTime', 'directions', 'mapsQuery'].forEach((k) => {
      if (typeof v[k] === 'string' && v[k].trim()) c[k] = v[k].trim();
    });
    c.socials.forEach((s) => {
      const k = s.label.toLowerCase();
      if (typeof v[k] === 'string') { s.url = v[k].trim(); s.verified = !!s.url; }
    });
    if (typeof v.sumbBank === 'string' && v.sumbBank.trim()) sumbData.bank = v.sumbBank.trim();
    if (typeof v.sumbNorek === 'string' && v.sumbNorek.trim()) sumbData.norek = v.sumbNorek.trim();
  }
  function readContact() {
    const c = contactInformation;
    const out = {
      address: c.address.value, building: c.building.value, classis: c.classis.value,
      serviceArea: c.serviceArea.value, boundaries: c.boundaries.value,
      phone: c.phone.value, email: c.email.value, whatsapp: c.whatsapp.value,
      serviceTime: c.serviceTime, directions: c.directions, mapsQuery: c.mapsQuery,
      sumbBank: sumbData.bank, sumbNorek: sumbData.norek
    };
    c.socials.forEach((s) => { out[s.label.toLowerCase()] = s.url; });
    return out;
  }

  // -- Sektor (tuan rumah & pemimpin ibadah)
  function sektorRefs() {
    const out = [];
    sektorData.forEach((s) => {
      s.units.forEach((u) => out.push({ id: 'sek-' + s.id + '-' + u.id, group: 'Sektor ' + s.name + ' — Unit', title: u.name, ref: u, kind: 'unit' }));
      s.binakel.groups.forEach((g) => out.push({ id: 'sek-' + s.id + '-' + g.id, group: 'Sektor ' + s.name + ' — Binakel', title: g.name, ref: g, kind: 'kel' }));
    });
    return out;
  }
  function applySektorOne(ref, kind, o) {
    if (o.hostName) ref.host.name = o.hostName;
    if (typeof o.hostPhoto === 'string') ref.host.photo = o.hostPhoto;
    if (o.leaderName) ref.leader.name = o.leaderName;
    if (typeof o.leaderStatus === 'string' && o.leaderStatus) ref.leader.status = o.leaderStatus;
    if (typeof o.leaderPhoto === 'string') ref.leader.photo = o.leaderPhoto;
    if (kind === 'kel' && o.tanggal) ref.tanggal = o.tanggal;
  }
  function applySektor(map) {
    if (!map || typeof map !== 'object') return;
    sektorRefs().forEach((r) => { if (map[r.id]) applySektorOne(r.ref, r.kind, map[r.id]); });
  }

  // Muat semua perubahan tersimpan
  (function loadSite() {
    const s = siteStore;
    if (s.hero) applyHero(s.hero);
    if (s.profile) applyProfile(s.profile);
    if (s.contact) applyContact(s.contact);
    replaceArr(ministries, s.ministries);
    replaceArr(newsArticles, s.news);
    replaceArr(dailyDevotions, s.devotions, 1);
    replaceArr(galleryItems, s.gallery);
    replaceArr(announcements, s.announcements);
    if (s.struktur && Array.isArray(s.struktur.seksi) && Array.isArray(s.struktur.pilauNila) && s.struktur.ketua) {
      Object.assign(strukturData, s.struktur);
    }
    if (s.sektor) applySektor(s.sektor);
  })();

  /* ---------- Sesi login ---------- */
  let currentUser = null;
  function getAccount(username) { return adminAccounts.filter((a) => a.username === username)[0]; }
  function accountName(username) { const a = getAccount(username); return a ? a.name : username; }
  function can(tab) {
    if (!currentUser) return false;
    if (tab === 'staff') return currentUser.role === 'superadmin';
    return ROLE_TABS[currentUser.role].indexOf(tab) !== -1;
  }

  (function restoreSession() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(SS_SESSION) || 'null');
      if (!saved || !saved.access_token || !saved.user) return;
      fetch(SUPABASE_URL + '/auth/v1/user', {
        headers: { 'apikey': SUPABASE_PUBLISHABLE_KEY, 'Authorization': 'Bearer ' + saved.access_token }
      }).then((r) => {
        if (!r.ok) throw new Error('Sesi berakhir');
        return r.json();
      }).then(() => {
        currentUser = saved.user;
        updateLoginUi();
      }).catch(() => {
        sessionStorage.removeItem(SS_SESSION);
        currentUser = null;
        updateLoginUi();
      });
    } catch (e) { currentUser = null; }
  })();

  function updateLoginUi() {
    const btn = $('#loginBtn');
    if (!btn) return;
    const label = btn.querySelector('.login-label');
    if (currentUser) {
      btn.classList.add('is-in');
      label.textContent = ROLE_LABEL[currentUser.role];
      btn.setAttribute('aria-label', 'Buka panel ' + ROLE_LABEL[currentUser.role]);
      btn.title = 'Buka panel ' + ROLE_LABEL[currentUser.role];
    } else {
      btn.classList.remove('is-in');
      label.textContent = 'Masuk';
      btn.setAttribute('aria-label', 'Masuk sebagai admin');
      btn.title = 'Masuk sebagai admin';
    }
  }

  /* ---------- Jendela login & panel ---------- */
  function makeOverlay(id, html) {
    const o = document.createElement('div');
    o.className = 'modal-overlay';
    o.id = id;
    o.setAttribute('role', 'presentation');
    o.innerHTML = html;
    document.body.appendChild(o);
    return o;
  }

  const loginOverlay = makeOverlay('loginOverlay',
    '<div class="modal adm-login" role="dialog" aria-modal="true" aria-labelledby="loginTitle">' +
      '<div class="modal-head">' +
        '<div><p class="modal-eyebrow" id="lgEyebrow">Khusus Pengurus</p><h3 id="loginTitle">Masuk Sebagai</h3></div>' +
        '<button type="button" class="modal-close" data-adm-close aria-label="Tutup">' + icon('xmark') + '</button>' +
      '</div>' +
      '<div class="modal-body" id="lgChoose"></div>' +
      '<form id="loginForm" novalidate hidden>' +
        '<div class="modal-body">' +
          '<div class="field"><label for="loginUser">Email akun / username terdaftar</label>' +
            '<input type="text" id="loginUser" autocomplete="username" autocapitalize="none" spellcheck="false" required /></div>' +
          '<div class="field" id="loginSectorWrap" hidden><label for="loginSector">Pilih sektor</label>' +
            '<select id="loginSector"><option value="">-- Pilih sektor --</option><option>Embun Hermon</option><option>Imanuel</option><option>Maranatha</option><option>Ebenhaezer</option><option>Efrata</option><option>Lahairoi</option></select></div>' +
          '<div class="field"><label for="loginPass">Kata sandi</label>' +
            '<input type="password" id="loginPass" autocomplete="current-password" required /></div>' +
          '<p class="field-error" id="loginErr" role="alert"></p>' +
          '<p class="adm-note">Akun pengurus dibuat oleh pihak berwenang. Pendaftaran mandiri tidak tersedia.</p>' +
        '</div>' +
        '<div class="modal-foot">' +
          '<button type="button" class="btn btn-ghost btn-sm" data-lg-back>Kembali</button>' +
          '<button type="submit" class="btn btn-navy btn-sm">Masuk</button>' +
        '</div>' +
      '</form>' +
      '<form id="regForm" novalidate hidden aria-hidden="true" inert>' +
        '<div class="modal-body">' +
          '<div class="field"><label for="regName">Nama lengkap <span class="req">*</span></label>' +
            '<input type="text" id="regName" maxlength="120" autocomplete="name" required /></div>' +
          '<div class="field"><label for="regPhone">Nomor HP <span class="req">*</span></label>' +
            '<input type="tel" id="regPhone" maxlength="20" inputmode="tel" autocomplete="tel" placeholder="08xxxxxxxxxx" required />' +
            '<small class="adm-hint">Nomor HP dipakai sebagai username untuk masuk.</small></div>' +
          '<div class="field"><label for="regJabatan">Jabatan <small>(opsional)</small></label>' +
            '<input type="text" id="regJabatan" maxlength="100" /></div>' +
          '<div class="form-row">' +
            '<div class="field"><label for="regPass">Kata sandi <span class="req">*</span></label>' +
              '<input type="password" id="regPass" autocomplete="new-password" required /></div>' +
            '<div class="field"><label for="regPass2">Ulangi kata sandi <span class="req">*</span></label>' +
              '<input type="password" id="regPass2" autocomplete="new-password" required /></div>' +
          '</div>' +
          '<p class="field-error" id="regErr" role="alert"></p>' +
          '<p class="adm-note">Sudah punya akun? <button type="button" class="lg-link" id="lgToLogin">Masuk</button></p>' +
        '</div>' +
        '<div class="modal-foot">' +
          '<button type="button" class="btn btn-ghost btn-sm" data-lg-back>Kembali</button>' +
          '<button type="submit" class="btn btn-navy btn-sm">Daftar Akun</button>' +
        '</div>' +
      '</form>' +
    '</div>');

  const admOverlay = makeOverlay('admOverlay',
    '<div class="modal adm-modal" role="dialog" aria-modal="true" aria-labelledby="admTitle">' +
      '<div class="modal-head">' +
        '<div><p class="modal-eyebrow" id="admRole"></p><h3 id="admTitle">Panel Admin</h3></div>' +
        '<div class="adm-head-actions">' +
          '<button type="button" class="btn btn-ghost btn-sm" id="admLogout">Keluar</button>' +
          '<button type="button" class="modal-close" data-adm-close aria-label="Tutup panel">' + icon('xmark') + '</button>' +
        '</div>' +
      '</div>' +
      '<div class="adm-tabs" id="admTabs" role="tablist"></div>' +
      '<div class="modal-body" id="admBody"></div>' +
    '</div>');

  const loginForm = $('#loginForm');
  const regForm = $('#regForm');
  const loginUser = $('#loginUser');
  const loginPass = $('#loginPass');
  const loginSector = $('#loginSector');
  const loginSectorWrap = $('#loginSectorWrap');
  const loginErr = $('#loginErr');
  const regErr = $('#regErr');
  const lgChoose = $('#lgChoose');
  let lgRole = null;
  const admBody = $('#admBody');
  const admTabsEl = $('#admTabs');

  const ROLE_DESC = {
    superadmin: 'Mengelola seluruh isi website',
    admin: 'Mengelola jadwal ibadah',
    bendahara: 'Mengelola data kolekta'
  };

  function lgView(v) {
    lgChoose.hidden = v !== 'choose';
    loginForm.hidden = v !== 'login';
    if (loginSectorWrap) loginSectorWrap.hidden = !(v === 'login' && lgRole === 'admin');
    regForm.hidden = v !== 'reg';
    const label = lgRole ? ROLE_LABEL[lgRole] : '';
    $('#lgEyebrow').textContent = v === 'choose' ? 'Khusus Pengurus' : label;
    $('#loginTitle').textContent = v === 'choose' ? 'Masuk Sebagai' : (v === 'login' ? 'Masuk ' + label : 'Daftar ' + label);
    loginErr.textContent = '';
    regErr.textContent = '';
  }

  function renderLgChoose() {
    lgRole = null;
    lgChoose.innerHTML =
      '<p>Pilih sesuai peran Anda. Setiap peran memiliki hak akses yang berbeda.</p>' +
      '<div class="lg-roles">' +
      ['superadmin', 'admin', 'bendahara'].map((r) =>
        '<button type="button" class="lg-role" data-role="' + r + '">' +
          icon('shield-heart') +
          '<span><strong>Login sebagai ' + esc(ROLE_LABEL[r]) + '</strong>' +
          '<small>' + esc(ROLE_DESC[r]) + ' • Terisi ' + roleCount(r) + '/' + ROLE_LIMIT[r] + ' akun</small></span>' +
        '</button>').join('') +
      '</div>';
  }
  renderLgChoose();

  function openOverlay(o, focusEl) {
    o.classList.add('open');
    document.body.classList.add('no-scroll');
    if (focusEl) window.setTimeout(() => focusEl.focus(), 40);
  }
  function closeOverlay(o) {
    o.classList.remove('open');
    const anyOpen = [modalOverlay, lightboxOverlay, loginOverlay, admOverlay].some((x) => x.classList.contains('open'));
    if (!anyOpen) document.body.classList.remove('no-scroll');
  }

  $$('[data-adm-close]', loginOverlay).forEach((b) => b.addEventListener('click', () => closeOverlay(loginOverlay)));
  $$('[data-adm-close]', admOverlay).forEach((b) => b.addEventListener('click', () => closeOverlay(admOverlay)));
  loginOverlay.addEventListener('click', (e) => { if (e.target === loginOverlay) closeOverlay(loginOverlay); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (admOverlay.classList.contains('open')) closeOverlay(admOverlay);
    else if (loginOverlay.classList.contains('open')) closeOverlay(loginOverlay);
  });

  // Pilih peran -> formulir login
  lgChoose.addEventListener('click', (e) => {
    const b = e.target.closest('[data-role]');
    if (!b) return;
    lgRole = b.getAttribute('data-role');
    loginForm.reset();
    lgView('login');
    window.setTimeout(() => loginUser.focus(), 40);
  });
  $$('[data-lg-back]', loginOverlay).forEach((b) => b.addEventListener('click', () => { renderLgChoose(); lgView('choose'); }));

  // Pendaftaran publik dinonaktifkan. Akun hanya boleh dibuat melalui administrasi resmi.
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (regErr) regErr.textContent = 'Pendaftaran publik dinonaktifkan. Hubungi pengelola sistem.';
      toast('Pendaftaran akun publik tidak tersedia.', 'error');
    });
  }

  // Masuk melalui Supabase Edge Function (akun diverifikasi di server).
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginErr.textContent = '';
    const username = loginUser.value.trim().toLowerCase();
    const password = loginPass.value;
    const sector = lgRole === 'admin' ? loginSector.value : null;
    if (!username || !password || (lgRole === 'admin' && !sector)) {
      loginErr.textContent = lgRole === 'admin' && !sector ? 'Silakan pilih sektor terlebih dahulu.' : 'Masukkan username dan kata sandi.';
      return;
    }
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Memeriksa…'; }
    try {
      const response = await fetch(ADMIN_AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_PUBLISHABLE_KEY },
        body: JSON.stringify({ action: 'login', username, password, sector })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success || !result.user || !result.access_token || !result.refresh_token) {
        throw new Error(result.message || 'Username, kata sandi, atau pilihan sektor tidak sesuai.');
      }
      if (result.user.role !== lgRole) {
        throw new Error('Akun ini tidak terdaftar pada jenis login yang dipilih.');
      }
      // Validasi token ke Supabase Auth sebelum membuat sesi panel.
      const verify = await fetch(SUPABASE_URL + '/auth/v1/user', {
        headers: { 'apikey': SUPABASE_PUBLISHABLE_KEY, 'Authorization': 'Bearer ' + result.access_token }
      });
      if (!verify.ok) throw new Error('Sesi Supabase tidak dapat diverifikasi. Silakan coba masuk kembali.');
      const user = Object.assign({}, result.user, { email: result.user.email || username, name: result.user.name || result.user.username || username });
      currentUser = user;
      admTab = null;
      sessionStorage.setItem(SS_SESSION, JSON.stringify({ user, access_token: result.access_token, refresh_token: result.refresh_token }));
      loginForm.reset();
      updateLoginUi();
      closeOverlay(loginOverlay);
      openPanel();
      toast('Berhasil masuk sebagai ' + ROLE_LABEL[user.role] + '.', 'success');
    } catch (err) {
      loginErr.textContent = err.message || 'Tidak dapat menghubungi server. Periksa koneksi internet.';
      loginPass.value = '';
      loginPass.focus();
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Masuk'; }
    }
  });

  $('#admLogout').addEventListener('click', () => {
    currentUser = null;
    try { sessionStorage.removeItem(SS_SESSION); } catch (err) {}
    updateLoginUi();
    closeOverlay(admOverlay);
    toast('Anda telah keluar.', 'info');
  });

  const loginBtn = $('#loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      if (currentUser) openPanel();
      else { renderLgChoose(); lgView('choose'); openOverlay(loginOverlay, null); }
    });
  }

  /* ---------- Panel: tab, jadwal, kolektan ---------- */
  let admTab = null;        // null = halaman "Menu Panel" (hanya untuk peran dengan banyak menu)
  let admEditId = null;     // id jadwal yang sedang diubah
  let admEditKol = null;    // tanggal kolekta yang sedang diubah
  let admEdit = null;       // item isi website yang sedang diubah: { id, isNew }
  const admFilter = { q: '', cat: 'all', missing: false };

  // Peran dengan lebih dari satu menu (Super Admin) memakai halaman Menu Panel + tombol "Kembali ke Menu"
  function admMulti() { return !!currentUser && ROLE_TABS[currentUser.role].length > 1; }

  // Apakah tampilan saat ini berada di level atas sebuah menu (bukan di dalam form ubah/tambah)?
  // Di dalam form sudah ada tombol "Kembali ke daftar", jadi tombol menu hanya tampil di level atas.
  function admAtTop() {
    if (admTab === 'jadwal') return !admEditId;
    if (admTab === 'kolektan') return true;
    const spec = SITE_TABS[admTab];
    if (!spec) return false;
    return spec.kind === 'form' || !admEdit;
  }

  function admMenuBackHtml() {
    return '<button type="button" class="adm-back adm-back-menu" data-adm="menu">' + icon('chevron-left') + ' Kembali ke Menu Panel</button>';
  }

  function openPanel() {
    if (!currentUser) return;
    const tabs = ROLE_TABS[currentUser.role];
    // Super Admin: selalu mulai dari Menu Panel. Peran lain (1 menu): langsung ke menunya.
    admTab = tabs.length > 1 ? null : tabs[0];
    admEditId = null; admEditKol = null; admEdit = null;
    $('#admRole').textContent = ROLE_LABEL[currentUser.role] + ' — ' + currentUser.name + (currentUser.jabatan ? ' (' + currentUser.jabatan + ')' : '');
    renderAdmTabs();
    renderAdmBody();
    openOverlay(admOverlay, $('.modal-close', admOverlay));
  }

  function renderAdmTabs() {
    const tabs = ROLE_TABS[currentUser.role];
    admTabsEl.hidden = tabs.length < 2 || admTab === null;
    admTabsEl.innerHTML = tabs.map((k) =>
      '<button type="button" class="adm-tab' + (k === admTab ? ' is-active' : '') + '" role="tab" aria-selected="' + (k === admTab) + '" data-tab="' + k + '">' + esc(TAB_LABEL[k]) + '</button>'
    ).join('');
  }

  admTabsEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-tab]');
    if (!b || !can(b.getAttribute('data-tab'))) return;
    admTab = b.getAttribute('data-tab');
    admEditId = null; admEditKol = null; admEdit = null;
    renderAdmTabs();
    renderAdmBody();
  });

  // Halaman Menu Panel: daftar semua menu yang boleh diakses
  function renderAdmMenu() {
    const tabs = ROLE_TABS[currentUser.role];
    admBody.innerHTML =
      '<p class="adm-intro">Pilih menu yang ingin diubah. Setelah selesai, tekan <strong>Kembali ke Menu Panel</strong> untuk memilih menu lain tanpa harus keluar dari panel.</p>' +
      '<div class="adm-menu-grid">' +
        tabs.map((k) =>
          '<button type="button" class="adm-menu-item" data-adm="open-tab" data-id="' + k + '">' +
            icon(TAB_ICON[k] || 'church') +
            '<span><strong>' + esc(TAB_LABEL[k]) + '</strong><small>' + esc(TAB_DESC[k] || '') + '</small></span>' +
          '</button>').join('') +
      '</div>';
    admBody.scrollTop = 0;
  }

  function renderAdmBody() {
    if (!currentUser) return;
    if (admTab === null && admMulti()) { renderAdmMenu(); return; }
    if (admTab === 'jadwal' && can('jadwal')) renderAdmJadwal();
    else if (admTab === 'kolektan' && can('kolektan')) renderAdmKolektan();
    else if (admTab === 'password' && can('password')) renderAdmPassword();
    else if (admTab === 'staff' && currentUser.role === 'superadmin') renderAdmStaff();
    else if (admTab === 'pesan' && currentUser.role === 'superadmin') renderAdmPesan();
    else if (SITE_TABS[admTab] && can(admTab)) renderSiteTab();
    // Tombol "Kembali ke Menu Panel" di bagian atas setiap menu (level atas)
    if (admMulti() && admTab !== null && admAtTop()) {
      admBody.insertAdjacentHTML('afterbegin', admMenuBackHtml());
    }
  }



/* -- Kontak & Pesan: Supabase + tampilan CSS -- */

async function renderAdmPesan() {
  if (!currentUser || currentUser.role !== 'superadmin') return;

  const session = JSON.parse(
    sessionStorage.getItem(SS_SESSION) || 'null'
  );
  const accessToken = session?.access_token;

  admBody.innerHTML =
    '<div class="adm-intro">' +
      '<h3>Kontak &amp; Pesan</h3>' +
      '<p>Kelola pesan yang dikirim pengunjung website Jemaat GPM Bumei Sifluru.</p>' +
    '</div>' +
    '<div class="adm-messages"><p>Memuat pesan...</p></div>';

  admBody.scrollTop = 0;

  if (!accessToken) {
    admBody.querySelector('.adm-messages').innerHTML =
      '<p class="form-status is-error">Sesi login tidak ditemukan. Silakan login kembali.</p>';
    return;
  }

  try {
    const response = await fetch(
      SUPABASE_URL + '/functions/v1/admin-auth',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_PUBLISHABLE_KEY,
          'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify({
          action: 'get_contact_messages'
        })
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Gagal mengambil pesan.');
    }

    const messages = result.messages || [];
    const unread = messages.filter(m => m.status === 'unread').length;
    const container = admBody.querySelector('.adm-messages');

    const statusLabel = {
      unread: 'Belum Dibaca',
      read: 'Sudah Dibaca',
      handled: 'Sudah Ditindaklanjuti'
    };

    container.innerHTML =
      '<div class="adm-messages-header">' +
        '<div><strong>Daftar Pesan Pengunjung</strong>' +
        '<p style="margin:.3rem 0 0;color:var(--muted)">Pesan yang masuk melalui formulir kontak.</p></div>' +
        '<button type="button" class="adm-messages-refresh" data-pesan="refresh">↻ Muat Ulang</button>' +
      '</div>' +

      '<div class="adm-message-summary">' +
        '<div class="adm-message-stat"><small>Total Pesan</small><strong>' +
          messages.length + '</strong></div>' +
        '<div class="adm-message-stat"><small>Belum Dibaca</small><strong>' +
          unread + '</strong></div>' +
      '</div>' +

      (messages.length
        ? messages.map(message =>
          '<article class="adm-message-item">' +
            '<div class="adm-message-top">' +
              '<div>' +
                '<h4 class="adm-message-name">' + esc(message.nama) + '</h4>' +
                '<div class="adm-message-meta">' +
                  '<span>✉ ' + esc(message.kontak) + '</span>' +
                  '<span>◷ ' + esc(new Date(message.created_at).toLocaleString('id-ID')) + '</span>' +
                '</div>' +
              '</div>' +
              '<span class="adm-message-status ' + esc(message.status) + '">' +
                esc(statusLabel[message.status] || message.status) +
              '</span>' +
            '</div>' +

            '<h4 class="adm-message-subject">' + esc(message.subjek) + '</h4>' +
            '<p class="adm-message-content">' + esc(message.pesan) + '</p>' +

            '<div class="adm-message-actions">' +
              (message.status !== 'read'
                ? '<button type="button" data-pesan="read" data-id="' + esc(message.id) + '">✓ Tandai Dibaca</button>'
                : '') +
              (message.status !== 'handled'
                ? '<button type="button" data-pesan="handled" data-id="' + esc(message.id) + '">Tindak Lanjuti</button>'
                : '') +
              '<button type="button" data-pesan="delete" data-id="' + esc(message.id) + '">Hapus</button>' +
            '</div>' +
          '</article>'
        ).join('')
        : '<div class="adm-message-empty"><div style="font-size:2rem">✉️</div><strong>Belum Ada Pesan</strong><p>Pesan dari pengunjung akan muncul di sini.</p></div>'
      );

  } catch (error) {
    console.error('Gagal memuat pesan:', error);
    admBody.querySelector('.adm-messages').innerHTML =
      '<p class="form-status is-error">' +
      esc(error.message || 'Gagal memuat pesan.') +
      '</p>';
  }
}

  /* -- Jadwal Ibadah -- */
  function admSummary() {
    const wk = weekKey(new Date());
    const weekly = scheduleRegistry().filter((r) => r.weekly);
    const done = weekly.filter((r) => scheduleOverrides[r.id] && scheduleOverrides[r.id].week === wk).length;
    return { done: done, total: weekly.length };
  }

  function renderAdmJadwal() {
    if (admEditId) { renderAdmJadwalForm(); return; }
    const s = admSummary();
    const pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
    const catOpts = [{ key: 'all', label: 'Semua kategori' }].concat(scheduleCategories.filter((c) => c.key !== 'all'))
      .map((c) => '<option value="' + esc(c.key) + '"' + (c.key === admFilter.cat ? ' selected' : '') + '>' + esc(c.label) + '</option>').join('');
    admBody.innerHTML =
      '<div class="adm-summary">' +
        '<p><strong>' + s.done + ' dari ' + s.total + '</strong> jadwal sektor, unit, dan binakel sudah diisi tempat ibadahnya minggu ini (Senin–Minggu).</p>' +
        '<div class="adm-bar"><span style="width:' + pct + '%"></span></div>' +
      '</div>' +
      '<div class="adm-controls">' +
        '<input type="search" id="admQ" placeholder="Cari jadwal atau tempat..." value="' + esc(admFilter.q) + '" aria-label="Cari jadwal" />' +
        '<select id="admCat" aria-label="Kategori">' + catOpts + '</select>' +
        '<label class="adm-check"><input type="checkbox" id="admMissing"' + (admFilter.missing ? ' checked' : '') + ' /> Hanya yang belum diisi minggu ini</label>' +
      '</div>' +
      '<div id="admList"></div>';
    renderAdmJadwalList();
  }

  function renderAdmJadwalList() {
    const box = $('#admList');
    if (!box) return;
    const wk = weekKey(new Date());
    const q = admFilter.q.trim().toLowerCase();
    const isMissing = (r) => r.weekly && !(scheduleOverrides[r.id] && scheduleOverrides[r.id].week === wk);
    const list = scheduleRegistry()
      .filter((r) => admFilter.cat === 'all' || r.cat === admFilter.cat)
      .filter((r) => !admFilter.missing || isMissing(r))
      .filter((r) => !q || (r.title + ' ' + r.ref.place + ' ' + r.catLabel).toLowerCase().indexOf(q) !== -1)
      .sort((a, b) => (isMissing(b) ? 1 : 0) - (isMissing(a) ? 1 : 0));
    if (!list.length) { box.innerHTML = '<p class="adm-empty">Tidak ada jadwal yang cocok.</p>'; return; }
    box.innerHTML = list.map((r) => {
      const o = scheduleOverrides[r.id];
      const pill = r.weekly
        ? (isMissing(r) ? '<span class="adm-pill warn">Belum diisi minggu ini</span>' : '<span class="adm-pill ok">Sudah diisi</span>')
        : '';
      const meta = o ? 'Diubah oleh ' + esc(accountName(o.by)) + ' • ' + esc(fmtStamp(o.at)) : 'Belum pernah diubah';
      return '<div class="adm-row">' +
        '<div class="adm-row-main"><strong>' + esc(r.title) + '</strong>' +
          '<span class="adm-row-sub">' + esc(r.catLabel) + ' • ' + esc(dayNames[r.ref.day]) + ', ' + esc(r.ref.time) + ' WIT</span>' +
          '<span class="adm-row-sub">Tempat: ' + esc(r.ref.place) + '</span>' +
          '<small>' + meta + '</small></div>' +
        '<div class="adm-row-side">' + pill +
          '<button type="button" class="btn btn-navy btn-sm" data-adm="edit-jadwal" data-id="' + esc(r.id) + '">Ubah</button></div>' +
      '</div>';
    }).join('');
  }

 
function renderAdmJadwalForm() {
    const r = scheduleRegistry().filter((x) => x.id === admEditId)[0];
    if (!r) { admEditId = null; renderAdmJadwal(); return; }

    const dayOpts = dayNames.map((n, i) =>
      '<option value="' + i + '"' +
      (i === r.ref.day ? ' selected' : '') +
      '>' + n + '</option>'
    ).join('');

    const sup = currentUser.role === 'superadmin' && r.ref.title !== undefined;

    const photoUrl = (path) => {
      if (!path) return '';
      const encodedPath = path.split('/').map(encodeURIComponent).join('/');
      return SUPABASE_URL + '/storage/v1/object/public/schedule-photos/' + encodedPath;
    };

    const savedInfo = scheduleOverrides[admEditId] || {};
    const fotoTuanRumah = savedInfo.foto_tuan_rumah || r.ref.foto_tuan_rumah || '';
    const fotoPemimpin = savedInfo.foto_pemimpin_ibadah || r.ref.foto_pemimpin_ibadah || '';
    // Foto jadwal hanya untuk kategori yang memang memerlukannya.
    // Anak: hanya TPI. Doa & Pelayanan: Doa Pagi Bersama tanpa foto.
    const allowSchedulePhotos = !(r.cat === 'anak' && r.id !== 'sch-13') &&
      !(r.cat === 'doa' && r.id === 'sch-12');
    const photoClearButton = (id, label, value) => value
      ? '<button type="button" class="btn btn-ghost btn-sm" data-photo-clear="' + id + '">' + icon('xmark') + ' Hapus foto ' + label + '</button>'
      : '';
    const hostName = savedInfo.nama_tuan_rumah || r.ref.host?.name || '';
    const leaderName = savedInfo.nama_pemimpin_ibadah || r.ref.leader?.name || '';
    const leaderStatus = savedInfo.status_pemimpin_ibadah || r.ref.leader?.status || '';

    admBody.innerHTML =
      '<button type="button" class="adm-back" data-adm="back">' +
        icon('chevron-left') + ' Kembali ke daftar</button>' +

      '<h4 class="adm-form-title">' + esc(r.title) + '</h4>' +
      '<p class="adm-form-sub">' + esc(r.catLabel) + '</p>' +

      '<form id="admJadwalForm" novalidate>' +

        (sup
          ? '<div class="field"><label for="fTitle">Nama kegiatan</label>' +
              '<input type="text" id="fTitle" maxlength="120" value="' +
              esc(r.ref.title) + '" required /></div>' +
            '<div class="field"><label for="fNote">Keterangan</label>' +
              '<textarea id="fNote" rows="3" maxlength="400">' +
              esc(r.ref.note || '') + '</textarea></div>'
          : '') +

        '<div class="field"><label for="fPlace">Tempat ibadah</label>' +
          '<input type="text" id="fPlace" maxlength="120" value="' +
          esc(r.ref.place) + '" required /></div>' +

        '<div class="form-row">' +
          '<div class="field"><label for="fDay">Hari</label>' +
            '<select id="fDay">' + dayOpts + '</select></div>' +
          '<div class="field"><label for="fTime">Jam (WIT)</label>' +
            '<input type="time" id="fTime" value="' +
            esc(r.ref.time) + '" required /></div>' +
        '</div>' +

        '<div class="field"><label for="fNamaTuanRumah">Nama Tuan Rumah</label>' +
          '<input type="text" id="fNamaTuanRumah" maxlength="120" value="' + esc(hostName) + '" required></div>' +
        '<div class="field"><label for="fNamaPemimpin">Nama Pemimpin Ibadah</label>' +
          '<input type="text" id="fNamaPemimpin" maxlength="120" value="' + esc(leaderName) + '" required></div>' +
        '<div class="field"><label for="fStatusPemimpin">Status / Jabatan Pemimpin Ibadah</label>' +
          '<input type="text" id="fStatusPemimpin" maxlength="120" value="' + esc(leaderStatus) + '"></div>' +
        (allowSchedulePhotos ? '<div class="field">' +
          '<label for="fFotoTuanRumah">Foto Tuan Rumah</label>' +
          (fotoTuanRumah
            ? '<img src="' + esc(photoUrl(fotoTuanRumah)) +
              '" alt="Foto Tuan Rumah" style="display:block;max-width:180px;max-height:180px;object-fit:cover;border-radius:8px;margin-bottom:10px;">' +
              photoClearButton('host', 'Tuan Rumah', fotoTuanRumah)
            : '<p>Belum ada foto Tuan Rumah.</p>') +
          '<input type="file" id="fFotoTuanRumah" accept="image/*">' +
          '<input type="hidden" id="fClearFotoTuanRumah" value="0">' +
        '</div>' +
        '<div class="field">' +
          '<label for="fFotoPemimpin">Foto Pemimpin Ibadah</label>' +
          (fotoPemimpin
            ? '<img src="' + esc(photoUrl(fotoPemimpin)) +
              '" alt="Foto Pemimpin Ibadah" style="display:block;max-width:180px;max-height:180px;object-fit:cover;border-radius:8px;margin-bottom:10px;">' +
              photoClearButton('leader', 'Pemimpin Ibadah', fotoPemimpin)
            : '<p>Belum ada foto Pemimpin Ibadah.</p>') +
          '<input type="file" id="fFotoPemimpin" accept="image/*">' +
          '<input type="hidden" id="fClearFotoPemimpin" value="0">' +
        '</div>' : '<p class="field-hint">Kategori ini tidak memerlukan foto jadwal.</p>') +

        '<p class="field-error" id="fErr" role="alert"></p>' +

        '<div class="adm-actions">' +
          '<button type="button" class="btn btn-ghost btn-sm" data-adm="back">Batal</button>' +
          '<button type="submit" class="btn btn-navy btn-sm">Simpan</button>' +
        '</div>' +

      '</form>';

    $$('[data-photo-clear]', admBody).forEach((btn) => {
      btn.addEventListener('click', () => {
        const kind = btn.getAttribute('data-photo-clear');
        const isHost = kind === 'host';
        const fileInput = $(isHost ? '#fFotoTuanRumah' : '#fFotoPemimpin');
        const hiddenInput = $(isHost ? '#fClearFotoTuanRumah' : '#fClearFotoPemimpin');
        if (hiddenInput) hiddenInput.value = '1';
        if (fileInput) fileInput.value = '';
        const field = btn.closest('.field');
        if (field) {
          const img = field.querySelector('img');
          if (img) img.remove();
          btn.remove();
          const note = document.createElement('p');
          note.textContent = 'Foto akan dihapus setelah tombol Simpan ditekan.';
          field.insertBefore(note, fileInput);
        }
      });
    });

    window.setTimeout(() => {
      const f = $('#fPlace');
      if (f) f.focus();
    }, 30);
}


  /* -- Pengelolaan akun petugas (UI) -- */
  const STAFF_KEY = 'gpm-bsf-staff-status';
  const staffRoster = [
    { name: 'Admin 1', email: 'admin1@domain-gereja.id', role: 'admin' },
    { name: 'Admin 2', email: 'admin2@domain-gereja.id', role: 'admin' },
    { name: 'Admin 3', email: 'admin3@domain-gereja.id', role: 'admin' },
    { name: 'Admin 4', email: 'admin4@domain-gereja.id', role: 'admin' },
    { name: 'Admin 5', email: 'admin5@domain-gereja.id', role: 'admin' },
    { name: 'Admin 6', email: 'admin6@domain-gereja.id', role: 'admin' },
    { name: 'Bendahara 1', email: 'bendahara1@domain-gereja.id', role: 'bendahara' },
    { name: 'Bendahara 2', email: 'bendahara2@domain-gereja.id', role: 'bendahara' }
  ];
  let staffFilter = { q: '', role: 'all', status: 'all' };
  function staffStatuses() { return lsGet(STAFF_KEY, {}); }
  function renderAdmStaff() {
    if (!currentUser || currentUser.role !== 'superadmin') return;
    const states = staffStatuses();
    const list = staffRoster.filter((s) => {
      const status = states[s.email] === false ? 'inactive' : 'active';
      const q = staffFilter.q.toLowerCase();
      return (!q || (s.name + ' ' + s.email).toLowerCase().includes(q)) &&
        (staffFilter.role === 'all' || s.role === staffFilter.role) &&
        (staffFilter.status === 'all' || status === staffFilter.status);
    });
    admBody.innerHTML =
      '<h4 class="adm-form-title">ADMIN YANG BERTUGAS</h4>' +
      '<p class="adm-intro">Daftar 6 Admin dan 2 Bendahara. Ganti email contoh dengan email resmi sebelum digunakan.</p>' +
      '<p class="adm-warning-note">PENTING: status pada tampilan ini tersimpan di browser. Penonaktifan akun dan pencabutan sesi yang benar-benar aman wajib diterapkan juga pada backend.</p>' +
      '<div class="adm-staff-controls">' +
        '<input id="staffQ" type="search" placeholder="Cari nama atau email" value="' + esc(staffFilter.q) + '">' +
        '<select id="staffRole"><option value="all">Semua jabatan</option><option value="admin"' + (staffFilter.role === 'admin' ? ' selected' : '') + '>Admin</option><option value="bendahara"' + (staffFilter.role === 'bendahara' ? ' selected' : '') + '>Bendahara</option></select>' +
        '<select id="staffStatus"><option value="all">Semua status</option><option value="active"' + (staffFilter.status === 'active' ? ' selected' : '') + '>Aktif</option><option value="inactive"' + (staffFilter.status === 'inactive' ? ' selected' : '') + '>Nonaktif</option></select>' +
      '</div>' +
      '<div class="adm-staff-table-wrap"><table class="adm-staff-table"><thead><tr><th>No.</th><th>Nama petugas</th><th>Email</th><th>Jabatan</th><th>Status</th><th>Aksi</th></tr></thead><tbody>' +
      (list.length ? list.map((s) => {
        const active = states[s.email] !== false;
        return '<tr><td>' + (staffRoster.indexOf(s) + 1) + '</td><td>' + esc(s.name) + '</td><td>' + esc(s.email) + '</td><td>' + (s.role === 'admin' ? 'Admin' : 'Bendahara') + '</td>' +
          '<td><span class="adm-staff-status ' + (active ? 'active' : 'inactive') + '">' + (active ? 'Aktif' : 'Nonaktif') + '</span></td>' +
          '<td><button type="button" class="btn btn-ghost btn-sm" data-adm="staff-toggle" data-id="' + esc(s.email) + '">' + (active ? 'Nonaktifkan' : 'Aktifkan') + '</button></td></tr>';
      }).join('') : '<tr><td colspan="6">Tidak ada petugas yang cocok.</td></tr>') +
      '</tbody></table></div>';
  }
  function renderAdmPassword() {
    admBody.innerHTML =
      '<h4 class="adm-form-title">Ubah Kata Sandi</h4>' +
      '<p class="adm-intro">Ganti kata sandi akun yang sedang login. Perubahan disimpan langsung di Supabase dan berlaku di semua perangkat.</p>' +
      '<form id="admPasswordForm" novalidate>' +
        '<h5>Ganti username</h5>' +
        '<div class="field"><label for="usernameNew">Username baru</label><input type="text" id="usernameNew" minlength="3" maxlength="40" value="' + esc(currentUser ? currentUser.username : '') + '" autocomplete="username" required></div>' +
        '<div class="field"><label for="usernameCurrentPassword">Password saat ini (konfirmasi perubahan username)</label><input type="password" id="usernameCurrentPassword" autocomplete="current-password" required></div>' +
        '<button type="button" id="changeUsernameBtn" class="btn btn-navy btn-sm">Simpan Username</button>' +
        '<hr>' +
        '<h5>Ganti kata sandi</h5>' +
        '<div class="field"><label for="pwOld">Kata sandi lama</label><input type="password" id="pwOld" autocomplete="current-password" required></div>' +
        '<div class="field"><label for="pwNew">Kata sandi baru (minimal 8 karakter)</label><input type="password" id="pwNew" autocomplete="new-password" minlength="8" required></div>' +
        '<div class="field"><label for="pwConfirm">Konfirmasi kata sandi baru</label><input type="password" id="pwConfirm" autocomplete="new-password" minlength="8" required></div>' +
        '<p class="field-error" id="pwErr" role="alert"></p>' +
        '<div class="adm-actions"><button type="submit" class="btn btn-navy btn-sm">Ubah Kata Sandi</button></div>' +
      '</form>';
  }

  /* -- Kolektan -- */
  function renderAdmKolektan() {
    const editing = admEditKol ? kolektanData.filter((k) => k.date === admEditKol)[0] : null;
    if (admEditKol && !editing) admEditKol = null;
    admBody.innerHTML =
      '<h4 class="adm-form-title">' + (editing ? 'Ubah data kolekta' : 'Tambah data kolekta') + '</h4>' +
      '<form id="admKolForm" novalidate>' +
        '<div class="form-row">' +
          '<div class="field"><label for="kDate">Tanggal ibadah</label><input type="date" id="kDate" value="' + esc(editing ? editing.date : todayISO()) + '" required /></div>' +
          '<div class="field"><label for="kAmt">Jumlah kolektan (Rp)</label>' +
            '<input type="text" id="kAmt" inputmode="numeric" autocomplete="off" placeholder="contoh: 1500000" value="' + (editing ? editing.total : '') + '" required /></div>' +
        '</div>' +
        '<div class="field"><label for="kPhoto">Foto bukti (JPG, PNG, atau WebP; maks. 5 MB)</label><input type="file" id="kPhoto" accept="image/jpeg,image/png,image/webp" /><small class="adm-hint">Foto pratinjau. Untuk penyimpanan permanen dan akses lintas perangkat, backend/storage server masih harus dikonfigurasi.</small></div>' +
        '<img id="kPhotoPreview" class="adm-kol-photo-preview" alt="Pratinjau foto bukti kolektan" ' + (editing && editing.photo ? 'src="' + esc(editing.photo) + '"' : 'hidden') + '>' +
        '<button type="button" class="btn btn-ghost btn-sm" id="kPhotoClear">Hapus foto dari catatan</button>' +
        '<div class="field"><label for="kNote">Keterangan (opsional)</label><textarea id="kNote" rows="2" maxlength="500">' + esc(editing ? editing.note || '' : '') + '</textarea></div>' +
        '<p class="adm-terbilang" id="kWords">' + (editing ? esc(terbilang(editing.total)) : 'Terbilang akan tampil otomatis.') + '</p>' +
        '<p class="adm-warning-note">Data dan foto saat ini disimpan di browser lokal, bukan database server. Jangan anggap data sudah tersinkron atau aman untuk produksi.</p>' +
        '<p class="field-error" id="kErr" role="alert"></p>'
        '<div class="adm-actions">' +
          (editing ? '<button type="button" class="btn btn-ghost btn-sm" data-adm="back">Batal</button>' : '') +
          '<button type="submit" class="btn btn-navy btn-sm">' + (editing ? 'Simpan perubahan' : 'Simpan') + '</button>' +
        '</div>' +
      '</form>' +
      '<h4 class="adm-form-title" style="margin-top:1.6rem;">Data kolekta</h4>' +
      (kolektanData.length
        ? kolektanData.slice().sort((a, b) => b.date.localeCompare(a.date)).map((k) =>
            '<div class="adm-row"><div class="adm-row-main"><strong>' + esc(formatDateID(k.date)) + ' — ' + esc(rupiah(k.total)) + '</strong>' +
            '<span class="adm-row-sub">' + esc(k.words || terbilang(k.total)) + '</span>' +
            '<span class="adm-row-sub">' + (k.photo ? 'Foto bukti tersedia' : 'Foto belum diunggah') + (k.note ? ' • ' + esc(k.note) : '') + '</span>' +
            '<small class="adm-kol-meta">Dicatat oleh ' + esc(k.updatedBy || 'petugas') + (k.updatedAt ? ' • ' + esc(fmtStamp(k.updatedAt)) : '') + '</small></div>' +
            '<div class="adm-row-side">' +
              '<button type="button" class="btn btn-ghost btn-sm" data-adm="edit-kol" data-id="' + esc(k.date) + '">Ubah</button>' +
              '<button type="button" class="btn btn-ghost btn-sm" data-adm="del-kol" data-id="' + esc(k.date) + '">Hapus</button>' +
            '</div></div>').join('') +
          '<p class="adm-total">Total di panel di bawah ini bukan total lintas minggu. Ringkasan publik hanya menghitung minggu berjalan.</p>'
        : '<p class="adm-empty">Belum ada data kolektan.</p>');
  }

  function saveKolektan() {
    sortKolektan();
    return lsSet(LS_KOLEKTAN, kolektanData);
  }

  /* ==========================================================
     EDITOR SUPER ADMIN: ISI SELURUH WEBSITE
     ========================================================== */
  // Pilihan ikon untuk kartu Pelayanan
  const ICON_CHOICES = [
    ['church', 'Gereja'], ['child-reaching', 'Anak'], ['users-line', 'Pemuda'], ['hand-holding-heart', 'Kasih'],
    ['users', 'Kelompok'], ['people-roof', 'Keluarga'], ['hands-holding-circle', 'Diakonia'], ['music', 'Musik'],
    ['handshake-angle', 'Sosial'], ['book-open', 'Firman'], ['hands-praying', 'Doa'], ['seedling', 'Pertumbuhan'],
    ['heart', 'Hati'], ['globe', 'Dunia'], ['people-group', 'Persekutuan'], ['shield-heart', 'Kesetiaan']
  ];

  // Ubah foto yang dipilih menjadi gambar terkompresi (data URL) agar muat di penyimpanan browser
  function readImageFile(file, maxPx, cb) {
    const fr = new FileReader();
    fr.onerror = () => cb(null);
    fr.onload = () => {
      const img = new Image();
      img.onerror = () => cb(null);
      img.onload = () => {
        if (!img.width || !img.height) { cb(null); return; }
        const sc = Math.min(1, maxPx / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(img.width * sc));
        c.height = Math.max(1, Math.round(img.height * sc));
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        try { cb(c.toDataURL('image/jpeg', 0.8)); } catch (err) { cb(null); }
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  }

  // Pembuat kolom formulir
  function fieldHtml(f, val) {
    const id = 'sf_' + f.key;
    const v = val == null ? '' : String(val);
    const hint = f.hint ? '<small class="adm-hint">' + esc(f.hint) + '</small>' : '';

    if (f.type === 'image') {
      const isData = v.indexOf('data:') === 0;
      return '<div class="field adm-img" data-imgbox="' + f.key + '">' +
        '<label>' + esc(f.label) + '</label>' +
        '<div class="adm-img-row">' +
          '<div class="adm-img-prev" data-prev>' + imgPrevHtml(v) + '</div>' +
          '<div class="adm-img-ctrl">' +
            '<input type="hidden" data-f="' + f.key + '" value="' + esc(v) + '" />' +
            '<input type="file" accept="image/*" data-img-file data-max="' + (f.maxPx || 1000) + '" aria-label="Unggah foto: ' + esc(f.label) + '" />' +
            '<input type="text" data-img-url placeholder="atau tempel path / URL gambar" value="' + (isData ? '' : esc(v)) + '" aria-label="URL gambar: ' + esc(f.label) + '" />' +
            '<button type="button" class="btn btn-ghost btn-sm" data-adm="img-clear">Hapus foto</button>' +
            '<small class="adm-hint" data-imgnote>' + (isData ? 'Foto unggahan sedang dipakai.' : 'Pilih berkas foto dari perangkat, atau tempel alamat gambar.') + '</small>' +
          '</div>' +
        '</div>' + hint +
      '</div>';
    }
    if (f.type === 'textarea' || f.type === 'lines') {
      return '<div class="field"><label for="' + id + '">' + esc(f.label) + '</label>' +
        '<textarea id="' + id + '" data-f="' + f.key + '" rows="' + (f.rows || 4) + '" maxlength="' + (f.max || 4000) + '">' + esc(v) + '</textarea>' + hint + '</div>';
    }
    if (f.type === 'select') {
      return '<div class="field"><label for="' + id + '">' + esc(f.label) + '</label>' +
        '<select id="' + id + '" data-f="' + f.key + '">' +
        f.options.map((o) => '<option value="' + esc(o[0]) + '"' + (String(o[0]) === v ? ' selected' : '') + '>' + esc(o[1]) + '</option>').join('') +
        '</select>' + hint + '</div>';
    }
    return '<div class="field"><label for="' + id + '">' + esc(f.label) + '</label>' +
      '<input type="' + (f.type === 'date' ? 'date' : 'text') + '" id="' + id + '" data-f="' + f.key + '" maxlength="' + (f.max || 300) + '" value="' + esc(v) + '"' +
      (f.placeholder ? ' placeholder="' + esc(f.placeholder) + '"' : '') + ' />' + hint + '</div>';
  }

  function imgPrevHtml(v) {
    const src = v && typeof schedulePhotoPublicUrl === 'function' ? schedulePhotoPublicUrl(v) : v;
    return v
      ? '<img src="' + esc(imageUrl(src, 300)) + '" alt="Pratinjau foto" onerror="imgFallback(this)" />'
      : '<span>Belum ada foto</span>';
  }

  function setImgValue(box, v) {
    const hidden = $('input[type="hidden"]', box);
    const urlIn = $('[data-img-url]', box);
    const fileIn = $('[data-img-file]', box);
    const prev = $('[data-prev]', box);
    const note = $('[data-imgnote]', box);
    hidden.value = v;
    const isData = v.indexOf('data:') === 0;
    urlIn.value = isData ? '' : v;
    if (!v && fileIn) fileIn.value = '';
    prev.innerHTML = imgPrevHtml(v);
    note.textContent = isData ? 'Foto unggahan sedang dipakai.' : (v ? 'Memakai alamat gambar.' : 'Pilih berkas foto dari perangkat, atau tempel alamat gambar.');
  }

  function readForm(root, fields) {
    const out = {};
    fields.forEach((f) => {
      const el = root.querySelector('[data-f="' + f.key + '"]');
      let v = el ? el.value : '';
      if (f.type !== 'textarea' && f.type !== 'lines') v = v.trim();
      out[f.key] = v;
    });
    return out;
  }

  function cut(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1) + '…' : s; }

  /* -- Spesifikasi tab -- */
  // Tab bertipe "form": satu formulir; tab bertipe "list": daftar item (tambah/ubah/hapus)
  // Sinkronisasi konten Beranda dan Profil dengan Supabase.
  async function syncSiteContentToServer(contentKey, contentValue) {
    const session = JSON.parse(sessionStorage.getItem(SS_SESSION) || 'null');
    if (!session || !session.access_token) throw new Error('Sesi Super Admin tidak ditemukan. Silakan login kembali.');
    const response = await fetch(ADMIN_AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_PUBLISHABLE_KEY, 'Authorization': 'Bearer ' + session.access_token },
      body: JSON.stringify({ action: 'save_site_content', content_key: contentKey, content_value: contentValue })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success || !result.content_value) throw new Error(result.message || 'Konten gagal disinkronkan ke server.');
    return result.content_value;
  }

  async function loadSiteContentFromServer(contentKey) {
    try {
      const response = await fetch(ADMIN_AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_PUBLISHABLE_KEY },
        body: JSON.stringify({ action: 'get_site_content', content_key: contentKey })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success || !result.content_value) return;
      const serverValue = result.content_value;
      if (['news', 'devotions', 'announcements', 'ministries'].indexOf(contentKey) !== -1) {
        const items = Array.isArray(serverValue) ? serverValue : (serverValue && serverValue.items);
        if (!Array.isArray(items)) return;
        siteStore[contentKey] = items;
        if (contentKey === 'news') replaceArr(newsArticles, items);
        else if (contentKey === 'devotions') replaceArr(dailyDevotions, items, 1);
        else if (contentKey === 'announcements') replaceArr(announcements, items);
        else if (contentKey === 'ministries') replaceArr(ministries, items);
        lsSet(LS_SITE, siteStore);
        if (contentKey === 'news') { newsVisible = NEWS_STEP; renderNews(); }
        else if (contentKey === 'devotions') renderDevotion();
        else if (contentKey === 'announcements') { renderAnnouncements(); renderTopbar(); }
        else if (contentKey === 'ministries') renderMinistries();
        return;
      }
      siteStore[contentKey] = serverValue;
      lsSet(LS_SITE, siteStore);
      if (contentKey === 'hero') { applyHero(serverValue); renderHero(); }
      else if (contentKey === 'profile') { applyProfile(serverValue); renderProfile(); }
    } catch (error) {
      console.warn('Konten ' + contentKey + ' belum dapat dimuat dari server:', error);
    }
  }

  function formSpec(cfg) {
    return {
      kind: 'form', intro: cfg.intro,
      entries: function () {
        return [{
          id: 'main', title: cfg.title, fields: cfg.fields, vals: cfg.read(),
          save: function (v) {
            const err = cfg.validate ? cfg.validate(v) : null;
            if (err) return err;
            if (!saveSite(cfg.store, v)) return STORE_ERR;
            cfg.apply(v);
            cfg.after();
            if (cfg.store === 'hero' || cfg.store === 'profile') {
              syncSiteContentToServer(cfg.store, v).then(function (savedValue) {
                siteStore[cfg.store] = savedValue;
                lsSet(LS_SITE, siteStore);
                cfg.apply(savedValue);
                cfg.after();
                toast((cfg.store === 'hero' ? 'Beranda' : 'Profil') + ' berhasil disimpan dan tersinkron untuk semua pengunjung.', 'success');
              }).catch(function (error) {
                toast(error.message || 'Gagal menyinkronkan konten ke server.', 'error');
              });
            }
            return null;
          }
        }];
      }
    };
  }

  // Galeri: metadata disimpan di public.gallery_items dan file foto di Storage bucket foto-jemaat.
  const GALLERY_BUCKET = 'foto-jemaat';
  let galleryReady = false;

  function galleryPublicUrl(path) {
    if (!path) return '';
    const encoded = String(path).split('/').map(encodeURIComponent).join('/');
    return SUPABASE_URL + '/storage/v1/object/public/' + GALLERY_BUCKET + '/' + encoded;
  }

  function galleryHeaders(accessToken) {
    const h = { 'apikey': SUPABASE_PUBLISHABLE_KEY, 'Content-Type': 'application/json' };
    if (accessToken) h.Authorization = 'Bearer ' + accessToken;
    return h;
  }

  async function uploadGalleryImage(dataUrl, accessToken, oldPath) {
    if (!dataUrl || !dataUrl.startsWith('data:')) return oldPath || dataUrl;
    const blob = await (await fetch(dataUrl)).blob();
    if (!blob.type.startsWith('image/')) throw new Error('Berkas galeri harus berupa gambar.');
    if (blob.size > 5 * 1024 * 1024) throw new Error('Ukuran foto galeri maksimal 5 MB.');
    const ext = blob.type === 'image/png' ? 'png' : blob.type === 'image/webp' ? 'webp' : 'jpg';
    const path = 'galeri/' + Date.now() + '-' + Math.random().toString(36).slice(2, 9) + '.' + ext;
    const response = await fetch(SUPABASE_URL + '/storage/v1/object/' + GALLERY_BUCKET + '/' + path.split('/').map(encodeURIComponent).join('/'), {
      method: 'POST',
      headers: { 'apikey': SUPABASE_PUBLISHABLE_KEY, 'Authorization': 'Bearer ' + accessToken, 'Content-Type': blob.type, 'x-upsert': 'false' },
      body: blob
    });
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body.message || body.error || 'Foto gagal diunggah ke bucket foto-jemaat. Periksa Storage policy.');
    }
    return path;
  }

  async function syncGalleryChanges(backup, current) {
    if (!galleryReady) throw new Error('Data galeri dari Supabase belum selesai dimuat. Muat ulang halaman lalu coba lagi.');
    const session = JSON.parse(sessionStorage.getItem(SS_SESSION) || 'null');
    if (!session || !session.access_token) throw new Error('Sesi admin tidak ditemukan. Silakan login kembali.');
    const token = session.access_token;
    const oldById = new Map(backup.map((x) => [String(x.id), x]));
    const currentIds = new Set(current.map((x) => String(x.id)));

    for (let i = 0; i < current.length; i++) {
      const item = current[i];
      const old = oldById.get(String(item.id));
      const oldPath = old && old.image_path ? old.image_path : (old && old.image && old.image.indexOf(SUPABASE_URL + '/storage/v1/object/public/' + GALLERY_BUCKET + '/') === 0 ? decodeURIComponent(old.image.split('/storage/v1/object/public/' + GALLERY_BUCKET + '/')[1]) : '');
      const path = await uploadGalleryImage(item.image, token, oldPath);
      const payload = {
        title: item.caption || '', description: '', category: item.category || 'ibadah',
        image_path: path, display_order: i, is_published: true, updated_at: new Date().toISOString()
      };
      const isExisting = old && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(item.id));
      const url = SUPABASE_URL + '/rest/v1/gallery_items' + (isExisting ? '?id=eq.' + encodeURIComponent(item.id) : '');
      const response = await fetch(url, {
        method: isExisting ? 'PATCH' : 'POST',
        headers: Object.assign(galleryHeaders(token), { 'Prefer': 'return=representation' }),
        body: JSON.stringify(payload)
      });
      const rows = await response.json().catch(() => []);
      if (!response.ok) throw new Error((rows && (rows.message || rows.details)) || 'Metadata galeri gagal disimpan ke tabel gallery_items.');
      const saved = Array.isArray(rows) ? rows[0] : null;
      if (saved && saved.id) item.id = saved.id;
      item.image_path = path;
      item.image = galleryPublicUrl(path);
      item.categoryLabel = catLabel(galleryCategories, item.category);
    }

    for (const old of backup) {
      if (currentIds.has(String(old.id)) || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(old.id))) continue;
      const response = await fetch(SUPABASE_URL + '/rest/v1/gallery_items?id=eq.' + encodeURIComponent(old.id), {
        method: 'DELETE', headers: galleryHeaders(token)
      });
      if (!response.ok) throw new Error('Foto dihapus dari daftar lokal, tetapi penghapusan pada Supabase gagal. Periksa izin tabel gallery_items.');
    }
  }

  async function loadGalleryFromSupabase() {
    try {
      const response = await fetch(SUPABASE_URL + '/rest/v1/gallery_items?select=id,title,description,category,image_path,display_order,is_published&is_published=eq.true&order=display_order.asc,created_at.desc', {
        headers: galleryHeaders(null)
      });
      const rows = await response.json().catch(() => []);
      if (!response.ok) throw new Error((rows && rows.message) || 'Tidak dapat membaca tabel gallery_items.');
      galleryItems.length = 0;
      rows.forEach((row) => galleryItems.push({
        id: row.id, caption: row.title || '', description: row.description || '',
        category: row.category || 'ibadah', categoryLabel: catLabel(galleryCategories, row.category || 'ibadah'),
        image_path: row.image_path, image: galleryPublicUrl(row.image_path)
      }));
      galleryReady = true;
      saveSite('gallery', galleryItems);
      renderGallery();
    } catch (error) {
      console.warn('Galeri Supabase belum dapat dimuat:', error);
      toast('Galeri belum tersambung ke Supabase: ' + (error.message || 'periksa izin tabel dan bucket.'), 'error');
    }
  }

  function makeListSpec(cfg) {
    const labelOf = (k) => { const f = cfg.fields.filter((x) => x.key === k)[0]; return f ? f.label : k; };
    async function finish(backup) {
      if (cfg.store === 'gallery') {
        try { await syncGalleryChanges(backup, cfg.arr); }
        catch (error) {
          cfg.arr.length = 0;
          backup.forEach((x) => cfg.arr.push(x));
          saveSite(cfg.store, cfg.arr);
          return error.message || 'Galeri gagal disinkronkan ke Supabase.';
        }
      }
      // Berita, renungan, pengumuman, dan pelayanan harus disimpan di server,
      // bukan hanya localStorage. Array dibungkus menjadi objek {items: []}
      // agar sesuai validasi content_value jsonb berbentuk object di Edge Function.
      const serverListKeys = ['news', 'devotions', 'announcements', 'ministries'];
      if (serverListKeys.indexOf(cfg.store) !== -1) {
        try {
          await syncSiteContentToServer(cfg.store, cfg.arr);
        } catch (error) {
          cfg.arr.length = 0;
          backup.forEach((x) => cfg.arr.push(x));
          saveSite(cfg.store, cfg.arr);
          return error.message || ('Konten ' + cfg.store + ' gagal disinkronkan ke Supabase.');
        }
      }
      if (!saveSite(cfg.store, cfg.arr)) {
        cfg.arr.length = 0;
        backup.forEach((x) => cfg.arr.push(x));
        return STORE_ERR;
      }
      cfg.after();
      return null;
    }
    function validate(v) {
      for (let i = 0; i < cfg.required.length; i++) {
        if (!String(v[cfg.required[i]] || '').trim()) return 'Kolom "' + labelOf(cfg.required[i]) + '" wajib diisi.';
      }
      return null;
    }
    return {
      kind: 'list', intro: cfg.intro, addLabel: cfg.addLabel,
      blank: function () {
        return {
          id: 'new', title: 'Tambah ' + cfg.noun, fields: cfg.fields, vals: cfg.toVals(cfg.blank()),
          save: function (v) {
            const e = validate(v); if (e) return e;
            const backup = cfg.arr.slice();
            cfg.arr.push(cfg.build(v, null));
            return finish(backup);
          }
        };
      },
      entries: function () {
        const rows = cfg.arr.map((item, i) => ({ item: item, i: i }));
        if (cfg.sort) rows.sort((a, b) => cfg.sort(a.item, b.item));
        return rows.map((r) => ({
          id: String(r.i), title: cfg.title(r.item), sub: cfg.sub(r.item),
          fields: cfg.fields, vals: cfg.toVals(r.item),
          save: function (v) {
            const e = validate(v); if (e) return e;
            const backup = cfg.arr.slice();
            cfg.arr[r.i] = cfg.build(v, r.item);
            return finish(backup);
          },
          del: function () {
            if (cfg.arr.length <= (cfg.minKeep || 0)) return 'Minimal harus tersisa ' + cfg.minKeep + ' data.';
            const backup = cfg.arr.slice();
            cfg.arr.splice(r.i, 1);
            return finish(backup);
          }
        }));
      }
    };
  }

  const uid = (p) => p + '-' + Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
  const catLabel = (list, key) => { const c = list.filter((x) => x.key === key)[0]; return c ? c.label : key; };
  const dateDesc = (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

  // Beranda
  const berandaSpec = formSpec({
    title: 'Teks & foto Beranda',
    intro: 'Ubah teks sambutan dan foto latar pada bagian paling atas website.',
    store: 'hero',
    fields: [
      { key: 'eyebrow', label: 'Teks kecil di atas judul', type: 'text', max: 120 },
      { key: 'title', label: 'Judul besar', type: 'textarea', rows: 2, max: 120, hint: 'Tekan Enter untuk pindah baris.' },
      { key: 'tagline', label: 'Motto', type: 'text', max: 200 },
      { key: 'desc', label: 'Deskripsi singkat', type: 'textarea', rows: 3, max: 500 },
      { key: 'image', label: 'Foto latar Beranda', type: 'image', maxPx: 1600, hint: 'Kosongkan untuk memakai foto bawaan.' }
    ],
    read: readHero, apply: applyHero, after: renderHero,
    validate: (v) => (!v.title.trim() ? 'Judul besar wajib diisi.' : null)
  });

  // Profil
  const profilSpec = formSpec({
    title: 'Isi menu Profil',
    intro: 'Ubah teks profil jemaat, visi, misi, nilai pelayanan, sejarah, dan fotonya.',
    store: 'profile',
    fields: [
      { key: 'image', label: 'Foto profil jemaat', type: 'image', maxPx: 1200, hint: 'Kosongkan untuk memakai foto bawaan.' },
      { key: 'quote', label: 'Ayat / kutipan di bagian atas', type: 'textarea', rows: 3, max: 400 },
      { key: 'intro', label: 'Pengantar', type: 'textarea', rows: 6 },
      { key: 'serviceArea', label: 'Keterangan wilayah pelayanan', type: 'textarea', rows: 3 },
      { key: 'vision', label: 'Visi', type: 'textarea', rows: 3 },
      { key: 'missions', label: 'Misi', type: 'lines', rows: 5, hint: 'Satu misi per baris. Misi pertama tampil di kartu; semuanya tampil di "Selengkapnya".' },
      { key: 'values', label: 'Nilai pelayanan', type: 'lines', rows: 6, hint: 'Satu nilai per baris, format: Judul | Penjelasan' },
      { key: 'history', label: 'Sejarah singkat', type: 'lines', rows: 5, hint: 'Satu paragraf per baris.' },
      { key: 'building', label: 'Nama gedung gereja', type: 'text' },
      { key: 'classis', label: 'Klasis', type: 'text' },
      { key: 'region', label: 'Wilayah (kecamatan / kabupaten)', type: 'text' },
      { key: 'boundaries', label: 'Batas wilayah pelayanan', type: 'textarea', rows: 3 }
    ],
    read: readProfile, apply: applyProfile, after: renderProfile,
    validate: (v) => (!v.intro.trim() ? 'Pengantar wajib diisi.' : null)
  });

  // Informasi, kontak, peta & sumbangan
  const informasiSpec = formSpec({
    title: 'Informasi, kontak, peta & sumbangan',
    intro: 'Ubah alamat, kontak, media sosial, titik peta, dan rekening sumbangan.',
    store: 'contact',
    fields: [
      { key: 'address', label: 'Alamat gereja', type: 'textarea', rows: 2 },
      { key: 'building', label: 'Nama gedung gereja', type: 'text' },
      { key: 'classis', label: 'Klasis', type: 'text' },
      { key: 'serviceArea', label: 'Wilayah pelayanan', type: 'text' },
      { key: 'boundaries', label: 'Batas wilayah pelayanan', type: 'textarea', rows: 2 },
      { key: 'serviceTime', label: 'Waktu ibadah minggu', type: 'text' },
      { key: 'directions', label: 'Petunjuk menuju lokasi', type: 'textarea', rows: 3 },
      { key: 'mapsQuery', label: 'Koordinat peta', type: 'text', placeholder: '-3.208896, 129.016012', hint: 'Format: lintang, bujur (salin dari Google Maps).' },
      { key: 'phone', label: 'Telepon', type: 'text', max: 40 },
      { key: 'email', label: 'Email', type: 'text', max: 120 },
      { key: 'whatsapp', label: 'WhatsApp', type: 'text', max: 40, hint: 'Contoh: 0812xxxxxxx. Tombol WhatsApp tampil jika diisi.' },
      { key: 'facebook', label: 'Tautan Facebook', type: 'text', max: 300, placeholder: 'https://' },
      { key: 'instagram', label: 'Tautan Instagram', type: 'text', max: 300, placeholder: 'https://' },
      { key: 'youtube', label: 'Tautan YouTube', type: 'text', max: 300, placeholder: 'https://' },
      { key: 'sumbBank', label: 'Nama bank (sumbangan)', type: 'text', max: 60 },
      { key: 'sumbNorek', label: 'Nomor rekening (sumbangan)', type: 'text', max: 40 }
    ],
    read: readContact, apply: applyContact,
    after: function () { renderLocation(); renderContact(); renderSumbangan(); },
    validate: function (v) {
      if (!v.address.trim()) return 'Alamat gereja wajib diisi.';
      if (v.mapsQuery && !/^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/.test(v.mapsQuery.trim())) return 'Koordinat peta tidak valid. Contoh: -3.208896, 129.016012';
      const urls = ['facebook', 'instagram', 'youtube'];
      for (let i = 0; i < urls.length; i++) {
        if (v[urls[i]] && !/^https?:\/\//i.test(v[urls[i]])) return 'Tautan media sosial harus diawali http:// atau https://';
      }
      return null;
    }
  });

  // Pelayanan
  const pelayananSpec = makeListSpec({
    noun: 'pelayanan', addLabel: 'Tambah pelayanan', store: 'ministries', arr: ministries,
    intro: 'Kelola kartu pelayanan jemaat. Foto bersifat opsional.',
    required: ['title', 'short'],
    fields: [
      { key: 'icon', label: 'Ikon', type: 'select', options: ICON_CHOICES },
      { key: 'title', label: 'Nama pelayanan', type: 'text', max: 100 },
      { key: 'short', label: 'Deskripsi singkat', type: 'textarea', rows: 2, max: 300 },
      { key: 'detail', label: 'Penjelasan lengkap', type: 'textarea', rows: 5 },
      { key: 'image', label: 'Foto pelayanan (opsional)', type: 'image', maxPx: 1000 }
    ],
    blank: () => ({ icon: 'church', title: '', short: '', detail: '', image: '' }),
    toVals: (m) => ({ icon: m.icon, title: m.title, short: m.short, detail: m.detail || '', image: m.image || '' }),
    build: (v, old) => Object.assign({}, old || { id: uid('min') }, {
      icon: v.icon, title: v.title.trim(), short: v.short.trim(), detail: v.detail.trim(), image: v.image
    }),
    title: (m) => m.title, sub: (m) => cut(m.short, 90),
    after: renderMinistries
  });

  // Berita
  const beritaSpec = makeListSpec({
    noun: 'berita', addLabel: 'Tambah berita', store: 'news', arr: newsArticles,
    intro: 'Tulis, ubah, atau hapus berita dan kegiatan jemaat, lengkap dengan foto.',
    required: ['title', 'date', 'excerpt', 'body'],
    fields: [
      { key: 'image', label: 'Foto berita', type: 'image', maxPx: 1200 },
      { key: 'title', label: 'Judul', type: 'text', max: 160 },
      { key: 'category', label: 'Kategori', type: 'select', options: newsCategories.slice(1).map((c) => [c.key, c.label]) },
      { key: 'date', label: 'Tanggal', type: 'date' },
      { key: 'excerpt', label: 'Ringkasan', type: 'textarea', rows: 2, max: 300 },
      { key: 'body', label: 'Isi berita', type: 'textarea', rows: 8 }
    ],
    blank: () => ({ image: '', title: '', category: 'berita-jemaat', date: todayISO(), excerpt: '', body: '' }),
    toVals: (a) => ({ image: a.image || '', title: a.title, category: a.category, date: a.date, excerpt: a.excerpt, body: a.body }),
    build: (v, old) => Object.assign({}, old || { id: uid('news') }, {
      image: v.image, title: v.title.trim(), category: v.category, categoryLabel: catLabel(newsCategories, v.category),
      date: v.date, excerpt: v.excerpt.trim(), body: v.body.trim()
    }),
    title: (a) => a.title, sub: (a) => a.categoryLabel + ' • ' + formatDateID(a.date),
    sort: dateDesc,
    after: function () { newsVisible = NEWS_STEP; renderNews(); }
  });

  // Renungan
  const renunganSpec = makeListSpec({
    noun: 'renungan', addLabel: 'Tambah renungan', store: 'devotions', arr: dailyDevotions, minKeep: 1,
    intro: 'Kelola renungan harian: judul, ayat, isi renungan, dan pertanyaan perenungan.',
    required: ['title', 'verse', 'reference', 'reflection'],
    fields: [
      { key: 'title', label: 'Judul renungan', type: 'text', max: 120 },
      { key: 'verse', label: 'Ayat', type: 'textarea', rows: 3, max: 600, hint: 'Sertakan tanda kutip “ ” jika diinginkan.' },
      { key: 'reference', label: 'Rujukan ayat', type: 'text', max: 80, placeholder: 'Contoh: Ibrani 11:1' },
      { key: 'reflection', label: 'Isi renungan', type: 'textarea', rows: 8 },
      { key: 'questions', label: 'Pertanyaan perenungan', type: 'lines', rows: 4, hint: 'Satu pertanyaan per baris.' }
    ],
    blank: () => ({ title: '', verse: '', reference: '', reflection: '', questions: [] }),
    toVals: (d) => ({ title: d.title, verse: d.verse, reference: d.reference, reflection: d.reflection, questions: (d.questions || []).join('\n') }),
    build: (v, old) => Object.assign({}, old || { id: uid('dev') }, {
      title: v.title.trim(), verse: v.verse.trim(), reference: v.reference.trim(),
      reflection: v.reflection.trim(), questions: lines(v.questions)
    }),
    title: (d) => d.title, sub: (d) => d.reference,
    after: renderDevotion
  });

  // Galeri
  const galeriSpec = makeListSpec({
    noun: 'foto galeri', addLabel: 'Tambah foto', store: 'gallery', arr: galleryItems,
    intro: 'Tambah, ganti, atau hapus foto pada galeri kegiatan jemaat.',
    required: ['caption', 'image'],
    fields: [
      { key: 'image', label: 'Foto', type: 'image', maxPx: 1400 },
      { key: 'caption', label: 'Keterangan foto', type: 'text', max: 160 },
      { key: 'category', label: 'Kategori', type: 'select', options: galleryCategories.slice(1).map((c) => [c.key, c.label]) }
    ],
    blank: () => ({ image: '', caption: '', category: 'ibadah' }),
    toVals: (g) => ({ image: g.image || '', caption: g.caption, category: g.category }),
    build: (v, old) => Object.assign({}, old || { id: uid('g') }, {
      image: v.image, caption: v.caption.trim(), category: v.category, categoryLabel: catLabel(galleryCategories, v.category)
    }),
    title: (g) => g.caption, sub: (g) => g.categoryLabel,
    after: renderGallery
  });

  // Pengumuman
  const PRIO = { high: ['Penting', 'bullhorn'], medium: ['Menengah', 'hand-holding-heart'], normal: ['Biasa', 'bell'] };
  const pengumumanSpec = makeListSpec({
    noun: 'pengumuman', addLabel: 'Tambah pengumuman', store: 'announcements', arr: announcements,
    intro: 'Pengumuman berprioritas "Penting" terbaru juga tampil sebagai banner di bagian atas website.',
    required: ['title', 'date', 'excerpt', 'body'],
    fields: [
      { key: 'title', label: 'Judul', type: 'text', max: 160 },
      { key: 'date', label: 'Tanggal', type: 'date' },
      { key: 'priority', label: 'Prioritas', type: 'select', options: [['high', 'Penting'], ['medium', 'Menengah'], ['normal', 'Biasa']] },
      { key: 'excerpt', label: 'Ringkasan', type: 'textarea', rows: 2, max: 300 },
      { key: 'body', label: 'Isi pengumuman', type: 'textarea', rows: 6 }
    ],
    blank: () => ({ title: '', date: todayISO(), priority: 'normal', excerpt: '', body: '' }),
    toVals: (a) => ({ title: a.title, date: a.date, priority: a.priority, excerpt: a.excerpt, body: a.body }),
    build: function (v, old) {
      const pr = PRIO[v.priority] ? v.priority : 'normal';
      const keepIcon = old && old.priority === pr && old.icon;
      return Object.assign({}, old || { id: uid('ann') }, {
        title: v.title.trim(), date: v.date, priority: pr, priorityLabel: PRIO[pr][0],
        icon: keepIcon || PRIO[pr][1], excerpt: v.excerpt.trim(), body: v.body.trim()
      });
    },
    title: (a) => a.title, sub: (a) => a.priorityLabel + ' • ' + formatDateID(a.date),
    sort: dateDesc,
    after: function () { renderAnnouncements(); renderTopbar(); }
  });

  // Sinkronisasi Struktur Kepengurusan dengan Supabase.
  async function syncStrukturToServer() {
    const session = JSON.parse(sessionStorage.getItem(SS_SESSION) || 'null');
    if (!session || !session.access_token) {
      throw new Error('Sesi Super Admin tidak ditemukan. Silakan login kembali.');
    }
    const response = await fetch(ADMIN_AUTH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_PUBLISHABLE_KEY,
        'Authorization': 'Bearer ' + session.access_token
      },
      body: JSON.stringify({ action: 'save_struktur', struktur: strukturData })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Struktur gagal disinkronkan ke server.');
    }
  }

  async function loadStrukturFromServer() {
    try {
      const response = await fetch(ADMIN_AUTH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_PUBLISHABLE_KEY
        },
        body: JSON.stringify({ action: 'get_struktur' })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success || !result.struktur) return;
      if (!Array.isArray(result.struktur.seksi) ||
          !Array.isArray(result.struktur.pilauNila) ||
          !result.struktur.ketua) return;
      Object.assign(strukturData, result.struktur);
      siteStore.struktur = result.struktur;
      lsSet(LS_SITE, siteStore);
      renderStruktur();
    } catch (error) {
      console.warn('Struktur Kepengurusan belum dapat dimuat dari server:', error);
    }
  }

  // Struktur kepengurusan
  function strukturPersist(mutator) {
    const snap = JSON.stringify(strukturData);
    mutator();
    if (saveSite('struktur', strukturData)) {
      renderStruktur();
      syncStrukturToServer().then(() => {
        toast('Struktur Kepengurusan tersimpan dan tersinkron ke semua pengunjung.', 'success');
      }).catch((error) => {
        toast(error.message || 'Gagal menyinkronkan Struktur Kepengurusan.', 'error');
      });
      return null;
    }
    const old = JSON.parse(snap);
    Object.keys(strukturData).forEach((k) => { delete strukturData[k]; });
    Object.assign(strukturData, old);
    return STORE_ERR;
  }

  function strukturPersonEntry(id, group, title, ref, o) {
    o = o || {};
    const fields = [{ key: 'photo', label: 'Foto (3 × 4)', type: 'image', maxPx: 500 }];
    if (o.role) fields.push({ key: 'role', label: 'Jabatan', type: 'text', max: 100 });
    fields.push({ key: 'name', label: 'Nama lengkap & gelar', type: 'text', max: 120 });
    fields.push({ key: 'sektor', label: 'Sektor pelayanan', type: 'text', max: 120, hint: 'Kosongkan jika belum ada (tampil "—").' });
    if (o.tasks) fields.push({ key: 'tasks', label: 'Tugas', type: 'lines', rows: 4, hint: 'Satu tugas per baris.' });
    const vals = { photo: ref.photo || '', role: ref.role || '', name: ref.name, sektor: ref.sektor || '' };
    if (o.tasks) vals.tasks = (ref.tasks || []).join('\n');
    return {
      id: id, group: group, title: title + ' — ' + ref.name, sub: ref.sektor ? 'Sektor: ' + ref.sektor : '',
      fields: fields, vals: vals, del: o.del,
      save: function (v) {
        if (!v.name.trim()) return 'Nama wajib diisi.';
        return strukturPersist(function () {
          ref.name = v.name.trim();
          ref.photo = v.photo;
          ref.sektor = v.sektor.trim();
          if (o.role && v.role.trim()) ref.role = v.role.trim();
          if (o.tasks) ref.tasks = lines(v.tasks);
        });
      }
    };
  }

  const strukturSpec = {
    kind: 'list',
    intro: 'Ubah nama, jabatan, sektor, tugas, dan foto seluruh anggota majelis. Foto, logo, dan periode juga bisa diganti.',
    entries: function () {
      const d = strukturData, out = [];
      out.push({
        id: 'meta', group: 'Pengaturan umum', title: 'Periode, logo, dan tanda tangan', sub: 'Periode ' + (d.period || ''),
        fields: [
          { key: 'period', label: 'Periode kepengurusan', type: 'text', max: 40, placeholder: '2025/2030' },
          { key: 'logo', label: 'Logo GPM', type: 'image', maxPx: 600, hint: 'Dipakai di kepala poster dan sebagai watermark.' },
          { key: 'ttd', label: 'Nama Sekretaris (kolom tanda tangan)', type: 'text', max: 120 }
        ],
        vals: { period: d.period || '', logo: d.logo || '', ttd: d.tandaTanganSekretaris || '' },
        save: function (v) {
          if (!v.period.trim()) return 'Periode wajib diisi.';
          return strukturPersist(function () {
            d.period = v.period.trim(); d.logo = v.logo; d.tandaTanganSekretaris = v.ttd.trim();
          });
        }
      });
      ['ketua', 'wakil', 'sekretaris', 'wSekretaris', 'bendahara', 'wBendahara', 'anggota'].forEach((k) => {
        out.push(strukturPersonEntry(k, 'Pimpinan majelis', d[k].role, d[k], { role: true }));
      });
      d.seksi.forEach((s, i) => {
        out.push(strukturPersonEntry('s' + i, s.role, 'Ketua seksi', s, { role: true }));
        s.members.forEach((m, j) => {
          out.push(strukturPersonEntry('s' + i + 'm' + j, s.role, 'Anggota ' + (j + 1), m, {
            tasks: true,
            del: function () { return strukturPersist(function () { s.members.splice(j, 1); }); }
          }));
        });
      });
      d.pilauNila.forEach((p, j) => {
        out.push(strukturPersonEntry('p' + j, 'Majelis Pilau Nila', 'Pilau Nila ' + (j + 1), p, {
          del: function () { return strukturPersist(function () { d.pilauNila.splice(j, 1); }); }
        }));
      });
      return out;
    },
    footer: function () {
      return '<div class="adm-toolbar adm-toolbar-wrap">' +
        strukturData.seksi.map((s, i) =>
          '<button type="button" class="btn btn-ghost btn-sm" data-adm="site-act" data-op="add-member" data-id="' + i + '">+ Anggota ' + esc(s.role.replace('Ketua ', '')) + '</button>'
        ).join('') +
        '<button type="button" class="btn btn-ghost btn-sm" data-adm="site-act" data-op="add-pilau">+ Majelis Pilau Nila</button>' +
      '</div>';
    },
    onAction: function (op, id) {
      const d = strukturData;
      if (op === 'add-member') {
        const i = parseInt(id, 10);
        if (!d.seksi[i]) return null;
        const err = strukturPersist(function () { d.seksi[i].members.push({ name: 'Nama Anggota Baru', photo: '', sektor: '', tasks: [] }); });
        return err ? { err: err } : { edit: 's' + i + 'm' + (d.seksi[i].members.length - 1) };
      }
      if (op === 'add-pilau') {
        const err = strukturPersist(function () { d.pilauNila.push({ name: 'Nama Majelis Baru', photo: '', sektor: '' }); });
        return err ? { err: err } : { edit: 'p' + (d.pilauNila.length - 1) };
      }
      return null;
    }
  };

  // Sektor: tuan rumah & pemimpin ibadah
  const sektorSpec = {
    kind: 'list',
    intro: 'Isi nama dan foto tuan rumah serta pemimpin ibadah untuk setiap unit dan kelompok binakel. Tempat, hari, dan jam diubah di tab "Jadwal Ibadah".',
    entries: function () {
      return sektorRefs().map((r) => {
        const fields = [
          { key: 'hostPhoto', label: 'Foto tuan rumah', type: 'image', maxPx: 500 },
          { key: 'hostName', label: 'Nama tuan rumah', type: 'text', max: 120 },
          { key: 'leaderPhoto', label: 'Foto pemimpin ibadah', type: 'image', maxPx: 500 },
          { key: 'leaderName', label: 'Nama pemimpin ibadah', type: 'text', max: 120 },
          { key: 'leaderStatus', label: 'Status / jabatan pemimpin ibadah', type: 'text', max: 120 }
        ];
        if (r.kind === 'kel') fields.push({ key: 'tanggal', label: 'Tanggal / minggu ibadah', type: 'text', max: 160 });
        const ref = r.ref;
        const saved = scheduleOverrides[r.id] || {};
        const vals = {
          hostPhoto: saved.foto_tuan_rumah || ref.foto_tuan_rumah || ref.host.photo || '',
          hostName: saved.nama_tuan_rumah || ref.host.name,
          leaderPhoto: saved.foto_pemimpin_ibadah || ref.foto_pemimpin_ibadah || ref.leader.photo || '',
          leaderName: saved.nama_pemimpin_ibadah || ref.leader.name,
          leaderStatus: saved.status_pemimpin_ibadah || ref.leader.status
        };
        if (r.kind === 'kel') vals.tanggal = ref.tanggal;
        return {
          id: r.id, group: r.group, title: r.title, sub: 'Tuan rumah: ' + ref.host.name + ' • Pemimpin: ' + ref.leader.name,
          fields: fields, vals: vals,
          save: async function (v) {
            if (!v.hostName.trim() || !v.leaderName.trim()) return 'Nama tuan rumah dan pemimpin ibadah wajib diisi.';
            const session = JSON.parse(sessionStorage.getItem(SS_SESSION) || 'null');
            if (!session || !session.access_token) return 'Sesi login berakhir. Silakan login kembali.';
            const previous = scheduleOverrides[r.id] || {};
            const hostPhoto = await uploadScheduleDataUrl(v.hostPhoto || '', r.id, 'tuan-rumah', session.access_token);
            const leaderPhoto = await uploadScheduleDataUrl(v.leaderPhoto || '', r.id, 'pemimpin-ibadah', session.access_token);
            const payload = {
              action: 'save_schedule', id: r.id, place: ref.place, day: ref.day, time: ref.time,
              week: weekKey(new Date()),
              foto_tuan_rumah: hostPhoto || null, foto_pemimpin_ibadah: leaderPhoto || null,
              nama_tuan_rumah: v.hostName.trim(), nama_pemimpin_ibadah: v.leaderName.trim(),
              status_pemimpin_ibadah: (v.leaderStatus || '').trim()
            };
            const response = await fetch(ADMIN_AUTH_URL, {
              method: 'POST', headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_PUBLISHABLE_KEY, 'Authorization': 'Bearer ' + session.access_token },
              body: JSON.stringify(payload)
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok || !result.success) return result.message || 'Gagal menyimpan data Sektor/Unit/Binakel ke Supabase.';
            scheduleOverrides[r.id] = Object.assign({}, previous, {
              place: ref.place, day: ref.day, time: ref.time, week: payload.week,
              foto_tuan_rumah: hostPhoto, foto_pemimpin_ibadah: leaderPhoto,
              nama_tuan_rumah: payload.nama_tuan_rumah, nama_pemimpin_ibadah: payload.nama_pemimpin_ibadah,
              status_pemimpin_ibadah: payload.status_pemimpin_ibadah, by: currentUser.username, at: new Date().toISOString()
            });
            if (r.kind === 'kel') {
              const map = Object.assign({}, siteStore.sektor || {});
              map[r.id] = Object.assign({}, map[r.id] || {}, { tanggal: (v.tanggal || '').trim() });
              saveSite('sektor', map);
              ref.tanggal = (v.tanggal || '').trim();
            }
            applyScheduleOverrides();
            renderSchedules();
            return null;
          }
        };
      });
    }
  };

  const SITE_TABS = {
    beranda: berandaSpec, profil: profilSpec, struktur: strukturSpec, sektor: sektorSpec,
    pelayanan: pelayananSpec, berita: beritaSpec, renungan: renunganSpec, galeri: galeriSpec,
    pengumuman: pengumumanSpec, informasi: informasiSpec
  };

  /* -- Tampilan editor -- */
  function renderSiteTab() {
    const spec = SITE_TABS[admTab];
    if (!spec) return;
    if (spec.kind === 'form') {
      admEdit = { id: 'main' };
      renderSiteEdit(spec, spec.entries()[0]);
      return;
    }
    if (admEdit) {
      const entry = admEdit.isNew ? spec.blank() : spec.entries().filter((x) => x.id === admEdit.id)[0];
      if (entry) { renderSiteEdit(spec, entry); return; }
      admEdit = null;
    }
    renderSiteList(spec);
  }

  function renderSiteList(spec) {
    const entries = spec.entries();
    let last = null;
    let html = spec.intro ? '<p class="adm-intro">' + esc(spec.intro) + '</p>' : '';
    if (spec.addLabel) {
      html += '<div class="adm-toolbar"><button type="button" class="btn btn-navy btn-sm" data-adm="site-add">+ ' + esc(spec.addLabel) + '</button></div>';
    }
    html += entries.length
      ? entries.map((e) => {
          let g = '';
          if (e.group && e.group !== last) { last = e.group; g = '<h4 class="adm-group">' + esc(e.group) + '</h4>'; }
          return g + '<div class="adm-row">' +
            '<div class="adm-row-main"><strong>' + esc(e.title) + '</strong>' +
              (e.sub ? '<span class="adm-row-sub">' + esc(e.sub) + '</span>' : '') + '</div>' +
            '<div class="adm-row-side">' +
              '<button type="button" class="btn btn-navy btn-sm" data-adm="site-edit" data-id="' + esc(e.id) + '">Ubah</button>' +
              (e.del ? '<button type="button" class="btn btn-ghost btn-sm" data-adm="site-del" data-id="' + esc(e.id) + '">Hapus</button>' : '') +
            '</div></div>';
        }).join('')
      : '<p class="adm-empty">Belum ada data.</p>';
    if (spec.footer) html += spec.footer();
    admBody.innerHTML = html;
  }

  function renderSiteEdit(spec, entry) {
    const isList = spec.kind === 'list';
    admBody.innerHTML =
      (isList ? '<button type="button" class="adm-back" data-adm="back">' + icon('chevron-left') + ' Kembali ke daftar</button>' : '') +
      '<h4 class="adm-form-title">' + esc(entry.title) + '</h4>' +
      (!isList && spec.intro ? '<p class="adm-intro">' + esc(spec.intro) + '</p>' : '') +
      '<form id="admSiteForm" novalidate>' +
        entry.fields.map((f) => fieldHtml(f, entry.vals[f.key])).join('') +
        '<p class="field-error" id="sErr" role="alert"></p>' +
        '<div class="adm-actions">' +
          (isList ? '<button type="button" class="btn btn-ghost btn-sm" data-adm="back">Batal</button>' : '') +
          (!isList && admMulti() ? '<button type="button" class="btn btn-ghost btn-sm" data-adm="menu">' + icon('chevron-left') + ' Kembali ke Menu Panel</button>' : '') +
          '<button type="submit" class="btn btn-navy btn-sm">Simpan</button>' +
        '</div>' +
      '</form>';
  }

  /* -- Interaksi panel -- */
  admBody.addEventListener('click', (e) => {
    const t = e.target.closest('[data-adm]');
    if (!t) return;
    const act = t.getAttribute('data-adm');
    const id = t.getAttribute('data-id');
    const spec = SITE_TABS[admTab];

    if (act === 'staff-toggle' && currentUser && currentUser.role === 'superadmin') {
      const states = staffStatuses();
      states[id] = states[id] === false ? true : false;
      if (!lsSet(STAFF_KEY, states)) { toast('Status tidak dapat disimpan di browser ini.', 'error'); return; }
      renderAdmStaff();
      toast('Status tampilan petugas diperbarui. Ini belum menonaktifkan akun di server.', 'info');
    }
    else if (act === 'menu' && admMulti()) {
      // Kembali ke Menu Panel (tanpa keluar dari panel)
      admTab = null; admEditId = null; admEditKol = null; admEdit = null;
      renderAdmTabs();
      renderAdmBody();
      admBody.scrollTop = 0;
    }
    else if (act === 'open-tab' && can(id)) {
      admTab = id; admEditId = null; admEditKol = null; admEdit = null;
      renderAdmTabs();
      renderAdmBody();
      admBody.scrollTop = 0;
    }
    else if (act === 'back') { admEditId = null; admEditKol = null; admEdit = null; renderAdmBody(); }
    else if (act === 'edit-jadwal' && can('jadwal')) { admEditId = id; renderAdmBody(); }
    else if (act === 'edit-kol' && can('kolektan')) { admEditKol = id; renderAdmBody(); }
    else if (act === 'del-kol' && can('kolektan')) {
      if (!window.confirm('Hapus data kolekta tanggal ' + formatDateID(id) + '?')) return;
      const backup = kolektanData.slice();
      const idx = kolektanData.findIndex((k) => k.date === id);
      if (idx === -1) return;
      kolektanData.splice(idx, 1);
      if (!saveKolektan()) {
        kolektanData.length = 0; backup.forEach((k) => kolektanData.push(k));
        toast('Gagal menyimpan. Penyimpanan browser tidak tersedia.', 'error');
        return;
      }
      admEditKol = null;
      renderKolektan();
      renderAdmBody();
      toast('Data kolekta dihapus.', 'success');
    }
    else if (act === 'site-add' && spec && can(admTab) && spec.blank) { admEdit = { id: 'new', isNew: true }; renderAdmBody(); }
    else if (act === 'site-edit' && spec && can(admTab)) { admEdit = { id: id }; renderAdmBody(); }
    else if (act === 'site-del' && spec && can(admTab)) {
      const entry = spec.entries().filter((x) => x.id === id)[0];
      if (!entry || !entry.del) return;
      if (!window.confirm('Hapus "' + entry.title + '"? Tindakan ini tidak dapat dibatalkan.')) return;
      const err = entry.del();
      if (err) { toast(err, 'error'); return; }
      toast('Data dihapus.', 'success');
      renderAdmBody();
    }
    else if (act === 'site-act' && spec && can(admTab) && spec.onAction) {
      const r = spec.onAction(t.getAttribute('data-op'), id);
      if (!r) return;
      if (r.err) toast(r.err, 'error');
      if (r.edit) admEdit = { id: r.edit };
      renderAdmBody();
    }
    else if (act === 'img-clear') {
      const box = t.closest('.adm-img');
      if (box) setImgValue(box, '');
    }
  });

  admBody.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'kPhotoClear') {
      const preview = $('#kPhotoPreview');
      const input = $('#kPhoto');
      if (preview) { preview.removeAttribute('src'); preview.hidden = true; }
      if (input) input.value = '';
    }
  });

  admBody.addEventListener('input', (e) => {
    if (e.target.id === 'admQ') { admFilter.q = e.target.value; renderAdmJadwalList(); }
    else if (e.target.id === 'kAmt') {
      const digits = e.target.value.replace(/\D/g, '').slice(0, 12);
      if (digits !== e.target.value) e.target.value = digits;
      $('#kWords').textContent = digits ? terbilang(parseInt(digits, 10)) : 'Terbilang akan tampil otomatis.';
    }
    else if (e.target.id === 'kPhoto') {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const allowed = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowed.includes(file.type) || file.size > 5 * 1024 * 1024) {
        toast('Pilih foto JPG, PNG, atau WebP dengan ukuran maksimal 5 MB.', 'error');
        e.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const preview = $('#kPhotoPreview');
        if (preview) { preview.src = reader.result; preview.hidden = false; }
      };
      reader.onerror = () => toast('Foto gagal dibaca. Coba berkas lain.', 'error');
      reader.readAsDataURL(file);
    }
    else if (e.target.hasAttribute && e.target.hasAttribute('data-img-url')) {
      const box = e.target.closest('.adm-img');
      if (box) setImgValue(box, e.target.value.trim());
    }
  });
    /* -- Aksi tombol Kontak & Pesan -- */
  admBody.addEventListener('click', async (e) => {
    const t = e.target.closest('[data-pesan]');
    if (!t) return;

    if (!currentUser || currentUser.role !== 'superadmin') {
      toast('Hanya Super Admin yang dapat mengelola pesan.', 'error');
      return;
    }

    const action = t.getAttribute('data-pesan');
    const id = t.getAttribute('data-id');

    if (action === 'refresh') {
      renderAdmPesan();
      return;
    }

    if (action === 'delete' &&
        !window.confirm('Hapus pesan ini secara permanen?')) {
      return;
    }

    const session = JSON.parse(
      sessionStorage.getItem(SS_SESSION) || 'null'
    );

    if (!session?.access_token) {
      toast('Sesi login tidak ditemukan. Silakan masuk kembali.', 'error');
      return;
    }

    let body;

    if (action === 'read' || action === 'handled') {
      body = {
        action: 'update_contact_message',
        id: id,
        status: action
      };
    } else if (action === 'delete') {
      body = {
        action: 'delete_contact_message',
        id: id
      };
    } else {
      return;
    }

    t.disabled = true;

    try {
      const response = await fetch(
        SUPABASE_URL + '/functions/v1/admin-auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_PUBLISHABLE_KEY,
            'Authorization': 'Bearer ' + session.access_token
          },
          body: JSON.stringify(body)
        }
      );

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || 'Aksi gagal dilakukan.');
      }

      toast(
        action === 'delete'
          ? 'Pesan berhasil dihapus.'
          : 'Status pesan berhasil diperbarui.',
        'success'
      );

      renderAdmPesan();

    } catch (error) {
      toast(error.message || 'Terjadi kesalahan.', 'error');
      t.disabled = false;
    }
  });

  admBody.addEventListener('change', (e) => {
    const t = e.target;
    if (t.id === 'admCat') { admFilter.cat = t.value; renderAdmJadwalList(); }
    else if (t.id === 'admMissing') { admFilter.missing = t.checked; renderAdmJadwalList(); }
    else if (t.id === 'staffQ') { staffFilter.q = t.value; renderAdmStaff(); }
    else if (t.id === 'staffRole') { staffFilter.role = t.value; renderAdmStaff(); }
    else if (t.id === 'staffStatus') { staffFilter.status = t.value; renderAdmStaff(); }
    else if (t.hasAttribute && t.hasAttribute('data-img-file')) {
      const file = t.files && t.files[0];
      if (!file) return;
      if (!/^image\//.test(file.type)) { toast('Berkas harus berupa gambar.', 'error'); t.value = ''; return; }
      const box = t.closest('.adm-img');
      readImageFile(file, parseInt(t.getAttribute('data-max'), 10) || 1000, (data) => {
        if (!data) { toast('Gambar tidak dapat dibaca. Coba berkas lain.', 'error'); return; }
        setImgValue(box, data);
      });
    }
  });

  admBody.addEventListener('click', async (e) => {
    const button = e.target.closest('#changeUsernameBtn');
    if (!button) return;
    const err = $('#pwErr');
    const newUsername = ($('#usernameNew')?.value || '').trim();
    const currentPassword = $('#usernameCurrentPassword')?.value || '';
    const savedSession = JSON.parse(sessionStorage.getItem(SS_SESSION) || 'null');
    if (!currentUser || !savedSession?.access_token) { err.textContent = 'Sesi login tidak ditemukan. Silakan login kembali.'; return; }
    if (!/^[a-zA-Z0-9_.-]{3,40}$/.test(newUsername)) { err.textContent = 'Username harus 3–40 karakter dan hanya boleh berisi huruf, angka, titik, garis bawah, atau tanda hubung.'; return; }
    if (!currentPassword) { err.textContent = 'Masukkan password saat ini untuk konfirmasi.'; return; }
    button.disabled = true; button.textContent = 'Menyimpan…'; err.textContent = '';
    try {
      const response = await fetch(ADMIN_AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_PUBLISHABLE_KEY, 'Authorization': 'Bearer ' + savedSession.access_token },
        body: JSON.stringify({ action: 'change_username', currentPassword, newUsername })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.message || 'Gagal mengubah username.');
      currentUser.username = result.user.username;
      savedSession.user = currentUser;
      sessionStorage.setItem(SS_SESSION, JSON.stringify(savedSession));
      $('#usernameCurrentPassword').value = '';
      toast('Username berhasil diperbarui di Supabase.', 'success');
      renderAdmPassword();
    } catch (error) {
      err.textContent = error.message || 'Tidak dapat menghubungi server.';
    } finally {
      const activeButton = $('#changeUsernameBtn');
      if (activeButton) { activeButton.disabled = false; activeButton.textContent = 'Simpan Username'; }
    }
  });

  admBody.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (e.target.id === 'admPasswordForm') {
      const form = e.target;
      const err = $('#pwErr');
      const oldPass = $('#pwOld').value;
      const newPass = $('#pwNew').value;
      const confirmPass = $('#pwConfirm').value;
      const savedSession = JSON.parse(sessionStorage.getItem(SS_SESSION) || 'null');
      if (!currentUser || !savedSession || !savedSession.access_token) {
        err.textContent = 'Sesi login tidak ditemukan. Silakan login kembali.'; return;
      }
      if (newPass.length < 8) { err.textContent = 'Kata sandi baru minimal 8 karakter.'; return; }
      if (newPass !== confirmPass) { err.textContent = 'Konfirmasi kata sandi tidak sama.'; return; }
      const submit = form.querySelector('button[type="submit"]');
      if (submit) { submit.disabled = true; submit.textContent = 'Menyimpan…'; }
      err.textContent = '';
      fetch(ADMIN_AUTH_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_PUBLISHABLE_KEY,
          'Authorization': 'Bearer ' + savedSession.access_token
        },
        body: JSON.stringify({ action: 'change_password', currentPassword: oldPass, newPassword: newPass })
      }).then(async (response) => {
        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.success) throw new Error(result.message || 'Gagal mengubah kata sandi.');
        form.reset();
        toast('Kata sandi berhasil diubah secara permanen.', 'success');
        err.textContent = result.message || 'Kata sandi berhasil diubah.';
      }).catch((error) => {
        err.textContent = error.message || 'Tidak dapat menghubungi server.';
      }).finally(() => {
        if (submit) { submit.disabled = false; submit.textContent = 'Ubah Kata Sandi'; }
      });
      return;
    }

    
if (e.target.id === 'admJadwalForm') {
  if (!can('jadwal') || !admEditId) return;

  const r = scheduleRegistry().filter((x) => x.id === admEditId)[0];
  const place = $('#fPlace').value.trim();
  const day = parseInt($('#fDay').value, 10);
  const time = $('#fTime').value;
  const namaTuanRumah = $('#fNamaTuanRumah')?.value.trim() || '';
  const namaPemimpin = $('#fNamaPemimpin')?.value.trim() || '';
  const statusPemimpin = $('#fStatusPemimpin')?.value.trim() || '';
  const err = $('#fErr');

  const fotoTuanRumahFile = $('#fFotoTuanRumah')?.files?.[0] || null;
  const fotoPemimpinFile = $('#fFotoPemimpin')?.files?.[0] || null;
  const clearFotoTuanRumah = $('#fClearFotoTuanRumah')?.value === '1';
  const clearFotoPemimpin = $('#fClearFotoPemimpin')?.value === '1';

  if (place.length < 3) {
    err.textContent = 'Tempat ibadah minimal 3 karakter.';
    return;
  }
  if (!namaTuanRumah || !namaPemimpin) {
    err.textContent = 'Nama Tuan Rumah dan Pemimpin Ibadah wajib diisi.';
    return;
  }

  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) {
    err.textContent = 'Jam tidak valid.';
    return;
  }

  if (!(day >= 0 && day <= 6)) {
    err.textContent = 'Hari tidak valid.';
    return;
  }

  const prev = scheduleOverrides[admEditId];

  const entry = {
    place: place,
    day: day,
    time: time,
    week: weekKey(new Date()),
    by: currentUser.username,
    at: new Date().toISOString(),
    foto_tuan_rumah: clearFotoTuanRumah ? null : (prev?.foto_tuan_rumah || r?.ref?.foto_tuan_rumah || null),
    foto_pemimpin_ibadah: clearFotoPemimpin ? null : (prev?.foto_pemimpin_ibadah || r?.ref?.foto_pemimpin_ibadah || null),
    nama_tuan_rumah: namaTuanRumah, nama_pemimpin_ibadah: namaPemimpin, status_pemimpin_ibadah: statusPemimpin
  };

  if (prev) {
    if (prev.title) entry.title = prev.title;
    if (prev.note) entry.note = prev.note;
  }

  const allowSchedulePhotos = !(r.cat === 'anak' && r.id !== 'sch-13') &&
    !(r.cat === 'doa' && r.id === 'sch-12');
  if (!allowSchedulePhotos) {
    entry.foto_tuan_rumah = null;
    entry.foto_pemimpin_ibadah = null;
  }

  const titleEl = $('#fTitle');

  if (titleEl && currentUser.role === 'superadmin') {
    const title = titleEl.value.trim();

    if (title.length < 3) {
      err.textContent = 'Nama kegiatan minimal 3 karakter.';
      return;
    }

    entry.title = title;
    entry.note = $('#fNote').value.trim();
  }

  const scheduleSession = JSON.parse(
    sessionStorage.getItem(SS_SESSION) || 'null'
  );

  if (!scheduleSession || !scheduleSession.access_token) {
    err.textContent = 'Sesi login berakhir. Silakan login kembali.';
    return;
  }

  const submit = e.target.querySelector('button[type="submit"]');

  try {
    if (submit) {
      submit.disabled = true;
      submit.textContent = 'Menyimpan...';
    }

    err.textContent = '';

    // Upload foto Tuan Rumah jika ada foto baru.
    if (allowSchedulePhotos && !clearFotoTuanRumah && fotoTuanRumahFile) {
      entry.foto_tuan_rumah = await uploadSchedulePhoto(
        fotoTuanRumahFile,
        admEditId,
        'tuan-rumah',
        scheduleSession.access_token
      );
    }

    // Upload foto Pemimpin Ibadah jika ada foto baru.
    if (allowSchedulePhotos && !clearFotoPemimpin && fotoPemimpinFile) {
      entry.foto_pemimpin_ibadah = await uploadSchedulePhoto(
        fotoPemimpinFile,
        admEditId,
        'pemimpin-ibadah',
        scheduleSession.access_token
      );
    }

    // Simpan jadwal dan lokasi foto ke database.
    const response = await fetch(ADMIN_AUTH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_PUBLISHABLE_KEY,
        'Authorization': 'Bearer ' + scheduleSession.access_token
      },
      body: JSON.stringify({
        action: 'save_schedule',
        id: admEditId,
        place: place,
        day: day,
        time: time,
        week: entry.week,
        foto_tuan_rumah: entry.foto_tuan_rumah,
        foto_pemimpin_ibadah: entry.foto_pemimpin_ibadah,
        nama_tuan_rumah: entry.nama_tuan_rumah,
        nama_pemimpin_ibadah: entry.nama_pemimpin_ibadah,
        status_pemimpin_ibadah: entry.status_pemimpin_ibadah,
        ...(currentUser.role === 'superadmin' ? {
          title: entry.title,
          note: entry.note
        } : {})
      })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Jadwal gagal disimpan.');
    }

    scheduleOverrides[admEditId] = entry;
    applyScheduleOverrides();

    admEditId = null;
    renderAdmBody();
    renderSchedules();

    toast('Jadwal dan foto berhasil disimpan ke Supabase.', 'success');
    return;

  } catch (error) {
    err.textContent = error.message || 'Gagal menyimpan jadwal dan foto.';
    return;

  } finally {
    if (submit) {
      submit.disabled = false;
      submit.textContent = 'Simpan';
    }
  }
  }

    if (e.target.id === 'admKolForm') {
      if (!can('kolektan')) return;
      const date = $('#kDate').value;
      const digits = $('#kAmt').value.replace(/\D/g, '');
      const err = $('#kErr');
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) { err.textContent = 'Tanggal wajib diisi.'; return; }
      const total = digits ? parseInt(digits, 10) : 0;
      if (!(total > 0)) { err.textContent = 'Jumlah kolekta harus lebih dari 0.'; return; }
      const backup = kolektanData.slice();
      const wasEditing = !!admEditKol;
      const oldRecord = admEditKol ? kolektanData.find((k) => k.date === admEditKol) : null;
      const photoPreview = $('#kPhotoPreview');
      const photo = photoPreview && !photoPreview.hidden ? photoPreview.src : '';
      const note = $('#kNote').value.trim();
      if (admEditKol) {
        const i0 = kolektanData.findIndex((k) => k.date === admEditKol);
        if (i0 !== -1) kolektanData.splice(i0, 1);
      }
      const i1 = kolektanData.findIndex((k) => k.date === date);
      if (i1 !== -1) kolektanData.splice(i1, 1);
      kolektanData.push({
        id: oldRecord && oldRecord.id ? oldRecord.id : ('kol-' + date),
        date: date, total: total, words: terbilang(total), photo: photo,
        note: note, status: 'Dokumentasi', updatedBy: currentUser ? currentUser.name : 'petugas',
        updatedAt: new Date().toISOString()
      });
      if (!saveKolektan()) {
        kolektanData.length = 0; backup.forEach((k) => kolektanData.push(k));
        err.textContent = 'Gagal menyimpan. Penyimpanan browser tidak tersedia.';
        return;
      }
      admEditKol = null;
      renderKolektan();
      renderAdmBody();
      toast(wasEditing ? 'Data kolekta diperbarui.' : 'Data kolekta disimpan.', 'success');
      return;
    }

    if (e.target.id === 'admSiteForm') {
      const spec = SITE_TABS[admTab];
      if (!spec || !can(admTab) || !admEdit) return;
      const entry = admEdit.isNew ? spec.blank() : spec.entries().filter((x) => x.id === admEdit.id)[0];
      const errEl = $('#sErr');
      if (!entry) { admEdit = null; renderAdmBody(); return; }
      const submit = e.target.querySelector('button[type="submit"]');
      if (submit) { submit.disabled = true; submit.textContent = 'Menyimpan...'; }
      let err;
      try { err = await entry.save(readForm(e.target, entry.fields)); }
      catch (saveError) { err = saveError.message || 'Gagal menyimpan data.'; }
      if (err) { errEl.textContent = err; if (submit) { submit.disabled = false; submit.textContent = 'Simpan'; } return; }
      toast('Perubahan berhasil disimpan.', 'success');
      if (spec.kind !== 'form') admEdit = null;
      renderAdmBody();
    }
  });

  updateLoginUi();

  /* ==========================================================
     21. INISIALISASI
     ========================================================== */
  renderHero();
  renderProfile();
  renderScheduleFilters();
  loadScheduleFromSupabase();
  renderMinistries();
  renderNewsFilters();
  renderNews();
  renderDevotion();
  renderGalleryFilters();
  renderGallery();
  loadGalleryFromSupabase();
  renderAnnouncements();
  renderTopbar();
  renderLocation();
  renderContact();
  renderSumbangan();
  renderKolektan();
  renderSektor();
  renderStruktur();
  loadStrukturFromServer();
  loadSiteContentFromServer('hero');
  loadSiteContentFromServer('profile');
  loadSiteContentFromServer('news');
  loadSiteContentFromServer('devotions');
  loadSiteContentFromServer('announcements');
  loadSiteContentFromServer('ministries');
  onScroll();

  window.setInterval(renderSchedules, 5 * 60 * 1000);

})();
