import React from "react";

const CategoryItem = (props) => {
  const categoryName = props.category;

  const classes = `category-item ${props.isActive ? "active" : ""}`;

  return (
    <li className={classes} onClick={props.onClick}>
      {categoryName}
    </li>
  );
};

export default CategoryItem;