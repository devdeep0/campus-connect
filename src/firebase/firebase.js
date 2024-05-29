// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOU23jyYemRDhYBDBRXPHkhiFzH-znWME",
  authDomain: "campus-connect-4d541.firebaseapp.com",
  projectId: "campus-connect-4d541",
  storageBucket: "campus-connect-4d541.appspot.com",
  messagingSenderId: "1020279066979",
  appId: "1:1020279066979:web:b1f4d91ece88e9c295c356",
  measurementId: "G-ZWB5LQ44TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);