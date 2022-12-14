import React, { useState,useContext } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import  EmailContext  from "../../../context/Context";

/* Por completar: Descargar el repositorio y acomodar el issue */

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {email,setEmail} = useContext(EmailContext);

  // Credenciales utilizadas para validar
  const credentials = {
    email: "example@gmail.com",
    password: "123456",
  };

  //Evento
  const handleSubmit = (e) => {

    e.preventDefault();
    //Validación en caso de que algun input se encuentre vacío
    if (password !== "" && emailInput !== "") {
      //Validación del tamaño de la contraseña
      if (password.length >= 6) {
        if (
          emailInput === credentials.email &&
          password === credentials.password
        ) {
          localStorage.setItem("email", credentials.email);
          setEmail(emailInput);
          navigate("/");
        } else {
          document.querySelector(".invalid").innerHTML =
            "Credenciales inválidas. Vuelve a intentarlo.";
        }
      } else {
        document.querySelector(".invalid").innerHTML =
          "Contraseña demasiado corta. Ingrese al menos 6 caracteres.";
      }
    } else {
      document.querySelector(".invalid").innerHTML =
        "Por favor ingrese sus credenciales para acceder.";
    }
  };

  return (
    <section className="LoginContainer">
      <div className="LoginContainer__FormContainer">
        <p className="LoginContainer__FormContainer--title">Iniciar sesión</p>
        <form onSubmit={handleSubmit}>

        <Link to="/" className="LoginContainer__FormContainer--close">x</Link>
        
          <label className="formLabel" htmlFor="">
            Correo electrónico
          </label>
          <input
            className="formInput"
            id="emailInput"
            type="text"
            onChange={(e) => {
            setEmailInput(e.target.value);
            document.querySelector(".invalid").innerHTML = "";
            }

            }
          />
          <label className="formLabel" htmlFor="">
            Contraseña
          </label>
          <input
            className="formInput"
            id="passwordInput"
            type="password"
            onChange={(e) => 
            {setPassword(e.target.value)
              document.querySelector(".invalid").innerHTML = "";
            }
            }
          />
          <p className="invalid"></p>
          
          <Link to="/" className="button">
            <button type="submit" onClick={handleSubmit}>
              Ingresar
            </button>
          </Link>

          <p>
            ¿Aún no tienes cuenta? <Link to="/registration">Registrate</Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export default Login;
