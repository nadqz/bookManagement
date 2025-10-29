// File: src/components/CategoryCard.js

import React from 'react';
import { Link } from 'react-router-dom';
// Styling akan diimpor melalui CategoryStyle.css

const CategoryCard = ({ title, bgClass, linkTo }) => {
    return (
        // Gunakan Link agar card bisa di klik dan mengarah ke daftar buku
        <Link to={linkTo} className={`category-card-item ${bgClass}`}>
            <div className='card-content'>
                <p>{title}</p>
            </div>
        </Link>
    );
}

export default CategoryCard;