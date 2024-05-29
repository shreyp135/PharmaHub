// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pharmahub-7f890.firebaseapp.com",
  projectId: "pharmahub-7f890",
  storageBucket: "pharmahub-7f890.appspot.com",
  messagingSenderId: "38196731680",
  appId: "1:38196731680:web:7cdc17ffdab2cc8629c145"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);