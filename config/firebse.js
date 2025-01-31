// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_njih1FGk3cDodN_MOqb_TJgaMY93TtA",
  authDomain: "reactnative-7b33e.firebaseapp.com",
  projectId: "reactnative-7b33e",
  storageBucket: "reactnative-7b33e.firebasestorage.app",
  messagingSenderId: "322792765283",
  appId: "1:322792765283:web:517c438a1298f649f24556",
  measurementId: "G-RPZ6LHW1M5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)
const analytics = getAnalytics(app);