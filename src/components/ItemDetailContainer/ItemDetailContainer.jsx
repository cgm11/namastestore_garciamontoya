import React, { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({setDetail}) => {
  const [item, setItem] = useState({});

  const product = {
    skuId: 0,
    name: "Donas",
    price: 3000,
    description:
      "Deliciosas donas de diferentes sabores tales como chocolate, fresa, naranja y muchos más",
    image:
      "https://images.unsplash.com/photo-1644845795868-12e95c3268a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  };

  const getItem = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(product);
      }, 2000);
    } else {
      reject("Se genero un error obteniendo el producto");
    }
  });

  useEffect(() => {
    getItem.then((response) => {
      setItem(response);
    });
  }, []);

  return (
    <div>
      <ItemDetail item={item} setDetail={setDetail} />
    </div>
  );
};

export default ItemDetailContainer;
