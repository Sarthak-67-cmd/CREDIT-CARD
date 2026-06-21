// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTjnQCnwA5ziTJpDxhMwjpAFlE6HlUA8M",
  authDomain: "cardzen-bfc55.firebaseapp.com",
  projectId: "cardzen-bfc55",
  storageBucket: "cardzen-bfc55.firebasestorage.app",
  messagingSenderId: "695755978492",
  appId: "1:695755978492:web:cad490848d8dab5d580979",
  measurementId: "G-5LXBBQR1FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
