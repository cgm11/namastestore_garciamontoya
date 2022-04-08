import { initializeApp } from "firebase/app";
import { getFirestore, collection, writeBatch, getDocs, addDoc, Timestamp, query, where, documentId } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBODfRDtv96vLl-diMpsHrMZKSWKFz36Fo",
  authDomain: "namastestore-a4e3b.firebaseapp.com",
  projectId: "namastestore-a4e3b",
  storageBucket: "namastestore-a4e3b.appspot.com",
  messagingSenderId: "73265408673",
  appId: "1:73265408673:web:a748a949e47f0a83709ee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const generarOrden = async (values, cart, totalCart, setOrderId, vaciarCart) => {
  const orden = {
      comprador: values,
      items: cart,
      total: totalCart(),
      fyh: Timestamp.fromDate(new Date())
  } 

  const batch = writeBatch(db)
  const ordersRef = collection(db, "orders")
  const productosRef = collection(db, "items")
  
  const q = query(productosRef, where(documentId(), 'in', cart.map((el) => el.skuId)))
  const productos = await getDocs(q)
  const outOfStock = []
  
  productos.docs.forEach((doc) => {
      const item = cart.find((el) => el.skuId === doc.id)

      if (doc.data().stock >= item.cantidad) {
          batch.update(doc.ref, {
              stock: doc.data().stock - item.cantidad
          })
      } else {
          outOfStock.push(item)
      }
  })

  if (outOfStock.length === 0) {
      addDoc(ordersRef, orden)
          .then((doc) => {
              batch.commit()
              setOrderId(doc.id)
              vaciarCart()
          })
  } else {
      alert("Hay items sin stock")
  }
}