let blueCard0 = document.querySelector(".blue-card.card-0");
let blueCard1 = document.querySelector(".blue-card.card-1");
let blueCard2 = document.querySelector(".blue-card.card-2");
let blueCard3 = document.querySelector(".blue-card.card-3");
let blueCard4 = document.querySelector(".blue-card.card-4");
let blueCard5 = document.querySelector(".blue-card.card-5");
let blueCard6 = document.querySelector(".blue-card.card-6");


// Posizioni predefinite
let blueCard0_x = 0;
let blueCard1_x = 430;
let blueCard2_x = 800;
let blueCard3_x = 1190;
let blueCard4_x = -blueCard3_x;
let blueCard5_x = -blueCard2_x;
let blueCard6_x = -blueCard1_x;

const blueDeck = [blueCard0, blueCard1, blueCard2, blueCard3, blueCard4, blueCard5, blueCard6];
const deckPositions_X = [blueCard0_x, blueCard1_x, blueCard2_x, blueCard3_x, blueCard4_x, blueCard5_x, blueCard6_x];

function showCards() {
    blueDeck.forEach((element) => {
        element.classList.remove('hidden-card');
    });
}
showCards();

