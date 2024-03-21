import React from "react";
import products from "../fake-data/all-products.js";
import ProductItem from "./ProductItem.js";

const Products = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category.replace(/[^a-z0-9]/gi, "").toLowerCase() ===
          selectedCategory
            .split(": ")[1]
            .replace(/[^a-z0-9]/gi, "")
            .toLowerCase()
      )
    : products;

  return (
    <div className="products">
      {filteredProducts.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
