// File: src/data/booksData.js

const booksData = [
    {
        id: 'book1',
        title: 'Overlord Light Novel: The Lizard Man',
        author: 'Kugane Maruyama',
        price: 135000,
        category: 'fantasi',
        cover: '/images/books/overlord.jpg', // Path ke gambar cover
        description: 'Seri light novel fantasi gelap yang populer. Volume ini menceritakan tentang invasi Lizardmen.',
        publisher: 'Kadokawa',
        pages: 320,
        isbn: '978-602-428-123-4',
        releaseDate: '2023-01-15'
    },
    {
        id: 'book2',
        title: 'The Morose Mononokean 15',
        author: 'Kiri Wazawa',
        price: 50000,
        category: 'komik', // Ubah kategori menjadi 'komik'
        cover: '../assest/mononokean.jpg',
        description: 'Manga tentang seorang siswa sekolah menengah yang dapat melihat youkai dan terpaksa bekerja di Mononokean.',
        publisher: 'Square Enix',
        pages: 180,
        isbn: '978-602-428-124-1',
        releaseDate: '2022-11-20'
    },
    {
        id: 'book3',
        title: 'I Came to Be Married to the Demon (Bind Up)',
        author: 'Amewaka Mokke',
        price: 55000,
        category: 'romantis',
        cover: '/images/books/married-demon.jpg',
        description: 'Manga romantis fantasi tentang seorang gadis yang ditawarkan sebagai pengantin kepada iblis.',
        publisher: 'Shogakukan',
        pages: 200,
        isbn: '978-602-428-125-8',
        releaseDate: '2023-03-10'
    },
    {
        id: 'book4',
        title: 'Light Novel: The Rising of the Shield Hero 03',
        author: 'Aneko Yusagi',
        price: 115000,
        category: 'fantasi',
        cover: '/images/books/shield-hero.jpg',
        description: 'Petualangan Naofumi, pahlawan perisai, terus berlanjut di dunia fantasi yang kejam.',
        publisher: 'Kadokawa',
        pages: 300,
        isbn: '978-602-428-126-5',
        releaseDate: '2023-02-01'
    },
    {
        id: 'book5',
        title: 'The Eminence in Shadow 4',
        author: 'Daisuke Aizawa',
        price: 115000,
        category: 'fantasi',
        cover: '/images/books/eminence-shadow.jpg',
        description: 'Light novel isekai komedi gelap tentang seorang pemuda yang diam-diam menjadi dalang dunia.',
        publisher: 'Enterbrain',
        pages: 280,
        isbn: '978-602-428-127-2',
        releaseDate: '2023-04-20'
    },
    {
        id: 'book6',
        title: 'Goblin Slayer 2',
        author: 'Kumo Kagyu',
        price: 120000,
        category: 'fantasi',
        cover: '/images/books/goblin-slayer.jpg',
        description: 'Light novel fantasi gelap yang mengikuti petualangan seorang pemburu goblin tanpa nama.',
        publisher: 'SB Creative',
        pages: 290,
        isbn: '978-602-428-128-9',
        releaseDate: '2023-05-05'
    },
    {
        id: 'book7',
        title: 'Petualangan Kuro : Jurasik Aquatik',
        author: 'Jester',
        price: 49000,
        category: 'komik', // Ubah kategori menjadi 'komik'
        cover: '/images/books/kuro-aquatik.jpg',
        description: 'Komik petualangan seru tentang Kuro di dunia bawah air Jurassic.',
        publisher: 'Elex Media Komputindo',
        pages: 150,
        isbn: '978-602-04-123-5',
        releaseDate: '2022-09-10'
    },
    {
        id: 'book8',
        title: 'Sakti Family Begins',
        author: 'Alsenai',
        price: 45000,
        category: 'anak', // Kategori baru: anak
        cover: '/images/books/sakti-family.jpg',
        description: 'Buku cerita anak yang mengisahkan awal petualangan keluarga Sakti.',
        publisher: 'Gramedia Pustaka Utama',
        pages: 100,
        isbn: '978-602-03-456-7',
        releaseDate: '2023-06-01'
    },
    {
        id: 'book9',
        title: 'Koloni Gundala: Amuk Vol. 2',
        author: 'Iskandar Soeliman',
        price: 51000,
        category: 'komik', // Kategori baru: komik
        cover: '/images/books/gundala.jpg',
        description: 'Komik klasik Indonesia dengan cerita aksi Gundala yang ikonik.',
        publisher: 'Bumilangit',
        pages: 170,
        isbn: '978-602-04-789-0',
        releaseDate: '2023-07-18'
    },
    {
        id: 'book10',
        title: 'Dasar-Dasar Pemrograman Python',
        author: 'Budi Raharjo',
        price: 95000,
        category: 'sains', // Menambahkan kategori sains
        cover: '/images/books/python.jpg',
        description: 'Buku panduan lengkap untuk mempelajari dasar-dasar pemrograman Python.',
        publisher: 'Informatika',
        pages: 400,
        isbn: '978-623-7788-00-1',
        releaseDate: '2022-10-01'
    },
    {
        id: 'book11',
        title: 'Filsafat Ilmu: Sebuah Pengantar',
        author: 'Jujun S. Suriasumantri',
        price: 80000,
        category: 'sains', // Kategori sains
        cover: '/images/books/filsafat-ilmu.jpg',
        description: 'Pengantar komprehensif tentang Filsafat Ilmu dan perkembangannya.',
        publisher: 'Sinar Harapan',
        pages: 250,
        isbn: '978-979-416-042-3',
        releaseDate: '2021-03-20'
    },
    {
        id: 'book12',
        title: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki',
        price: 100000,
        category: 'bisnis', // Kategori bisnis
        cover: '/images/books/rich-dad.jpg',
        description: 'Buku finansial pribadi yang menantang pemikiran konvensional tentang uang.',
        publisher: 'Gramedia Pustaka Utama',
        pages: 350,
        isbn: '978-979-22-2977-8',
        releaseDate: '2000-04-10'
    },
    {
        id: 'book13',
        title: 'Psikologi Pendidikan',
        author: 'Slavin, Robert E.',
        price: 150000,
        category: 'pendidikan', // Kategori pendidikan
        cover: '/images/books/psikologi-pendidikan.jpg',
        description: 'Buku teks standar yang membahas prinsip-prinsip psikologi dalam pendidikan.',
        publisher: 'Indeks',
        pages: 600,
        isbn: '978-979-683-093-4',
        releaseDate: '2019-08-01'
    },
];

export default booksData;