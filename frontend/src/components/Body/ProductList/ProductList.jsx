import React, { useContext, useEffect, useState } from "react";
import "./ProductListStyle.scss";
import products from "../../../data/products";
import ProductCar from "../../../containers/Body/ProductCar";

const ProductList = (props) => {
  return (
    <div className="productListMainContainer">
      <h1> Recomendaciones</h1>
      <div className="productListMainContainer__productList">
        {products.map((p) => (
          <ProductCar
            title={p.title}
            category={p.category}
            image={p.img}
            location={p.location}
            description={p.description}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
