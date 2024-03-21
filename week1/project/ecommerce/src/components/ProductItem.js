import React from "react";

const ProductItem = (props) => {
  return (
    <div className="product-item">
      <img
        className="product-img"
        src={props.product.image}
        alt={props.product.name}
      />
      <h5 className="product-h5">{props.product.title}</h5>
      <p>${props.product.price}</p>
      <p>{props.product.category}</p>
    </div>
  );
};
export default ProductItem;
