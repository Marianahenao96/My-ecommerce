
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCPHhMlOn-YhAx8vqF9ETeElCkt74t680M",
  authDomain: "ecommerce-5173.firebaseapp.com",
  projectId: "ecommerce-5173",
  storageBucket: "ecommerce-5173.firebasestorage.app",
  messagingSenderId: "1045679244081",
  appId: "1:1045679244081:web:eec162abe89a2f0a81a610"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore (); 

export default db;