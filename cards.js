// ==========================
// CardZen - Cards Page
// ==========================

const cardsContainer = document.getElementById("cardsContainer");
const addCardBtn = document.getElementById("addCard");
const clearCardsBtn = document.getElementById("clearCards");

// Load cards from localStorage
let cards = JSON.parse(localStorage.getItem("cards")) || [];

// ==========================
// Save Cards
// ==========================

function saveCards() {
    localStorage.setItem("cards", JSON.stringify(cards));
}

// ==========================
// Render Cards
// ==========================

function renderCards() {

    cardsContainer.innerHTML = "";

    if (cards.length === 0) {
        cardsContainer.innerHTML = `
            <div class="empty">
                <h2>No cards added yet 💳</h2>
                <p>Click "Add Card" to save your first card.</p>
            </div>
        `;
        return;
    }

    cards.forEach((card, index) => {

        const cardDiv = document.createElement("div");
        cardDiv.className = "credit-card";

        cardDiv.innerHTML = `

            <button class="delete-btn" onclick="deleteCard(${index})">
                <i class="fas fa-trash"></i>
            </button>

            <div class="chip"></div>

            <p>**** **** **** ${card.number}</p>

            <span>${card.name}</span>

            <span>Limit : ₹${card.limit}</span>

            <span>Due : ${card.due}</span>

        `;

        cardsContainer.appendChild(cardDiv);

    });

}

// ==========================
// Add Card
// ==========================

addCardBtn.addEventListener("click", () => {

    const name = prompt("Card Name");

    if (!name) return;

    const number = prompt("Last 4 Digits");

    if (!number) return;

    const limit = prompt("Credit Limit");

    if (!limit) return;

    const due = prompt("Due Date");

    if (!due) return;

    cards.push({

        name,
        number,
        limit,
        due

    });

    saveCards();

    renderCards();

});

// ==========================
// Delete One Card
// ==========================

function deleteCard(index) {

    if (confirm("Delete this card?")) {

        cards.splice(index, 1);

        saveCards();

        renderCards();

    }

}

// ==========================
// Delete All
// ==========================

clearCardsBtn.addEventListener("click", () => {

    if (cards.length === 0) return;

    if (confirm("Delete all saved cards?")) {

        cards = [];

        saveCards();

        renderCards();

    }

});

// ==========================
// Initial Load
// ==========================

renderCards();
