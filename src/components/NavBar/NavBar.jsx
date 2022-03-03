import React from "react";

import logo from "../../assets/logo.PNG";
import styles from "./styles.module.css";
import Tabs from "./Tabs";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.tabContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Tabs />
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
