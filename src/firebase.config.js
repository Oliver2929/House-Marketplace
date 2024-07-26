import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMmR2LYJcXzticzwZsHNDxN9M47QvLmk0",
  authDomain: "house-marketplace-app-4faea.firebaseapp.com",
  projectId: "house-marketplace-app-4faea",
  storageBucket: "house-marketplace-app-4faea.appspot.com",
  messagingSenderId: "336381540207",
  appId: "1:336381540207:web:d6fbbf223de0248bccda9a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
