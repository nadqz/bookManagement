import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBookContext } from '../context/BookContext';
import BukuForm from './BukuForm'; // Import form untuk modal/inline form
import './KelolaDataStyle.css';
import { FaEdit, FaTrashAlt, FaPlusCircle, FaTimes } from 'react-icons/fa';

const KelolaData = () => {
    const { books, deleteBook, getBookById } = useBookContext();
    const navigate = useNavigate();

    // State untuk mengelola tampilan Form (modal)
    const [isFormOpen, setIsFormOpen] = useState(false);
    // State untuk menyimpan ID buku yang akan diedit (null jika mode Tambah)
    const [currentBookId, setCurrentBookId] = useState(null);

    // Dapatkan data buku yang akan diedit
    const bookToEdit = currentBookId ? getBookById(currentBookId) : null;
    const formTitle = currentBookId ? 'Edit Data Buku' : 'Tambah Data Buku Baru';

    // Fungsi membuka form untuk mode Tambah
    const openAddForm = () => {
        setCurrentBookId(null); // Reset ID
        setIsFormOpen(true);
    };

    // Fungsi membuka form untuk mode Edit
    const openEditForm = (bookId) => {
        setCurrentBookId(bookId);
        setIsFormOpen(true);
    };
    
    // Fungsi menutup form (dipanggil setelah submit atau klik batal/tutup)
    const closeForm = () => {
        setIsFormOpen(false);
        setCurrentBookId(null);
    };

    const handleDelete = (bookId, bookTitle) => {
        if (window.confirm(`Apakah Anda yakin ingin menghapus buku: "${bookTitle}"? Tindakan ini tidak dapat dibatalkan.`)) {
            deleteBook(bookId);
            // Tambahkan notifikasi jika diperlukan, tetapi window.confirm sudah cukup
        }
    };

    return (
        <div className='kelola-data-page'>
            <div className='spacer'></div> 

            <div className='container'>
                <div className='manage-header'>
                    <h1>Kelola Data Katalog Buku</h1>
                    <p className='subtitle'>Tambah, Edit, dan Hapus data buku dari katalog utama.</p>
                    
                    {/* Tombol Tambah Data */}
                    <button onClick={openAddForm} className='btn-add-new'>
                        <FaPlusCircle /> Tambah Buku Baru
                    </button>
                </div>

                {/* MODAL / OVERLAY FORM */}
                {isFormOpen && (
                    <div className='form-modal-overlay'>
                        <div className='form-modal-content'>
                             <button onClick={closeForm} className='btn-close-form'>
                                <FaTimes />
                            </button>
                            {/* Memanggil BukuForm dengan props yang diperlukan */}
                            <BukuForm 
                                bookToEdit={bookToEdit} 
                                formTitle={formTitle}
                                onFormSubmitSuccess={closeForm} // Tutup form setelah submit
                                onCancel={closeForm} // Tutup form saat tombol Batal diklik
                            />
                        </div>
                    </div>
                )}
                {/* AKHIR MODAL FORM */}


                <div className='manage-book-grid'>
                    {books.length > 0 ? (
                        books.map(book => (
                            <div className='manage-book-card' key={book.id}>
                                <div className='card-cover-container' onClick={() => navigate(`/detail/${book.id}`)}>
                                    {/* Handle jika cover kosong atau default */}
                                    <img 
                                        src={book.cover || '/images/books/default.jpg'} 
                                        alt={book.title} 
                                        className='card-book-cover' 
                                    />
                                </div>
                                <div className='card-info'>
                                    <Link to={`/detail/${book.id}`} className='card-title-link'>
                                        {book.title}
                                    </Link>
                                    <p className='card-author'>Oleh: {book.author}</p>
                                    <p className='card-price'>Rp{book.price.toLocaleString('id-ID')}</p>
                                    <p className='card-category tag'>{book.category.toUpperCase()}</p>
                                </div>
                                <div className='card-actions'>
                                    {/* Tombol Edit */}
                                    <button 
                                        onClick={() => openEditForm(book.id)} 
                                        className='btn-action btn-edit'
                                    >
                                        <FaEdit /> Edit
                                    </button>
                                    {/* Tombol Hapus */}
                                    <button 
                                        className='btn-action btn-delete' 
                                        onClick={() => handleDelete(book.id, book.title)}
                                    >
                                        <FaTrashAlt /> Hapus
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='no-books-found'>Katalog buku kosong. Silakan tambahkan buku baru!</p>
                    )}
                </div>
            </div>
            
            <div className='spacer-bottom'></div>
        </div>
    );
}

export default KelolaData;