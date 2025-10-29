// File: src/components/Beranda.js

import React from 'react';
import './BerandaStyle.css';
import { Link } from 'react-router-dom';
import { useBookContext } from '../context/BookContext'; // Import hook context

const Beranda = () => {
    const { books } = useBookContext(); // Ambil daftar buku lengkap
    // Ambil 4 buku pertama untuk ditampilkan di bagian unggulan
    const featuredBooks = books.slice(0, 4); 

    return (
        <div className='beranda-page'>
            {/* Jarak dari Fixed Navbar */}
            <div className='spacer'></div> 

            <div className='container'>
                
                {/* 1. Hero Section / Banner Utama (Tidak Berubah) */}
                <div className='hero-section'>
                    <div className='main-promo-banner'>
                        <div className='promo-content'>
                            <span className='promo-label'>Khusus Payday</span>
                            <h1>Pesta Diskon Buku 70%</h1>
                            <p>Flash Sale eksklusif di PustakaKata. Temukan buku impian Anda dengan harga spesial.</p>
                            <span className='promo-date'>25 - 31 Oktober 2025</span>
                            <Link to='/Category' className='btn-primary'>Lihat Semua Promo</Link>
                        </div>
                    </div>
                    
                    <div className='side-offers'>
                        <div className='offer-card card-top'>
                            <p>Promo Aksi & Petualangan</p>
                            <h3>Koleksi Komik Baru</h3>
                            <Link to='/Category' className='btn-secondary'>Beli Sekarang</Link>
                        </div>
                        <div className='offer-card card-bottom'>
                            <h4>Special Offer</h4>
                            <p>Diskon 25% untuk kategori Edukasi dan Pengembangan Diri.</p>
                            <span className='offer-date'>Berlaku 26 - 31 Oktober 2025</span>
                        </div>
                    </div>
                </div>

                {/* 2. Kategori Terlaris (Tidak Berubah) */}
                <div className='section kategori-terlaris'>
                    <h2>Kategori Terlaris</h2>
                    <p className='subtitle'>Jelajahi kategori yang paling diminati oleh para pembaca.</p>
                    
                    <div className='category-showcase-grid'>
                        <Link to='/kategori/komik' className='category-card card-komik'>Komik Aksi & Petualangan</Link>
                        <Link to='/kategori/romantis' className='category-card card-romantis'>Fiksi Romantis</Link>
                        <Link to='/kategori/fantasi' className='category-card card-fantasi'>Fiksi Fantasi</Link>
                        <Link to='/kategori/sejarah' className='category-card card-sejarah'>Fiksi Sejarah</Link>
                        <Link to='/kategori/misteri' className='category-card card-misteri'>Fiksi Misteri & Detektif</Link>
                    </div>
                </div>

                {/* 3. Pilihan Buku Rekomendasi/Tawaran Khusus (Menggunakan data dinamis) */}
                <div className='section buku-unggulan'>
                    <h2>Pilihan Buku Unggulan</h2>
                    <p className='subtitle'>Temukan judul-judul populer yang sedang menjadi *trending*.</p>
                    
                    <div className='book-grid'>
                        {/* Loop melalui buku unggulan dari context */}
                        {featuredBooks.map(book => (
                            <div className='book-card' key={book.id}>
                                <img src={book.cover} alt={book.title} className='book-cover' /> 
                                <p className='book-price'>Rp{book.price.toLocaleString('id-ID')}</p>
                                <Link to={`/detail/${book.id}`} className='detail-link'>Lihat Detail</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Pastikan ada margin di bagian bawah agar tidak menempel dengan Footer */}
            <div className='spacer-bottom'></div>
        </div>
    );
}

export default Beranda;