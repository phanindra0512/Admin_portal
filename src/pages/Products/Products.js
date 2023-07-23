import React from "react";
import styles from "./Products.module.css";
import { Button } from "@mui/material";

const Products = () => {
  const headerBlock = () => {
    return (
      <div className={styles.header}>
        <h1 className={styles.title}>Total Products : 10</h1>
        <Button variant="contained">Add Product</Button>
      </div>
    );
  };

  return <div>{headerBlock()}</div>;
};

export default Products;
