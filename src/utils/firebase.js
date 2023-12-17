// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "next-blog-11e4a.firebaseapp.com",
  projectId: "next-blog-11e4a",
  storageBucket: "next-blog-11e4a.appspot.com",
  messagingSenderId: "989591809618",
  appId: "1:989591809618:web:05b4aaeb78d22c8e11398b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
