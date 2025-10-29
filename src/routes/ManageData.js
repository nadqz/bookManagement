import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import KelolaData from '../components/KelolaData'; // Import komponen KelolaData

const ManageData = () => {
  return (
    <>
      {/* Menampilkan Navbar (Header) */}
      <Navbar />
      
      {/* Menampilkan komponen utama pengelolaan data yang berisi daftar buku dan modal CRUD */}
      <KelolaData />
      
      {/* Menampilkan Footer */}
      <Footer />
    </>
  );
};

export default ManageData;