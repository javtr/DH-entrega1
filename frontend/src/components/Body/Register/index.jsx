import React, { useState }  from "react";
import "./Register.scss";
import { Link,useNavigate } from "react-router-dom";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigate = useNavigate();

  const clearError = () => {
    document.querySelector(".invalid").innerHTML = "";
  };

  const errorMessage = (message) => {
    document.querySelector(".invalid").innerHTML = message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre === "" ||
      apellido === "" ||
      email === "" ||
      password === "" ||
      passwordRepeat === ""
    ) {
      errorMessage("Por favor complete todos los campos.");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errorMessage("Por favor ingrese un email válido.");
    } else if (password.length < 6) {
      errorMessage(
        "La contraseña es demasiado corta. Ingrese al menos 6 caracteres."
      );
    } else if (password !== passwordRepeat) {
      errorMessage("Las contraseñas no coinciden. Intente nuevamente.");
    } else {
      document.querySelector(".exito").classList.remove("hidden");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };










  return (
    <section className="RegisterContainer">
      <div className="RegisterContainer__FormContainer">

        <Link to="/" className="RegisterContainer__FormContainer--close">
          x
        </Link>

        <p className="RegisterContainer__FormContainer--title">Crear Cuenta</p>
        <form>
          <div className="RegisterContainer__FormContainer--fullName">
            <label className="formLabel" htmlFor="">
              Nombre
            </label>

            <input

              className="formInput"
              id="nombreInput"
              type="text"
              onChange={(e) => {
                setNombre(e.target.value);
                clearError();
              }}
            />

            <label className="formLabel" htmlFor="">
              Apellido
            </label>

            <input
              className="formInput apellido"
              id="apellidoInput"
              type="text"
              onChange={(e) => {
                setApellido(e.target.value);
                clearError();
              }}
            />


          </div>
          <label className="formLabel" htmlFor="">
            Correo electrónico
          </label>


          <input
            className="formInput"
            id="emailInput"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
              clearError();
            }}
          />


          <label className="formLabel" htmlFor="">
            Contraseña
          </label>


          <input
            className="formInput"
            id="passwordInput"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
              clearError();
            }}
          />


          <label className="formLabel" htmlFor="">
            Confirmar Contraseña
          </label>

          <input
            className="formInput"
            id="confirmPasswordInput"
            type="password"
            onChange={(e) => {
              setPasswordRepeat(e.target.value);
              clearError();
            }}
          />


        <p className="invalid"></p>
          <div className="exito hidden">
            Cuenta creada con éxito!
            <br /> <span className="small">Serás redirigido al login</span>
          </div>
          <Link className="button">
            <button type="submit" onClick={handleSubmit}>
              Crear Cuenta
            </button>
          </Link>
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>




        </form>
      </div>
    </section>
  );
};

export default Register;
