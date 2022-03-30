import React, { useContext, useState } from "react";

import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContex";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { name, description, price, image, stock, skuId } = item;

  const [count, setCount] = useState(1);

  const { addItem, isInCart } = useContext(CartContext);

  const addToCart = () => {
    const itemToAdd = {
      skuId,
      name,
      image,
      price,
      cantidad: count,
    };

    addItem(itemToAdd);
    console.log(isInCart(skuId));
  };

  return (
    <div className={styles.detailContainer}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{`Precio: $${price}`}</p>
        {isInCart(skuId) ? (
          <div className={styles.buttonContainer}>
            <Link className={styles.buttonSecondary} to="/">Seguir comprando</Link>
            <div className={styles.button}>
            <Link to="/Cart">Ir al carrito</Link>
            </div>            
          </div>
        ) : (
          <ItemCount
            stock={stock}
            count={count}
            setCount={setCount}
            addToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
