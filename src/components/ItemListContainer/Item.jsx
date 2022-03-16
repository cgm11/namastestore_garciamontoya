import React from "react";

import styles from "./styles.module.css";

const Item = ({ item, setDetail }) => {
  const { name, price, image } = item;

  const getDetail = () => setDetail(true);

  return (
      <div className={styles.itemContainer}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <p>{name}</p>
        <p>{`Precio: $${price}`}</p>
        <button className={styles.button} onClick={getDetail}>
            Ver detalle
          </button>
      </div>
    </div>
  );
};

export default Item;
