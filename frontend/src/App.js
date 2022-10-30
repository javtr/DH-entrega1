import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Login from "./components/Body/Login/Login";
import Register from "./components/Body/Register/Register";
import { useState } from "react";
import  EmailContext  from "./context/Context";

function App() {
  
  const [email, setEmail] = useState("");
  const value = useMemo(() => ({ email, setEmail }), [email]);

  return (
    <EmailContext.Provider value={value}>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Body />}></Route>
        <Route
          exact
          path="/login"
          element={<Login/>}
        ></Route>
        <Route exact path="/registration" element={<Register />}></Route>
      </Routes>
      <Footer />
    </EmailContext.Provider>
  );
}

export default App;
