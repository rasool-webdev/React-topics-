
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEjlOTKFnL5_i1DgaRgme1AkG9l_WOi4k",
  authDomain: "react-auth-demo-1cd0c.firebaseapp.com",
  projectId: "react-auth-demo-1cd0c",
  storageBucket: "react-auth-demo-1cd0c.appspot.com",
  messagingSenderId: "284969201504",
  appId: "1:284969201504:web:5ecb52021c432874783805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

