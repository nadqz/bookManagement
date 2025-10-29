import React, { useState, useEffect } from 'react';
import { useBookContext } from '../context/BookContext';
import './KelolaDataStyle.css'; // Menggunakan CSS yang sama untuk styling form

// Data kategori yang tersedia untuk dropdown
const categoryOptions = [
    'fantasi', 'romantis', 'aksi', 'sejarah', 'misteri', 
    'sains', 'agama', 'bisnis', 'kesehatan', 'pendidikan', 'anak', 'komik'
];

// Data awal default untuk form kosong
const initialFormData = {
    id: '',
    title: '',
    author: '',
    price: '',
    category: 'fantasi', // Default
    cover: '/images/books/default.jpg', // Default cover placeholder
    description: '',
    publisher: '',
    pages: '',
    isbn: '',
    releaseDate: '',
};

// Menerima props baru: formTitle, onFormSubmitSuccess, onCancel
const BukuForm = ({ bookToEdit, formTitle, onFormSubmitSuccess, onCancel }) => {
    const [formData, setFormData] = useState(bookToEdit || initialFormData);
    const { addBook, updateBook } = useBookContext();
    const isEditMode = !!bookToEdit;

    useEffect(() => {
        // Memastikan form terisi dengan data yang benar saat masuk mode edit
        if (bookToEdit) {
            setFormData({
                ...bookToEdit,
                price: bookToEdit.price.toString(), // Konversi number ke string untuk input form
                pages: bookToEdit.pages.toString(), // Konversi number ke string untuk input form
            });
        } else {
             // Reset form ke data kosong saat mode Tambah
             setFormData(initialFormData);
        }
    }, [bookToEdit]); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validasi sederhana
        if (!formData.title || !formData.author || !formData.price || !formData.category) {
            alert('Judul, Penulis, Harga, dan Kategori harus diisi.');
            return;
        }

        // Memanggil fungsi dari context
        if (isEditMode) {
            updateBook(formData);
        } else {
            addBook(formData);
        }

        // Panggil fungsi penutup modal setelah submit berhasil
        onFormSubmitSuccess();
    };

    return (
        <div className='form-container'>
            <h2>{formTitle}</h2> 
            <form onSubmit={handleSubmit}>
                
                {/* Judul Buku */}
                <div className='form-group'>
                    <label htmlFor='title'>Judul Buku</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                {/* Penulis */}
                <div className='form-group'>
                    <label htmlFor='author'>Penulis</label>
                    <input
                        type='text'
                        id='author'
                        name='author'
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Kategori */}
                <div className='form-group'>
                    <label htmlFor='category'>Kategori</label>
                    <select
                        id='category'
                        name='category'
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        {categoryOptions.map(cat => (
                            <option key={cat} value={cat}>{cat.toUpperCase()}</option>
                        ))}
                    </select>
                </div>

                {/* Harga dan Halaman (dalam satu baris) */}
                <div className='form-group-row'>
                    <div className='form-group'>
                        <label htmlFor='price'>Harga (Rp)</label>
                        <input
                            type='number'
                            id='price'
                            name='price'
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pages'>Jumlah Halaman</label>
                        <input
                            type='number'
                            id='pages'
                            name='pages'
                            value={formData.pages}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Penerbit dan Tanggal Rilis (dalam satu baris) */}
                 <div className='form-group-row'>
                    <div className='form-group'>
                        <label htmlFor='publisher'>Penerbit</label>
                        <input
                            type='text'
                            id='publisher'
                            name='publisher'
                            value={formData.publisher}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='releaseDate'>Tanggal Rilis</label>
                        <input
                            type='date'
                            id='releaseDate'
                            name='releaseDate'
                            value={formData.releaseDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                {/* ISBN */}
                <div className='form-group'>
                    <label htmlFor='isbn'>ISBN</label>
                    <input
                        type='text'
                        id='isbn'
                        name='isbn'
                        value={formData.isbn}
                        onChange={handleChange}
                    />
                </div>
                
                {/* URL Cover (Path Gambar) */}
                <div className='form-group'>
                    <label htmlFor='cover'>URL Cover Buku</label>
                    <input
                        type='text'
                        id='cover'
                        name='cover'
                        value={formData.cover}
                        onChange={handleChange}
                    />
                    <small>Gunakan format seperti: `/images/books/judul-buku.jpg`</small>
                </div>
                
                {/* Deskripsi */}
                <div className='form-group'>
                    <label htmlFor='description'>Deskripsi Singkat</label>
                    <textarea
                        id='description'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        rows='4'
                    ></textarea>
                </div>

                <div className='form-actions'>
                    <button type='submit' className='btn-submit'>
                        {isEditMode ? 'Simpan Perubahan' : 'Tambah Buku'}
                    </button>
                    {/* Tombol Batal akan memanggil fungsi onCancel dari props */}
                    <button 
                        type='button' 
                        className='btn-cancel'
                        onClick={onCancel}
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BukuForm;