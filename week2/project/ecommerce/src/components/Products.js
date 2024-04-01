import React, { useState, useEffect } from "react";

import ProductItem from "./ProductItem";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    const filteredProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    if (selectedCategory) {
      filteredProducts();
    } else {
      fetchProducts();
    }
  }, [selectedCategory]);

  if (loading) return <div>Loading...</div>;
  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default Products;
