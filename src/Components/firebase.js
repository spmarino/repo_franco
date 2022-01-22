import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCww8zNOr4BZASPD0rKZTwAR_n6J_p1ztY",
  authDomain: "proyecto-growshop.firebaseapp.com",
  projectId: "proyecto-growshop",
  storageBucket: "proyecto-growshop.appspot.com",
  messagingSenderId: "272174713164",
  appId: "1:272174713164:web:b15712e84e418d83b267e9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)