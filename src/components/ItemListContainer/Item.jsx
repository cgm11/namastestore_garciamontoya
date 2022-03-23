import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Item = ({ item }) => {
  const { name, price, image, skuId } = item;

  return (
    <div className={styles.itemContainer}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <p>{name}</p>
        <p>{`Precio: $${price}`}</p>
        <Link to={`/item/${skuId}`}>
          <button className={styles.button}>Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
