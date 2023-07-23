import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";


const Login = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const handleNavigation = () => {
    console.log("Credentials ===> ", isEmail, isPassword);
    navigate("/Dashboard");
  };


  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        
        <TextField
          id="Email"
          label="Email"
          value={isEmail}
          onChange={(e) => {
            setIsEmail(e.target.value);
          }}
          variant="outlined"
          InputProps={{
            className: styles.input,
          }}
          InputLabelProps={{}}
        />
        <TextField
          id="Password"
          label="Password"
          variant="outlined"
          type="password"
          value={isPassword}
          onChange={(e) => {
            setIsPassword(e.target.value);
          }}
          InputProps={{
            className: styles.input,
          }}
        />
        <div
          className={styles.forgot_password}
          onClick={() => handleNavigation("ForgotPassword")}
        >
          Forgot Password ?
        </div>

        <Button
          variant="contained"
          className={styles.button}
          onClick={handleNavigation}
        >
          LOGIN
        </Button>

        <p className={styles.signupBlock}>
          Don't have an account?{" "}
          <span className={styles.signup} onClick={() => navigate("/Signup")}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
