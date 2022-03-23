import React from "react";

import ItemCount from "../ItemCount/ItemCount";
import styles from "./styles.module.css";

const ItemDetail = ({ item }) => {
  const { name, description, price, image } = item;

  return (
    <div className={styles.detailContainer}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{`Precio: $${price}`}</p>
        <ItemCount stock={5} initial={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
