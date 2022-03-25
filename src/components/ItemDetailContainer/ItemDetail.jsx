import React, { useState } from "react";

import ItemCount from "../ItemCount/ItemCount";
import styles from "./styles.module.css";

const ItemDetail = ({ item }) => {
  const { name, description, price, image, stock, skuId } = item;

  const [count, setCount] = useState(1);

  const addToCart = () => {
    const itemToAdd = {
      skuId,
      name,
      image,
      price,
      cantidad: count,
    };

    console.log(itemToAdd)
  };

  return (
    <div className={styles.detailContainer}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{`Precio: $${price}`}</p>
        <ItemCount
          stock={stock}
          count={count}
          setCount={setCount}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
