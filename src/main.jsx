// src/main.jsx
import React from 'react';
import { SearchProvider } from './context/SearchContext';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './index.css';

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
      </BrowserRouter>
    </Provider>
  
);
