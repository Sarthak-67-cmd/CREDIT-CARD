// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase Configuration
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

// Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

// Google Login
async function login() {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        alert(`Welcome ${user.displayName}`);

        window.location.href = "dashboard.html";

    } catch (error) {

        alert(error.message);

    }

}

// Logout
async function logout() {

    await signOut(auth);

    window.location.href = "index.html";

}

// Check Login State
onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log("Logged in:", user.displayName);

    } else {

        console.log("Not Logged In");

    }

});

// Export
export {
    auth,
    db,
    login,
    logout
};
