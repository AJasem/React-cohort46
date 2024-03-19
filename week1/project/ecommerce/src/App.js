// here is the link to the deployed website: https://cosmic-cascaron-37fa17.netlify.app/
import React, { useState } from "react";
import "./App.css";

import Products from "./component/Products";
import Categories from "./component/Categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      <div className="navbar">
        <h1>Products</h1>
        <Categories
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;

// here is the link to the deployed website: https://cosmic-cascaron-37fa17.netlify.app/
