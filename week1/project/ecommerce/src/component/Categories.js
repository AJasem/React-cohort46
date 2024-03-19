import React from "react";
import CategoryItem from "./Category-Item.js";
import allCategories from "../fake-data/all-categories.js";

const Categories = ({ onCategorySelect, selectedCategory }) => {
  return (
    <nav>
      <ul className="categories">
        {allCategories.map((category) => (
          <CategoryItem
            key={category}
            category={category}
            onClick={() => onCategorySelect(category)}
            isActive={category === selectedCategory}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Categories;
