
import Products from "./../components/Products.jsx";
import Categories from "./../components/Categories";
import "../App.css";
import { useState } from "react";
import Navbar from "./../components/Navbar";
function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="home">
      <div className="navbar">
      <Navbar />
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