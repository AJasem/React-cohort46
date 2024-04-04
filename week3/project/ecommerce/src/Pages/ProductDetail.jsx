import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import Navbar from "../components/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      if (response.ok) {
        setProduct(data);
      }
    } catch (error) {
      console.log("error", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div>
         <Navbar/>
    <div>Loading...</div>
    </div>
    )
  }
  
  if (error) {
    return (
      <div>
      <Navbar/>
 <div>
    <h1>Something went wrong!</h1>
    
 </div>
 </div>
    )
  }

  return (
    <>
    <Navbar/>
    <div className="product-details">
     
      <ProductItem product={product} />
      <div className="product-des">
        <button onClick={() => window.history.back()}>Back</button>
        <p>{product.description}</p>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;