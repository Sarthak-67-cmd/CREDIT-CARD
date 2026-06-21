import { auth } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.getElementById("googleLogin").addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    alert(`Welcome ${result.user.displayName}!`);

    // Hide login button or update UI here
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});
