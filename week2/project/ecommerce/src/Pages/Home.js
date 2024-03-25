import React, { useState } from "react";
import Products from "../components/Products";
import Categories from "../components/Categories";
import "../App.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="home">
      <div className="navbar">
        <h1>Products</h1>
        <Categories
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default Home;
