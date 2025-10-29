import React, { createContext, useState, useContext, useEffect } from 'react';
import initialBooksData from '../data/booksData'; // Import data awal

const BookContext = createContext();

// Fungsi utilitas untuk menghasilkan ID unik baru
const generateNewId = (currentBooks) => {
    // Cari ID numerik tertinggi dari data yang ada
    const maxId = currentBooks.reduce((max, book) => {
        // Mengambil angka dari ID (misal 'book1' -> 1)
        const numId = parseInt(book.id.replace('book', '')) || 0;
        return numId > max ? numId : max;
    }, 0);

    return `book${maxId + 1}`;
};

export const BookProvider = ({ children }) => {
    // State utama untuk menyimpan semua data buku
    const [books, setBooks] = useState(() => {
        // Ambil data dari Local Storage jika ada, jika tidak, gunakan data awal
        const savedBooks = localStorage.getItem('bookstore_books');
        return savedBooks ? JSON.parse(savedBooks) : initialBooksData;
    });

    // Efek samping untuk menyimpan data ke Local Storage setiap kali 'books' berubah
    useEffect(() => {
        localStorage.setItem('bookstore_books', JSON.stringify(books));
    }, [books]);

    // --- Fungsi-fungsi CRUD ---

    const addBook = (newBook) => {
        const bookWithId = {
            ...newBook,
            id: generateNewId(books), // Buat ID unik
            price: Number(newBook.price),
            pages: Number(newBook.pages)
        };
        setBooks(prevBooks => [...prevBooks, bookWithId]);
    };

    const updateBook = (updatedBook) => {
        setBooks(prevBooks => 
            prevBooks.map(book => 
                book.id === updatedBook.id ? { 
                    ...updatedBook, 
                    price: Number(updatedBook.price),
                    pages: Number(updatedBook.pages) 
                } : book
            )
        );
    };

    const deleteBook = (bookId) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
    };

    // Fungsi untuk mendapatkan detail buku
    const getBookById = (bookId) => {
        return books.find(book => book.id === bookId);
    }
    
    // Fungsi untuk mendapatkan daftar buku berdasarkan kategori
    const getBooksByCategory = (categoryId) => {
        const targetCategory = categoryId.toLowerCase();
        
        // Kompatibilitas dengan 'aksi' jika kategori yang dimaksud adalah 'komik'
        if (targetCategory === 'aksi' || targetCategory === 'komik') {
             return books.filter(book => book.category === 'komik' || book.category === 'aksi');
        }
        return books.filter(book => book.category === targetCategory);
    }


    const contextValue = {
        books,
        addBook,
        updateBook,
        deleteBook,
        getBookById,
        getBooksByCategory,
    };

    return (
        <BookContext.Provider value={contextValue}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => {
    return useContext(BookContext);
};