// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZUG3Im8xY0KXvAFtkedaX0xBuwm18NGw",
  authDomain: "microservices-5748f.firebaseapp.com",
  projectId: "microservices-5748f",
  storageBucket: "microservices-5748f.appspot.com",
  messagingSenderId: "613825179530",
  appId: "1:613825179530:web:b79befb5beee742e73a273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore database
export { db };
