import { auth, logout } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// ============================
// Elements
// ============================

const profileImage = document.getElementById("profileImage");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const cardCount = document.getElementById("cardCount");
const creditLimit = document.getElementById("creditLimit");

const editBtn = document.getElementById("editProfile");
const logoutBtn = document.getElementById("logout");

const modal = document.getElementById("profileModal");
const closeBtn = document.querySelector(".close");

const editName = document.getElementById("editName");
const editEmail = document.getElementById("editEmail");
const editImage = document.getElementById("editImage");

const saveProfile = document.getElementById("saveProfile");

// ============================
// Load Google User
// ============================

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    const savedProfile = JSON.parse(localStorage.getItem("profile"));

    if (savedProfile) {

        userName.textContent = savedProfile.name;
        userEmail.textContent = savedProfile.email;

        profileImage.src =
            savedProfile.image ||
            user.photoURL;

    } else {

        userName.textContent = user.displayName;
        userEmail.textContent = user.email;

        profileImage.src =
            user.photoURL ||
            "https://ui-avatars.com/api/?name=User";

    }

});

// ============================
// Card Statistics
// ============================

function loadStats() {

    const cards =
        JSON.parse(localStorage.getItem("cards")) || [];

    cardCount.textContent = cards.length;

    let total = 0;

    cards.forEach(card => {

        total += Number(card.limit);

    });

    creditLimit.textContent =
        "₹" + total.toLocaleString();

}

loadStats();

// ============================
// Open Modal
// ============================

editBtn.addEventListener("click", () => {

    editName.value = userName.textContent;
    editEmail.value = userEmail.textContent;
    editImage.value = profileImage.src;

    modal.style.display = "flex";

});

// ============================
// Close Modal
// ============================

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

window.onclick = function (e) {

    if (e.target == modal) {

        modal.style.display = "none";

    }

};

// ============================
// Save Profile
// ============================

saveProfile.addEventListener("click", () => {

    const profile = {

        name: editName.value,
        email: editEmail.value,
        image: editImage.value

    };

    localStorage.setItem(
        "profile",
        JSON.stringify(profile)
    );

    userName.textContent = profile.name;
    userEmail.textContent = profile.email;
    profileImage.src = profile.image;

    modal.style.display = "none";

    alert("Profile Updated Successfully!");

});

// ============================
// Logout
// ============================

logoutBtn.addEventListener("click", logout);
