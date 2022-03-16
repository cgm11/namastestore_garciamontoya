import React from "react";

import ItemCount from "../ItemCount/ItemCount";
import styles from "./styles.module.css";

const ItemDetail = ({ item, setDetail }) => {
  const { name, description, price, image } = item;

  const back = () => setDetail(false);

  return (
    <>
      {name ? (
        <>
        <p onClick={back}>{'<--'}</p>
        <div className={styles.detailContainer}>
          <img src={image} alt={name} />
          <div className={styles.info}>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{`Precio: $${price}`}</p>
            <ItemCount stock={5} initial={1} />
          </div>
        </div>
        </>
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
};

export default ItemDetail;
