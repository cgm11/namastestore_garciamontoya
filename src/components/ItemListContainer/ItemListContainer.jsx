import React from "react";

import styles from './styles.module.css'

const ItemListContainer = (props) => {
  const { greeting } = props;

  return (
    <div className={styles.itemListContainer}>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
