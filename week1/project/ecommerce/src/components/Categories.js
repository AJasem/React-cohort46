import React from "react";
import CategoryItem from "./CategoryItem.js";
import allCategories from "../fake-data/all-categories.js";

const Categories = ({ onCategorySelect, selectedCategory }) => {
  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      onCategorySelect("");
    } else {
      onCategorySelect(category);
    }
  };

  return (
    <nav>
      <ul className="categories">
        {allCategories.map((category) => (
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
