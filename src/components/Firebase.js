// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// funcion para usar la base de datos
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv7mUBExOVV7nVQ-rcxZhAQfZor703KRg",
  authDomain: "primerproyecto-1bf95.firebaseapp.com",
  projectId: "primerproyecto-1bf95",
  storageBucket: "primerproyecto-1bf95.appspot.com",
  messagingSenderId: "102289354594",
  appId: "1:102289354594:web:494dd6a6ee7169459fc63b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// referencia de la base de datos
export const db=getFirestore(app);
