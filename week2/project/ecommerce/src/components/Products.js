import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const Products = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category === selectedCategory.toLowerCase()
      )
    : products;

  if (!filteredProducts) return <div>Loading...</div>;
  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductItem product={product} />
        </Link>
      ))}
    </div>
  );
};

export default Products;
