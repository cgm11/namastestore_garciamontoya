import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.PNG";
import styles from "./styles.module.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.tabContainer}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>

        <nav className={`${styles.tabs}`}>
          <Link className={styles.marginLeft} to="/category/2">Saludable</Link>
          <Link className={styles.marginLeft} to="/category/3">Sanduches</Link>
          <Link className={styles.marginLeft} to="/category/4">Hamburguesas</Link>
          <Link className={styles.marginLeft} to="/category/5">Pizzas</Link>
          <Link className={styles.marginLeft} to="/category/1">Postres</Link>
        </nav>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
