import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../pages/Login/Login.js";
import Signup from "../pages/Signup/Signup.js";
import Dashboard from "../pages/Dashboard/Dashboard.js";

const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
