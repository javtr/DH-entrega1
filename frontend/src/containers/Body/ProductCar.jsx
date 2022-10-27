import React, { useContext, useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { RiStarSFill } from "react-icons/ri";
import "./ProductCardStyle.scss";

const ProductCar = (props) => {
  return (
    <div className="productCardMainContainer">
      <div className="productCardMainContainer__imageContainer">
        <img src={props.image} alt="" />
      </div>
      <div className="productCardMainContainer__contentContainer">
        <div className="productCardMainContainer__contentContainer__header">
          <div className="productCardMainContainer__contentContainer__header__startContainer">
            <span>
              {props.category}
              <RiStarSFill className="productCardMainContainer__contentContainer__header__startContainer--star" />
              <RiStarSFill className="productCardMainContainer__contentContainer__header__startContainer--star" />
              <RiStarSFill className="productCardMainContainer__contentContainer__header__startContainer--star" />
              <RiStarSFill className="productCardMainContainer__contentContainer__header__startContainer--star" />
            </span>
            <p>{props.title}</p>
          </div>
          <div className="productCardMainContainer__contentContainer__header__endContainer">
            <p className="productCardMainContainer__contentContainer__header__endContainer--numberContainer">
              <span>8</span>
            </p>
            <p className="productCardMainContainer__contentContainer__header__endContainer--calification">
              Muy bueno
            </p>
          </div>
        </div>
        <div className="productCardMainContainer__contentContainer__ubicationContainer">
          <p>
            <ImLocation />A 940 de {props.location} -{" "}
            <span>Mostrar en el mapa</span>
          </p>
        </div>
        <div className="productCardMainContainer__contentContainer__footer">
          <p>{props.description}</p>
          <button>Visitar</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCar;
