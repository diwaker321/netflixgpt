// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjZVvz4tBhP3KG4sngKwG_U1zc_uY3Lkg",
  authDomain: "netflix-gpt-34ac5.firebaseapp.com",
  projectId: "netflix-gpt-34ac5",
  storageBucket: "netflix-gpt-34ac5.firebasestorage.app",
  messagingSenderId: "1061768030982",
  appId: "1:1061768030982:web:fed3479bf462ce97e18c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()