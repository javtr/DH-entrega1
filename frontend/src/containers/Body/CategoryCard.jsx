import React, { useContext, useEffect, useState } from "react";
import "./CategoryCardStyle.scss";

const CategoryCard = (props) => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    window.screen.width > 1440 ? setFlag(true) : setFlag(false);
  }, []);

  return (
    <section className="cardContainer">
      <div className="cardContainer_imageContainer">
        <img src={props.image}></img>
      </div>
      <div className="cardContainer_contentContainer">
        <h3>{props.name}</h3>
        <span>
          {props.amount} {flag ? "Kilómetros de distancia" : "Km"}
        </span>
      </div>
    </section>
  );
};
export default CategoryCard;
