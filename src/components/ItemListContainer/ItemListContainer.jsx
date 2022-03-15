import React, { useState } from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import styles from "./styles.module.css";

const ItemListContainer = (props) => {
  const { greeting } = props;

  const [detail, setDetail] = useState(false);

  const getDetail = () => setDetail(true)

  return (
    <>
      {!detail ? (
        <div className={styles.itemListContainer}>
          <h2>{greeting}</h2>
          <ItemCount stock={5} initial={1} />
          <button className={styles.button} onClick={getDetail}>Ver detalle</button>
        </div>
      ) : (
        <ItemDetailContainer />
      )}
    </>
  );
};

export default ItemListContainer;
