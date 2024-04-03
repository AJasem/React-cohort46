import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from './FavoritesContext';

const ProductItem = ({ product }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="product-item" key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img className="product-img" src={product.image} alt={product.title} />
        <h5 className="product-h5">{product.title}</h5>
        <p>${product.price}</p>
        <p>{product.category}</p>
      </Link>
      <button onClick={() => toggleFavorite(product.id)}>
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default ProductItem;
