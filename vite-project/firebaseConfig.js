// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Cuc_iL6tEkaclFCxIZMjwsX5cXrKQmw",
  authDomain: "ecommerce-c65ff.firebaseapp.com",
  projectId: "ecommerce-c65ff",
  storageBucket: "ecommerce-c65ff.firebasestorage.app",
  messagingSenderId: "773041262393",
  appId: "1:773041262393:web:2e229632e6d26658ffa2e8",
  measurementId: "G-5LGH8GRDKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;