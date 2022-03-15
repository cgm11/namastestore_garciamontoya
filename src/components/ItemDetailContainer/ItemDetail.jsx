import React from "react";

import styles from "./styles.module.css";

const ItemDetail = ({ item }) => {
  const { name, description, price, image } = item;

  return (
    <>
      {name ? (
        <div className={styles.detailContainer}>
          <img src={image} alt={name} />
          <div className={styles.info}>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{`Precio: $${price}`}</p>
          </div>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
};

export default ItemDetail;
