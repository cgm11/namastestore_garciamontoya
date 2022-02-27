import React from "react";

import styles from './styles.module.css'

export default function Tabs() {

  return (
    <ul className={`nav justify-content-center ${styles.tabContainer}`}>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Saludable
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Sanduches
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Hamburguesas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Pizzas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Postres
        </a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li> */}
    </ul>
  );
}
