
import { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem.jsx";

const Categories = ({ selectedCategory, onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        if (response.ok) {
          setCategories(data);
          setLoading(false);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCategories();
  }, []);
  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      onCategorySelect("");
    } else {
      onCategorySelect(category);
    }
  };

  if (loading) return <div>Loading...</div>;
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