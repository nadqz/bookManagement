import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Halaman404Style.css';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const Halaman404 = () => {
    const navigate = useNavigate();

    return (
        <div className="notfound-container">
            <div className="error-box">
                <FaExclamationTriangle className="error-icon" />
                <h1>404</h1>
                <h2>Halaman Tidak Ditemukan</h2>
                <p>
                    Maaf, halaman yang Anda cari tidak ada di **OurCatalogue**. 
                    Silakan periksa kembali alamat URL yang Anda masukkan.
                </p>
                <button onClick={() => navigate('/')} className="home-btn">
                    <FaHome /> Kembali ke Beranda
                </button>
            </div>
        </div>
    );
};

export default Halaman404;
