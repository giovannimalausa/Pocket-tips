let blueCard0 = document.querySelector(".blue-card.card-0");
let blueCard1 = document.querySelector(".blue-card.card-1");
let blueCard2 = document.querySelector(".blue-card.card-2");
let blueCard3 = document.querySelector(".blue-card.card-3");
let blueCard4 = document.querySelector(".blue-card.card-4");
let blueCard5 = document.querySelector(".blue-card.card-5");
let blueCard6 = document.querySelector(".blue-card.card-6");


// Posizioni predefinite
let blueCard0_x = 0; 
let blueCard1_x = '22vw'; // 430
let blueCard2_x = '42vw';
let blueCard3_x = '100vw';
let blueCard4_x = '-'+blueCard3_x;
let blueCard5_x = '-'+blueCard2_x;
let blueCard6_x = '-'+blueCard1_x;

const blueDeck = [blueCard0, blueCard1, blueCard2, blueCard3, blueCard4, blueCard5, blueCard6];
const deckPositions_X = [blueCard0_x, blueCard1_x, blueCard2_x, blueCard3_x, blueCard4_x, blueCard5_x, blueCard6_x];

let p = 1; // Variabile per posizione

function showCards() {
    blueDeck.forEach((card) => {
        card.classList.remove('hidden-card');
    });

    for (let i = 0; i < blueDeck.length; i++) {
        const card = blueDeck[i];
        const card_X = deckPositions_X[i];
        
        gsap.to(card, {
            x: card_X,
            duration: 1,
            ease: 'back',
        })

    }
}
showCards();

for (let i = 0; i < blueDeck.length; i++) {
    const card = blueDeck[i];
    
    // Add a click event listener to each element
    card.addEventListener('click', function() {
        // Change the scale of the clicked element
        gsap.to(this, {
            scale: 1.25,
            duration: 0.3,
        });

        for (let j = 0; j < blueDeck.length; j++) {
            if (j !== i) {
                gsap.to(blueDeck[j], {
                    scale: 1,
                    duration: 0.3,
                });
            }
        }

        for (let k = 0; k < blueDeck.length; k++) {
            const card = blueDeck[k];
            const card_X = deckPositions_X[(k - p + deckPositions_X.length) % deckPositions_X.length];
            
            gsap.to(card, {
                x: card_X,
                duration: 1,
                ease: 'back',
            })

            console.log(k);
        }
        console.log(p);
        if (p === 7) {
            p = 1;
        } else {
            p += 1;
        }
    });
}