import React from "react";

import ItemCount from "../ItemCount/ItemCount";
import styles from './styles.module.css'

const ItemListContainer = (props) => {
  const { greeting } = props;

  return (
    <div className={styles.itemListContainer}>
      <h2>{greeting}</h2>
      <ItemCount stock={5} initial={1} />
    </div>
  );
};

export default ItemListContainer;
