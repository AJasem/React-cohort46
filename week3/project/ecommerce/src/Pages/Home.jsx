
import Products from "./../components/Products.jsx";
import Categories from "./../components/Categories";
import "../App.css";
import { useState } from "react";
import Navbar from "./../components/Navbar";
function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="home">
    
        
        <Navbar/>
       
        <div>
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