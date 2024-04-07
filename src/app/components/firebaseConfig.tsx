import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApQOt3QHiGQRizLygwjtWtoQeKxN1es3A",
  authDomain: "iscf2-997b3.firebaseapp.com",
  databaseURL: "https://iscf2-997b3-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "iscf2-997b3",
  storageBucket: "iscf2-997b3.appspot.com",
  messagingSenderId: "953730842420",
  appId: "1:953730842420:web:b1edb444b9703cbfd56f61",
  measurementId: "G-7ZEE6F2CSL"
  
  
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db}