import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.phani}>
      <h1>Login</h1>
      <button onClick={() => navigate("/Signup")}>click </button>
    </div>
  );
};

export default Login;
