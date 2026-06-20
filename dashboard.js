/* ===========================
   CardZen Dashboard
=========================== */

let cards = JSON.parse(localStorage.getItem("cards")) || [];

const cardsContainer = document.querySelector(".cards");
const addCardBtn = document.getElementById("addCard");

/* Default Demo Cards */

if (cards.length === 0) {

    cards = [

        {
            number: "4587",
            limit: 1000000
        },

        {
            number: "7711",
            limit: 500000
        },

        {
            number: "9015",
            limit: 350000
        }

    ];

    saveCards();

}

/* Save */

function saveCards() {

    localStorage.setItem("cards", JSON.stringify(cards));

}

/* Render Cards */

function renderCards() {

    cardsContainer.innerHTML = "";

    cards.forEach((card, index) => {

        const div = document.createElement("div");

        div.className = "credit-card";

        div.innerHTML = `

            <div class="chip"></div>

            <p>•••• •••• •••• ${card.number}</p>

            <span>Limit ₹${Number(card.limit).toLocaleString()}</span>

            <button class="delete-btn" data-index="${index}">
                ✕
            </button>

        `;

        cardsContainer.appendChild(div);

    });

    updateSummary();

}

/* Update Summary */

function updateSummary() {

    const total = cards.reduce((sum, c) => sum + Number(c.limit), 0);

    document.querySelector(".summary .box:nth-child(1) h1").innerText =
        "₹" + total.toLocaleString();

    document.querySelector(".summary .box:nth-child(2) h1").innerText =
        cards.length;

}

/* Add Card */

addCardBtn.addEventListener("click", () => {

    const last4 = prompt("Enter Last 4 Digits");

    if (!last4) return;

    const limit = prompt("Credit Limit");

    if (!limit) return;

    cards.push({

        number: last4,

        limit: Number(limit)

    });

    saveCards();

    renderCards();

});

/* Delete Card */

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete-btn")) {

        const index = e.target.dataset.index;

        if (confirm("Delete this card?")) {

            cards.splice(index, 1);

            saveCards();

            renderCards();

        }

    }

});

/* Logout */

function logout() {

    localStorage.removeItem("cardzenUser");

    window.location.href = "index.html";

}

/* Animation */

window.onload = () => {

    renderCards();

    document.body.animate(

        [

            { opacity: 0 },

            { opacity: 1 }

        ],

        {

            duration: 700,

            fill: "forwards"

        }

    );

};
