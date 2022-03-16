import React, { useState } from "react";

import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Item from "./Item";
import styles from "./styles.module.css";

const ItemList = ({ items }) => {

  const [detail, setDetail] = useState(false);

  
  

  return (
    <>      
      {!detail ? (
        <div className={styles.itemsContainer}>
        {items.map((item) => (
          <Item item={item} key={item.skuId} setDetail={setDetail} />
        ))}
      </div>
      ) : (
        <ItemDetailContainer setDetail={setDetail}/>
      )}
    </>
  );
};

export default ItemList;
