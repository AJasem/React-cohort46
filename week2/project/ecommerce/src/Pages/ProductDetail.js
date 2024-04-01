import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <ProductItem product={product} />
      <div className="product-des">
        <button onClick={() => window.history.back()}>Back</button>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
