import React, { useContext, useEffect, useState } from "react";
import CalendarInput from "./CalendarInput";
import DropdownSelect from "./DropDownSelect";
import "./SeacrhBarStyle.scss";

const SearchBar = () => {
  const ciudades = ["Barranquilla", "Buenos aires", "Bogotá", "Medellín"];

  return (
    <div className="SearchBarContainer">
      <h1>
        <p>Busca ofertas en alquiler de apartamentos, casas y mucho más</p>
      </h1>
      <div className="SearchBarContainer__formContainer"></div>
      <form action="">
        <div className="SearchBarContainer__formContainer-inputBox">
          <DropdownSelect places={ciudades} />
        </div>
        <div className="SearchBarContainer__formContainer-inputBox">
          <CalendarInput />
        </div>
        <button className="SearchBarContainer__formContainer-button">
          Buscar
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
/*<form action="">
          <div className="SearchBarContainer__formContainer-inputBox">
            <DropdownSelect places={ciudades} />
          </div>
          <div className="SearchBarContainer__formContainer-inputBox">
            <CalendarInput />
          </div>

          <button className="SearchBarContainer__formContainer-button">
            Buscar
          </button>
        </form>*/
