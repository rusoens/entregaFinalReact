import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgwHfQCNf10UrtZ3FZfeoyKfguW4cpWeA",
  authDomain: "toy-toy-shop.firebaseapp.com",
  projectId: "toy-toy-shop",
  storageBucket: "toy-toy-shop.appspot.com",
  messagingSenderId: "822652423121",
  appId: "1:822652423121:web:81a6f884f17db246a72ef0" 
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);