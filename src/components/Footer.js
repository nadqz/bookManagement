import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './FooterStyle.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='col-grid'>
                    <div className='col menu'>
                        <h6>Akses Cepat</h6>
                        <ul>
                            <li><Link to='/' className='link'>Beranda</Link></li>
                            <li><Link to='/Category' className='link'>Kategori</Link></li>
                            <li><Link to='/Add' className='link'>Kelola Data</Link></li>
                        </ul>
                    </div>
                    <div className='col info'>
                        <h6>Informasi</h6>
                        <ul>
                            <li><Link to='/' className='link'>Tentang Kami</Link></li>
                            <li><Link to='/' className='link'>Kontak</Link></li>
                            <li><Link to='/' className='link'>Kebijakan Privasi</Link></li>
                        </ul>
                    </div>
                    <div className='col-subscribe'>
                        <h6>Langganan Newsletter</h6>
                        <p>Dapatkan informasi terbaru seputar manajemen katalog buku kami.</p>
                        <form className='subscribe-form'>
                            <input type='email' placeholder='Masukkan email Anda' />
                            <button type='submit'>Langganan</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className='content-bottom'>
                    <div className='rights'>
                        <p>&copy; {new Date().getFullYear()} OurCatalogue. All rights reserved.</p>
                    </div>
                    <div className='social'>
                        <FaFacebook size={20} className='icon' />
                        <FaInstagram size={20} className='icon' />
                        <FaTwitter size={20} className='icon' />
                        <FaGithub size={20} className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
