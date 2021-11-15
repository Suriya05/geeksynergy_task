import React from "react";
import { Route, Routes} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";


export default () =>
  <Routes>
    <Route exact path="/register"  element={<Register/>} />
    <Route  exact path="/login"  element={<Login/>}  />
    <Route exact path="/home"  element={<Home/>}  />
  </Routes>
  ;


