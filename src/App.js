import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components/Routes
import Home from './routes/Home';
import Category from './routes/Category';
import ManageData from './routes/ManageData'; 
import DetailBuku from './components/DetailBuku';
import ListBuku from './components/ListBuku';
import Navbar from './components/Navbar'; // Pastikan Navbar dan Footer di-import
import Footer from './components/Footer'; 

// Wrapper agar DetailBuku dan ListBuku memiliki Navbar/Footer
const DetailBukuWrapper = () => (
    <>
        <Navbar />
        <DetailBuku />
        <Footer />
    </>
);

const ListBukuWrapper = () => (
    <>
        <Navbar />
        <ListBuku />
        <Footer />
    </>
);


function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Utama */}
        <Route path='/' element={<Home />} />
        
        {/* Rute Kategori */}
        <Route path='/kategori' element={<Category />} />
        {/* Pastikan rute ListBuku menggunakan wrapper agar tampilan seragam */}
        <Route path='/kategori/:categoryId' element={<ListBukuWrapper />} /> 

        {/* Rute Detail Buku */}
        <Route path='/detail/:bookId' element={<DetailBukuWrapper />} />
        
        {/* Rute CRUD: Hanya satu rute utama Kelola Data */}
        <Route path='/keloladata' element={<ManageData />} />
        
      </Routes>
    </Router>
  );
}

export default App;