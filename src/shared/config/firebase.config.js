// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBesk3R8qSPiE2OnUTk5Bv8KhhUo0dA8hM",
  authDomain: "arack-dev.firebaseapp.com",
  projectId: "arack-dev",
  storageBucket: "arack-dev.appspot.com",
  messagingSenderId: "421025303274",
  appId: "1:421025303274:web:7619d382835f9e3951e593",
  measurementId: "G-4E8BLVWQRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
//const analytics = getAnalytics(app);

// Exportar Firestore
export { db };

