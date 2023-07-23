import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();

  const [isUserData, setUserData] = useState({
    name: "",
    emailId: "",
    mobileNumber: "",
    storeName: "",
    password: "",
  });

  const handleOnChange = (text, input) => {
    setUserData((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleNavigation = () => {
    console.log("Credentials ===> ", isUserData);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>Create account</h1>

        <TextField
          id="Name"
          label="Name"
          value={isUserData.name}
          onChange={(e) => {
            handleOnChange(e.target.value, "name");
          }}
          variant="outlined"
          InputProps={{
            className: styles.input,
          }}
          InputLabelProps={{}}
        />

        <TextField
          id="Email"
          label="Email"
          value={isUserData.emailId}
          onChange={(e) => {
            handleOnChange(e.target.value, "emailId");
          }}
          variant="outlined"
          InputProps={{
            className: styles.input,
          }}
          InputLabelProps={{}}
        />

        <TextField
          id="Mobile number"
          label="Mobile number"
          value={isUserData.mobileNumber}
          onChange={(e) => {
            handleOnChange(e.target.value, "mobileNumber");
          }}
          variant="outlined"
          InputProps={{
            className: styles.input,
          }}
          InputLabelProps={{}}
        />

        <TextField
          id="Store name"
          label="Store name"
          value={isUserData.storeName}
          onChange={(e) => {
            handleOnChange(e.target.value, "storeName");
          }}
          variant="outlined"
          InputProps={{
            className: styles.input,
          }}
          InputLabelProps={{}}
        />
        <TextField
          id="Create password"
          label="Create password"
          variant="outlined"
          type="password"
          value={isUserData.password}
          onChange={(e) => {
            handleOnChange(e.target.value, "password");
          }}
          InputProps={{
            className: styles.input,
          }}
        />
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleNavigation}
        >
          SIGNUP
        </Button>
      </div>
    </div>
  );
};

export default Signup;
