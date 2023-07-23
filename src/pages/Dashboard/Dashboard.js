import React, { useEffect } from "react";
import styles from "./Dashboard.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { ourServices } from "../../constants/services";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect calling...");
    fetch("https://graphqlzero.almansi.me/api", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `{
      user(id: 3) {
        id
        name
      }
    }`,
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log("response ===>", response));
  }, []);

  const handleNavigation = (service) => {
    if (service === "Products") {
      navigate("/Products");
    } else if (service === "View Product") {
      navigate("/Products");
    } else if (service === "View Orders") {
      navigate("/Products");
    }
  };
  const headerBlock = () => {
    return (
      <div className={styles.header}>
        <h1 className={styles.heading}>Roja Sweets</h1>

        <div className={styles.headerRightIcons}>
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon style={{ color: "white", fontSize: 29 }} />
          </Badge>
          {/* <NotificationsIcon style={{ color: "white", fontSize: 29 }} /> */}
          <img
            src={require("../../assets/myPic.jpg")}
            alt="profile-pic"
            className={styles.profilePic}
          />
        </div>
      </div>
    );
  };

  const services = () => {
    return (
      <div className={styles.serviceContainer}>
        {ourServices?.map((service) => {
          return (
            <div
              className={styles.serviceCard}
              onClick={() => handleNavigation(service.serviceName)}
            >
              <img
                src={service.image}
                style={{ width: 65, height: 65, paddingTop: 20 }}
                alt="create product"
              />
              <p className={styles.serviceTitle}>{service.serviceName}</p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className={styles.container}>
      {headerBlock()}
      <p
        className={styles.heading}
        style={{ color: "#f4717f", fontWeight: 600, fontSize: 25 }}
      >
        Our services
      </p>
      {services()}
    </div>
  );
};

export default Dashboard;
