// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9X5nmfDo8aebz7rxgLdz15lomAZqHFko",
  authDomain: "arack-rs.firebaseapp.com",
  projectId: "arack-rs",
  storageBucket: "arack-rs.appspot.com",
  messagingSenderId: "353060260533",
  appId: "1:353060260533:web:cd73427c91fd9973848cfc",
  measurementId: "G-SQLJT4WREP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
//const analytics = getAnalytics(app);

// Exportar Firestore
export { db };

