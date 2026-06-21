// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTjnQCnwA5ziTJpDxhMwjpAFlE6HlUA8M",
  authDomain: "cardzen-bfc55.firebaseapp.com",
  projectId: "cardzen-bfc55",
  storageBucket: "cardzen-bfc55.firebasestorage.app",
  messagingSenderId: "695755978492",
  appId: "1:695755978492:web:cad490848d8dab5d580979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export auth
export { auth };
