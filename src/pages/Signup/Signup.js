import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>signup</h1>
      <button onClick={() => navigate("/Dashboard")}>click </button>
    </div>
  );
};

export default Signup;
