import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

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