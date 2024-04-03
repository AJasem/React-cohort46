import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-item" key={product.id}>
        <img className="product-img" src={product.image} alt={product.name} />
        <h5 className="product-h5">{product.title}</h5>
        <p>${product.price}</p>
        <p>{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
