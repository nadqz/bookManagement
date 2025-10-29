// File: src/components/ListBuku.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBookContext } from '../context/BookContext'; // Import hook context
import './ListBukuStyle.css'; // Kita akan buat file styling ini

const ListBuku = () => {
    const { categoryId } = useParams(); // Mengambil categoryId dari URL
    const { getBooksByCategory } = useBookContext(); // Ambil fungsi dari context
    
    // Filter buku berdasarkan categoryId menggunakan fungsi context
    const filteredBooks = getBooksByCategory(categoryId);

    // Untuk menampilkan nama kategori yang lebih user-friendly
    const getCategoryTitle = (id) => {
        // Ini bisa diperbaiki lagi dengan data kategori dari Kategori.js
        const categoriesMap = {
            'fantasi': 'Fiksi Fantasi',
            'romantis': 'Fiksi Romantis',
            'aksi': 'Komik Aksi & Petualangan',
            'sejarah': 'Fiksi Sejarah',
            'misteri': 'Fiksi Misteri & Detektif',
            'sains': 'Sains & Teknologi',
            'agama': 'Agama & Spiritual',
            'bisnis': 'Bisnis & Ekonomi',
            'kesehatan': 'Kesehatan & Gaya Hidup',
            'pendidikan': 'Pendidikan',
            'anak': 'Buku Anak-anak', 
            'komik': 'Komik & Manga', 
        };
        return categoriesMap[id] || `Kategori: ${id.charAt(0).toUpperCase() + id.slice(1)}`;
    };

    const currentCategoryTitle = getCategoryTitle(categoryId);

    return (
        <div className='list-buku-page'>
            <div className='spacer'></div> 

            <div className='container'>
                <div className='list-buku-header'>
                    <h1>Buku dalam Kategori: {currentCategoryTitle}</h1>
                    <p className='subtitle'>Temukan semua koleksi buku menarik dari kategori ini.</p>
                </div>

                {filteredBooks.length > 0 ? (
                    <div className='book-grid-list'>
                        {filteredBooks.map(book => (
                            <div className='book-card' key={book.id}>
                                <img src={book.cover} alt={book.title} className='book-cover' />
                                <h3 className='book-title'>{book.title}</h3>
                                <p className='book-author'>{book.author}</p>
                                <p className='book-price'>Rp{book.price.toLocaleString('id-ID')}</p>
                                {/* Link ke DetailBuku */}
                                <Link to={`/detail/${book.id}`} className='btn-detail'>Lihat Detail</Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='no-books-found'>Tidak ada buku ditemukan dalam kategori ini.</p>
                )}
            </div>
            
            <div className='spacer-bottom'></div>
        </div>
    );
};

export default ListBuku;