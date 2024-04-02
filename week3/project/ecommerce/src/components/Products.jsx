import React from 'react';
import ProductItem from './ProductItem';
import useFetch from '../hooks/useFetch';

const Products = ({ selectedCategory }) => {
  const { data: products, loading } = useFetch(selectedCategory ? `https://fakestoreapi.com/products/category/${selectedCategory}` : 'https://fakestoreapi.com/products');

  if (loading) return <div>Loading...</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <div className="products">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
