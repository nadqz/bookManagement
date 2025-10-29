// File: src/index.js (Asumsi ini adalah file entry point Anda)

import React from 'react';
import ReactDOM from 'react-dom/client';
// Import App atau komponen utama Anda yang berisi Router
import App from './App'; 
// Import BookProvider yang baru
import { BookProvider } from './context/BookContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Bungkus seluruh aplikasi dengan BookProvider */}
    <BookProvider> 
      <App />
    </BookProvider>
  </React.StrictMode>
);