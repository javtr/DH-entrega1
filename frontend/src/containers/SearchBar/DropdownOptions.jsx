import React, { useContext, useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import "./DropdownOptionStyle.scss";

const DropdownOption = (props) => {
  return (
    <div className="optionMainContainer">
      <div className="optionMainContainer__box">
        <i>
          <ImLocation className="optionMainContainer__box-icon" />
        </i>
        <span>
          <p className="optionMainContainer__box-city">{props.City}</p>
          <p className="optionMainContainer__box-country">Pais</p>
        </span>
      </div>
      <hr />
    </div>
  );
};
export default DropdownOption;
