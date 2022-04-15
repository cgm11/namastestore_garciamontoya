import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Item = ({ item }) => {
  const { name, price, image, skuId } = item;

  return (
    <Link to={`/item/${skuId}`}>
      <div className={styles.itemContainer}>
        <img src={image} alt={name} />
        <div className={styles.info}>
          <p>{name}</p>
          <p>{`Precio: $${price}`}</p>

          <button className={styles.button}>Ver detalle</button>
        </div>
      </div>
    </Link>
  );
};

export default Item;
