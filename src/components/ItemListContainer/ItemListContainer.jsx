import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import ItemList from "./ItemList";
import styles from "./styles.module.css";
import { db } from "../../utils/firebase";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);
      const dataItems = response.docs.map((doc) => {
        return {
          skuId: doc.id,
          ...doc.data(),
        };
      });
      if (!categoryId) {
        setItems(dataItems);
      } else {
        setItems(dataItems.filter((item) => item.category === categoryId));
      }
      setLoading(false);
    };
    getData();
  }, [categoryId]);

  return (
    <div className={styles.itemListContainer}>
      {loading ? <p>Cargando...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
