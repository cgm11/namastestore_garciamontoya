import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

import ItemDetail from "./ItemDetail";
import { db } from "../../utils/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const query = doc(db, "items", id);
      const response = await getDoc(query);
      const dataItem = { skuId: response.id, ...response.data() };
      setItem(dataItem);
      setLoading(false)
    };
    getData();
  }, []);

  return <div>{loading ? <p>Cargando...</p> : <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
