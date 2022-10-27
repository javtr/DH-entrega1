import React, { useState } from "react";
import "./DropDownSelectStyle.scss";
import DropdownOption from "../../../containers/SearchBar/DropdownOptions";
import { ImLocation } from "react-icons/im";

const DropdownSelect = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div class="SelectContainer" onClick={() => setToggle(!toggle)}>
        <div className="SelectContainer__iconContainer">
          <ImLocation className="SelectContainer__iconContainer-icon" />
        </div>
        <p> ¿A dónde vamos? </p>
      </div>
      <div
        class={
          toggle ? "optionsContainer animation" : "optionsContainer enlace"
        }
      >
        {props.places.map((city) => (
          <DropdownOption City={city} />
        ))}
      </div>
    </div>
  );
};
export default DropdownSelect;
