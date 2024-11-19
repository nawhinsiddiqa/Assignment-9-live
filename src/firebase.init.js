// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ3r0V7zQx_OHU9tvLrFWrGFqCIhgynbk",
  authDomain: "assignment-09-8b3e9.firebaseapp.com",
  projectId: "assignment-09-8b3e9",
  storageBucket: "assignment-09-8b3e9.firebasestorage.app",
  messagingSenderId: "47834430238",
  appId: "1:47834430238:web:9e9f175f5a6c49bee5e70f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);