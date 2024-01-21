// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-project-c8549.firebaseapp.com",
  projectId: "mern-blog-project-c8549",
  storageBucket: "mern-blog-project-c8549.appspot.com",
  messagingSenderId: "35128245816",
  appId: "1:35128245816:web:cf1dba23315c6d836130cd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
