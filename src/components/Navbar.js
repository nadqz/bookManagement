import React, { useState } from 'react';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
// Mengganti FaUserCog dengan FaEdit yang lebih generik untuk "Kelola Data"
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from '../assets/logo.png'; // Asumsi logo masih di sini

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    {/* Logo dan Teks ke Beranda */}
                    <Link to='/' onClick={closeMenu} className='logo-link'>
                        <img src={Logo} alt='Logo PustakaKata' className='logo-img' />
                        <h2 className='logo-text'>PustakaKata</h2>
                    </Link>
                </div>
                
                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className='nav-item'>
                        {/* Halaman Utama: Promosi */}
                        <Link to='/' className='nav-link' onClick={closeMenu}>Beranda</Link>
                    </li>
                    <li className='nav-item'>
                        {/* Halaman Katalog: Kategori Buku */}
                        <Link to='/kategori' className='nav-link' onClick={closeMenu}>Kategori</Link>
                    </li>
                    <li className='nav-item admin-link'>
                        {/* Halaman Kelola Data: Tambah, Edit, Hapus (Akses Umum) */}
                        <Link to='/keloladata' className='nav-link' onClick={closeMenu}>Kelola Data</Link>
                    </li>
                </ul>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: 'var(--color-text-dark)' }} />) : (<FaBars size={20} style={{ color: 'var(--color-text-dark)' }} />)}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
