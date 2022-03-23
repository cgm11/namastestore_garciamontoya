import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import styles from "./styles.module.css";
import { stock } from "../../data/stock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const getItems = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(stock);
      }, 2000);
    } else {
      reject("Se genero un error obteniendo el producto");
    }
  });

  useEffect(() => {
    setLoading(true);

    getItems
      .then((response) => {
        if (!categoryId) {
          setItems(response);
        } else {
          setItems(response.filter((item) => item.category === categoryId));
        }
      })
      .catch(() => console.log("ocurrio un error cargando la información"))
      .finally(() => setLoading(false));

  }, [categoryId]);

  return (
    <div className={styles.itemListContainer}>
      {loading ? <p>Cargando...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
