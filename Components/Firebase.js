// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHb0rCtLS1DYDQkSwPnIXXhyKCG2aRJRY",
  authDomain: "parent-updater.firebaseapp.com",
  projectId: "parent-updater",
  storageBucket: "parent-updater.appspot.com",
  messagingSenderId: "331014512397",
  appId: "1:331014512397:web:d1db0058682132bd219a44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

