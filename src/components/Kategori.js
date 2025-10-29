// File: src/components/Kategori.js

import React from 'react';
import './KategoriStyle.css'; // Tetap gunakan CategoryStyle.css untuk konsistensi styling
import CategoryCard from './CategoryCard'; // Asumsi CategoryCard.js berada di folder yang sama

// Data dummy Kategori
const categoriesData = [
    { id: 'fiksi', title: 'Fiksi Fantasi', bgClass: 'bg-fantasi' },
    { id: 'romantis', title: 'Fiksi Romantis', bgClass: 'bg-romantis' },
    { id: 'aksi', title: 'Komik Aksi & Petualangan', bgClass: 'bg-aksi' },
    { id: 'sejarah', title: 'Fiksi Sejarah', bgClass: 'bg-sejarah' },
    { id: 'misteri', title: 'Fiksi Misteri & Detektif', bgClass: 'bg-misteri' },
    { id: 'sains', title: 'Sains & Teknologi', bgClass: 'bg-sains' },
    { id: 'agama', title: 'Agama & Spiritual', bgClass: 'bg-agama' },
    { id: 'bisnis', title: 'Bisnis & Ekonomi', bgClass: 'bg-bisnis' },
    { id: 'kesehatan', title: 'Kesehatan & Gaya Hidup', bgClass: 'bg-kesehatan' },
    { id: 'pendidikan', title: 'Pendidikan', bgClass: 'bg-pendidikan' },
];

const Kategori = () => {
    return (
        <div className='category-page'>
            {/* Jarak dari Fixed Navbar */}
            <div className='spacer'></div> 

            <div className='container'>
                <div className='category-header'>
                    <h1>Jelajahi Semua Kategori Buku</h1>
                    <p className='subtitle'>Temukan berbagai macam genre dan topik yang kami sediakan di PustakaKata.</p>
                </div>

                <div className='category-grid'>
                    {categoriesData.map((category) => (
                        <CategoryCard 
                            key={category.id}
                            title={category.title}
                            bgClass={category.bgClass}
                            // Link ke halaman daftar buku spesifik kategori tersebut
                            linkTo={`/kategori/${category.id}`} 
                        />
                    ))}
                </div>
            </div>
            
            <div className='spacer-bottom'></div>
        </div>
    );
}

export default Kategori;