import React, { useContext, useEffect, useState } from "react";
import CategoryCard from "../../../containers/Body/CategoryCard";
import "./CategoryListStyle.scss";
import categories from "../../../data/categories";
const CategoryList = () => {
  return (
    <section className="CategoriesContainer">
      <h2>
        <p>Buscar por tipo de alojamiento</p>
      </h2>
      <div className="CategoriesContainer_listContainer">
        {categories.map((cat) => (
          <CategoryCard name={cat.name} amount={cat.amount} image={cat.img} />
        ))}
      </div>
    </section>
  );
};
export default CategoryList;
