// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwVyJmj_mfxM-ilUj_ed-9KYLtC4VM4_A",
  authDomain: "website-arack.firebaseapp.com",
  projectId: "website-arack",
  storageBucket: "website-arack.appspot.com",
  messagingSenderId: "1035065042333",
  appId: "1:1035065042333:web:1688cb0ab93b611191bb74",
  measurementId: "G-JKBEJ8C30N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);
//const analytics = getAnalytics(app);

// Exportar Firestore
export { db };

