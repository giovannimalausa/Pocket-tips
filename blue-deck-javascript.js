// Card
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

// Angoli predefiniti
let blueCard0_deg = 0; // center
let blueCard1_deg = 0.93; // right
let blueCard2_deg = -1.32; // far right
let blueCard3_deg = 21;
let blueCard4_deg = 0;
let blueCard5_deg = 1.85; // far left
let blueCard6_deg = -1.64; // left


const blueDeck = [blueCard0, blueCard1, blueCard2, blueCard3, blueCard4, blueCard5, blueCard6];
const deckPositions_X = [blueCard0_x, blueCard1_x, blueCard2_x, blueCard3_x, blueCard4_x, blueCard5_x, blueCard6_x];
const deckPositions_deg = [blueCard0_deg, blueCard1_deg, blueCard2_deg, blueCard3_deg, blueCard4_deg, blueCard5_deg, blueCard6_deg];

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

        // Traslazione
        for (let k = 0; k < blueDeck.length; k++) {
            const card = blueDeck[k];
            const card_X = deckPositions_X[(k - p + deckPositions_X.length) % deckPositions_X.length]; // Usiamo il modulo per far ricominciare le carte in loop

            gsap.to(card, {
                x: card_X,
                rotation: deckPositions_deg[(k - p + deckPositions_X.length) % deckPositions_X.length], // per il random: gsap.utils.random(-3, 3, 1) ---> (min, max, snap)
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