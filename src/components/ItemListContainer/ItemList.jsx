import React from "react";

import Item from "./Item";
import styles from "./styles.module.css";

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <Item item={item} key={item.skuId} />
      ))}
    </div>
  );
};

export default ItemList;
