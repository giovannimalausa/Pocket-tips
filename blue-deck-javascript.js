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
let blueCard3_x = '65vw';
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

let p = 1; // Variabile per posizione nella traslazione delle card nel carosello

const blueDeck = [blueCard0, blueCard1, blueCard2, blueCard3, blueCard4, blueCard5, blueCard6];
const deckPositions_X = [blueCard0_x, blueCard1_x, blueCard2_x, blueCard3_x, blueCard4_x, blueCard5_x, blueCard6_x];
const deckPositions_deg = [blueCard0_deg, blueCard1_deg, blueCard2_deg, blueCard3_deg, blueCard4_deg, blueCard5_deg, blueCard6_deg];

function showCards() {
    blueDeck.forEach((card) => {
        card.classList.remove('hidden-card');
    });

    for (let i = 0; i < blueDeck.length; i++) {
        const card = blueDeck[i];
        const card_X = deckPositions_X[i];
        const card_deg = deckPositions_deg[i];
        
        gsap.to(card, {
            x: card_X,
            rotate: deckPositions_deg[i],
            duration: 1,
            ease: 'back',
        })
    }
    document.body.style.pointerEvents = 'all';
    console.log('Mouse unlocked');
}
showCards();

// Pointer Event => All // Manualmente, premendo M
document.addEventListener('keydown', function(event) {
    if (event.key === 'm' || event.key === 'M') {
        document.body.style.pointerEvents = 'all';
        console.log('Mouse unlocked');
        nextCard();
    }
});

// Using GSAP to scale up all the img elements with the class 'vector' to 20 times their original size
let vector = document.querySelectorAll('.vector');

let vectorScale = gsap.to(vector, {
    delay: .3,
    scale: 5,
    duration: 1,
    rotate: 180,
    ease: 'back',
    onComplete: switchToFace, 
});

function switchToFace() {
    blueDeck.forEach((card) => {
        // Add the class 'face-wrapper' to child element that already has the class 'face'
        card.children[0].classList.add('hide');
        // Avoid card flashing blue
        card.style.backgroundColor = 'var(--light-background)'; 
        // Show the face of the card
        card.children[1].classList.add('show');
        // Fade in the face of the card
        gsap.to(card.children[1], {
            opacity: 1,
            duration: 0.5,
        })        
    });
}

for (let i = 0; i < blueDeck.length; i++) {
    const card = blueDeck[i];

    // Add a click event listener to each element
    card.addEventListener('click', function nextCard() {
        console.log('Clicked on card with transform = ' + this.style.transform);
        let transformPropertyofClickedElement = this.style.transform;
        // Isolate the first number in the transform property of the clicked element, which is the translateX value
        const regex = /translate\((.*?)vw/g;
        const match = regex.exec(transformPropertyofClickedElement);
        const translateX = match ? match[1] : null;
        
        console.log('TranslateX of clicked card is = ' + translateX);

        // Change the scale of the clicked element
        gsap.to(this, {
            scale: 1.25,
            duration: 0.3,
        });

        // Change the scale of all the other elements
        for (let j = 0; j < blueDeck.length; j++) {
            if (j !== i) {
                gsap.to(blueDeck[j], {
                    scale: 1,
                    duration: 0.3,
                });
            }
        }

        // Define how many positions the cards have to move ===== THIS IS BROKEN ===== 
        if (translateX == null) {
            adjustIncrement = 1;
        } else if (translateX+'vw' === deckPositions_X[1]) {
            adjustIncrement = 0;
        } else if (translateX+'vw' === deckPositions_X[2]) {
            adjustIncrement = -1;
        } else if (translateX === deckPositions_X[3]) {
            adjustIncrement = 0;
        } else if (translateX === deckPositions_X[4]) {
            adjustIncrement = 0;
        } else if (translateX === deckPositions_X[5]) {
            adjustIncrement = 0;
        } else if (translateX === deckPositions_X[6]) {
            adjustIncrement = 0;
        }

        // Traslazione
        for (let k = 0; k < blueDeck.length; k++) {
            const card = blueDeck[k];
            const card_X = deckPositions_X[(k - p + adjustIncrement + deckPositions_X.length) % deckPositions_X.length]; // Usiamo il modulo per far ricominciare le carte in loop

            // Opacità a 0 per la carta che si sposta nella posizione a dx (= blueCard3_x)
            if (card_X === blueCard3_x)  {
                card.style.opacity = 0;
            }

            gsap.to(card, {
                x: card_X,
                rotation: deckPositions_deg[(k - p + adjustIncrement + deckPositions_X.length) % deckPositions_X.length], // per il random: gsap.utils.random(-3, 3, 1) ---> (min, max, snap)
                duration: 1.2,
                ease: 'back',
                onComplete: resetOpacity(card),
            })

            console.log(k);
        }
        console.log(p);
        if (p >= 7) {
            p = 1;
        } else {
            p += 1;
        }
    });
}

// Reset opacity quando la card è tornata nella posizione iniziale
function resetOpacity(card) {
    // Wait 0.5 seconds
    setTimeout(function() {
        card.style.opacity = 1;
    }, 500);
    
}