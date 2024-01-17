import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  HelmetProvider } from 'react-helmet-async';
import SearchProvider from './useContext/SearchContext';
import BasketProvider from './useContext/BaskettContext';
import WishlistProvider from './useContext/WishlistContex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BasketProvider>
        <WishlistProvider>
    <SearchProvider>
    <App />
    </SearchProvider>
    </WishlistProvider>
    </BasketProvider>
    </HelmetProvider>
  </React.StrictMode>
);

