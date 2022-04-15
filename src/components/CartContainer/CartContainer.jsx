import React from "react";
import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";

import { CartContext } from "../../context/CartContex";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const CartContainer = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);
  return (
    <div>
      {cart.length > 0 ? (
        <div className={styles.cartContainer}>
          <h1>Tus compras</h1>
          {cart.map((item) => (
            <div className={styles.itemContainer} key={item.skuId}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio: ${item.cantidad * item.price}</p>
              <span
                className={styles.deleteIcon}
                onClick={() => removeItem(item.skuId)}
              >
                <MdDeleteOutline />
              </span>
            </div>
          ))}
          <div className={styles.totalContainer}>
            <h2>Total: ${total()}</h2>
            <div>
                <Link className={styles.button} to="/checkout">Terminar mi compra</Link>
              <div onClick={clear}>Vaciar Carrito</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCartContainer}>
          <h1>Tu carrito está vacío</h1>
            <Link className={`${styles.button} ${styles.width}`} to="/">Elegir productos</Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
