import React, { useState, useEffect } from 'react';
import { useFavorites } from '../components/FavoritesContext';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const products = await Promise.all(
          favorites.map(async (productId) => {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const product = await response.json();
            return product;
          })
        );
        setFavoriteProducts(products);
      } catch (error) {
        console.log("error", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchFavoriteProducts();
  }, [favorites]);

  if (loading) {
    return (
      <div>
        <Navbar/>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar/>
        <div>
          <h1>Something went wrong!</h1>
        </div>
      </div>
    );
  }

  if (favoriteProducts.length === 0) {
    return (
      <>
        <Navbar/>
        <div className='favorites'>
          You have not picked any favorites yet.
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar/>
      <div className="favorites">
        <div className="favorites-list">
          {favoriteProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;