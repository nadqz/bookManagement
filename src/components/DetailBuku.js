// File: src/components/DetailBuku.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBookContext } from '../context/BookContext'; // Import hook context
import './DetailBukuStyle.css'; 
import { FaBook, FaUserEdit, FaCalendarAlt, FaHashtag } from 'react-icons/fa'; // Beberapa ikon

const DetailBuku = () => {
    const { bookId } = useParams(); 
    const { getBookById } = useBookContext(); // Ambil fungsi dari context
    
    // Mencari data buku yang sesuai
    const book = getBookById(bookId);

    // Jika buku tidak ditemukan
    if (!book) {
        return (
            <div className='detail-page-container'>
                <div className='spacer'></div>
                <div className='container not-found'>
                    <h1>404: Buku Tidak Ditemukan</h1>
                    <p>Informasi buku yang Anda cari tidak tersedia di katalog.</p>
                    <Link to="/" className="btn-back">Kembali ke Beranda</Link>
                </div>
                <div className='spacer-bottom'></div>
            </div>
        );
    }

    // Format harga
    const formattedPrice = book.price.toLocaleString('id-ID');

    return (
        <div className='detail-page-container'>
            <div className='spacer'></div> 

            <div className='container detail-content-wrapper'>
                
                {/* Bagian Atas: Detail Utama & Cover */}
                <div className='detail-main-section'>
                    <div className='book-cover-area'>
                        <img src={book.cover} alt={book.title} className='detail-book-cover' />
                        {/* Tombol Aksi CRUD (Mengarah ke route EditBook) */}
                        <div className='detail-actions'>
                            <Link to={`/edit/${book.id}`} className='btn-edit'>
                                <FaUserEdit /> Edit Data
                            </Link>
                        </div>
                    </div>

                    <div className='book-info-area'>
                        <span className={`category-tag tag-${book.category}`}>{book.category.toUpperCase()}</span>
                        <h1>{book.title}</h1>
                        <p className='author-publisher'>
                            Oleh: **{book.author}** | Penerbit: **{book.publisher}**
                        </p>
                        
                        {/* Harga (Walau non-ecommerce, harga ditampilkan sebagai info) */}
                        <div className='price-display'>
                            Harga Katalog: **Rp{formattedPrice}**
                        </div>

                        {/* Ringkasan/Deskripsi */}
                        <div className='description-box'>
                            <h2>Deskripsi Singkat</h2>
                            <p>{book.description}</p>
                        </div>

                        {/* Spesifikasi Detail */}
                        <div className='specs-grid'>
                            <div className='spec-item'>
                                <FaBook size={20} />
                                <p>Halaman: **{book.pages}**</p>
                            </div>
                            <div className='spec-item'>
                                <FaCalendarAlt size={20} />
                                <p>Rilis: **{book.releaseDate}**</p>
                            </div>
                            <div className='spec-item'>
                                <FaHashtag size={20} />
                                <p>ISBN: **{book.isbn}**</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian Bawah: Buku Rekomendasi (Opsional) */}
                <div className='related-books-section'>
                    <h2>Buku Lain dalam Kategori {book.category.toUpperCase()}</h2>
                    {/* Di sini bisa di-looping buku-buku lain dari kategori yang sama */}
                    <p>... (Placeholder untuk daftar buku terkait) ...</p>
                </div>

            </div>
            
            <div className='spacer-bottom'></div>
        </div>
    );
}

export default DetailBuku;