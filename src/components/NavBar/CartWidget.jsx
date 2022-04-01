import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { CartContext } from "../../context/CartContex";
import styles from "./styles.module.css";

const CartWidget = () => {
  const { cart, totalItems } = useContext(CartContext);

  return (
    <div>
      {cart.length > 0 && (
        <div className={styles.iconContainer}>
          <FaShoppingCart />
          <span className={styles.total}>{totalItems()}</span>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
