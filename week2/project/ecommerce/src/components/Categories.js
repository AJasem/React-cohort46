import React from "react";
import { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem.js";

const Categories = ({ selectedCategory, onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();

    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
    return () => {};
  }, []);
  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      onCategorySelect("");
    } else {
      onCategorySelect(category);
    }
  };

  if (!categories) return <div>Loading...</div>;
  return (
    <nav>
      <ul className="categories">
        {categories.map((category) => (
          <CategoryItem
            key={category}
            category={category}
            isActive={category === selectedCategory}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
