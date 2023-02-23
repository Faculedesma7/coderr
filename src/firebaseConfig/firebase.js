// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFs8pqYrs4BpE1ptHBKxhNQF51bRLI6EM",
  authDomain: "coderpractica.firebaseapp.com",
  projectId: "coderpractica",
  storageBucket: "coderpractica.appspot.com",
  messagingSenderId: "207597138986",
  appId: "1:207597138986:web:21f43661d4502b0adc7f53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)