// src/routes/Add.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tambah from '../components/Tambah'; // Konten: Panel Kelola Data (Form + Tabel Admin)

// Menerima semua fungsi CRUD
const Add = ({ daftarBuku, tambahBuku, updateBuku, hapusBuku }) => {
    return (
        <>
            <Navbar />
            <main>
                {/* Meneruskan semua props CRUD ke komponen Tambah */}
                <Tambah 
                    daftarBuku={daftarBuku} 
                    tambahBuku={tambahBuku}
                    updateBuku={updateBuku}
                    hapusBuku={hapusBuku}
                />
            </main>
            <Footer />
        </>
    );
};

export default Add;