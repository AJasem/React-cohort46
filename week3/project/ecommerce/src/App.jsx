import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import FavoritesPage from './Pages/FavoritesPage';
import { FavoritesProvider } from './components/FavoritesContext';
import ProductDetail from './Pages/ProductDetail';

const App = () => {
  return (
    <Router>
      <FavoritesProvider>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path='/product/:id' element={<ProductDetail/>} />
        </Routes>
      </FavoritesProvider>
    </Router>
  );
};

export default App;
// https://660bf9efc9fa711149a5b518--glistening-figolla-14a373.netlify.app/
