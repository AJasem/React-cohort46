import React from "react";

const CategoryItem = (props) => {
  const categoryName = props.category;

  const classes = `category-item ${props.isActive ? "active" : ""}`;

  return (
    <li className={classes} onClick={props.onClick} key={props.id}>
      {categoryName}
    </li>
  );
};

export default CategoryItem;
