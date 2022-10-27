import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Body/Login"
import Register from "./components/Body/Register";
import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");

  return (
    
    <React.Fragment>
      <Header email={email} setEmail={setEmail}/>
      <Routes>
        <Route exact path="/" element={<Body />}></Route>
        <Route exact path="/login" element={<Login email={email} setEmail={setEmail}/>}></Route>
        <Route exact path="/registration" element={<Register />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  
  );
}

export default App;
