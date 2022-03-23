import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import { stock } from "../../data/stock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getItem = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(stock.find((item) => item.skuId === id));
      }, 2000);
    } else {
      reject("Se genero un error obteniendo el producto");
    }
  });

  useEffect(() => {
    setLoading(true);
    getItem
      .then((response) => {
        setItem(response);
      })
      .catch(() => console.log("ocurrio un error cargando la información"))
      .finally(() => setLoading(false));
  }, []);

  return <div>{loading ? <p>Cargando...</p> : <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
