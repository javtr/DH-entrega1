import React, { useState, useEffect } from "react";
import "./Header.scss";
import logoSm from "./../../img/logoSmYellow.jpg";
import logoLg from "./../../img/logoLgYellow.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header(props) {
  const [flag, setFlag] = useState(false);
  const [sideBar, setSideBar] = useState("sideBarInit");

  const navigate = useNavigate();

  const location = useLocation();
  const url = location.pathname;

  console.log(location.pathname);

  function linkBurguer(link) {
    setSideBar("sideBarOff");
    navigate(link);
  }

  function turnSideBar() {
    if (sideBar === "sideBarInit") {
      setSideBar("sideBarOn");
    } else if (sideBar === "sideBarOn") {
      setSideBar("sideBarOff");
    } else if (sideBar === "sideBarOff") {
      setSideBar("sideBarOn");
    }
  }

  function turnOffSideBar() {
    setSideBar("sideBarOff");
  }

  useEffect(() => {
    if (!flag) {
      if (
        localStorage.getItem("email") !== null ||
        (props.email !== null) & (props.email !== "")
      ) {
        document.querySelector(".header__buttons").classList.add("hidden");
        document.querySelector(".header__user").classList.remove("hidden");
        setFlag(true);
      } else {
        document.querySelector(".header__buttons").classList.remove("hidden");
        document.querySelector(".header__user").classList.add("hidden");
        props.setEmail("");
        setFlag(false);
      }
    }
  }, [flag, props]);

  const closeSession = () => {
    localStorage.clear();
    props.setEmail("");
    setFlag(false);
  };

  return (
    <div className="header">
      <div>
        <Link to="/">
          <img className="header__imgSmall" src={logoSm} alt="DB" />
          <img className="header__imgLarge" src={logoLg} alt="DB" />
        </Link>
      </div>
      <div className="header__buttons">
        <Link
          className= {url === "/registration" ? "button-hide":""}
          to="./registration"
        >
          Crear cuenta
        </Link>
        <Link
          className= {url === "/login" ? "button-hide":""}
          to="./login"
        >
          Iniciar sesión
        </Link>
      </div>
      <div className="header__user hidden">
        <div className="header__user--circle">G3</div>
        <div className="header__user--text">
          <span className="header__user--greeting">Hola,</span>
          <span className="header__user--name">Grupo 3 Best</span>
        </div>
        <div className="header__user--close">
          <Link onClick={closeSession}>x</Link>
        </div>
      </div>
      <IconContext.Provider value={{ className: "header__hamburguer" }}>
        <GiHamburgerMenu onClick={turnSideBar} />
      </IconContext.Provider>

      <div className={sideBar}>
      
        <div className="st1" onClick={turnOffSideBar}>
          <div className="st2"></div>
          <div className="st3"></div>
        </div>

        <div className="sideBarBox">
        </div>
        <div className="sideBarLinks">
          <p>Menu</p>
          <div onClick={() => linkBurguer("/")}>Home</div>
          <div onClick={() => linkBurguer("/login")}>Iniciar sesión</div>
          <div onClick={() => linkBurguer("/registration")}>Registrarse</div>
        </div>
      </div>
    </div>
  );
}
