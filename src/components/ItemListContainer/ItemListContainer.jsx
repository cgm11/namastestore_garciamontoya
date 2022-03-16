import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";
import styles from "./styles.module.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const products = [
    {
      skuId: 0,
      name: "Donas",
      price: 3000,
      description:
        "Deliciosas donas de diferentes sabores tales como chocolate, fresa, naranja y muchos más",
      image:
        "https://images.unsplash.com/photo-1644845795868-12e95c3268a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    },
    {
      skuId: 1,
      name: "Macarrones franceses",
      price: 1000,
      description:
        "Los pequeños, dulces y coloridos macarrones franceses",
      image:
        "https://images.unsplash.com/photo-1645542563306-ef00dda7f4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    },
    {
      skuId: 2,
      name: "Brownie con helado",
      price: 12000,
      description:
        "Delicioso brownie caliente con una bola de helado de vainilla bañado en arequipe",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    },
    {
      skuId: 3,
      name: "Pie con crema",
      price: 12000,
      description:
        "pastel relleno con una rica crema pastelera",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const getItems = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("Se genero un error obteniendo el producto");
    }
  });

  useEffect(() => {
    getItems.then((response) => {
      setItems(response);
    });
  }, []);

  return (
    <div className={styles.itemListContainer}>
      <ItemList items={items}/>
    </div>
  );
};

export default ItemListContainer;
