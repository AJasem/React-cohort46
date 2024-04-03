import React from 'react';
import { useFavorites } from '../components/FavoritesContext';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';
const FavoritesPage = () => {
  const { favorites } = useFavorites();

 
if(favorites.length == 0 ) return (
  <>

 
  <Navbar/>
 
  <div className='favorites'>
  You have not picked any favorites yet.
  </div>
</>
);
 

  return (
    <div>
    
       
        <Navbar/>
        
    <div className="favorites">
      <div className="favorites-list">
        {favorites.map(productId => (
         
          <ProductItem key={productId} product={{ id: productId }} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FavoritesPage;