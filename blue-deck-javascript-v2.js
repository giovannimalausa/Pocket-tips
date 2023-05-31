// Pulsanti (frecce) per navigazione
const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');

// Card
let blueCard0 = document.querySelector(".blue-card.card-0");
let blueCard1 = document.querySelector(".blue-card.card-1");
let blueCard2 = document.querySelector(".blue-card.card-2");
let blueCard3 = document.querySelector(".blue-card.card-3");
let blueCard4 = document.querySelector(".blue-card.card-4");
let blueCard5 = document.querySelector(".blue-card.card-5");
let blueCard6 = document.querySelector(".blue-card.card-6");

// Posizioni predefinite, senza unità di misura
let position_0_x_value = 0; 
let position_1_x_value = 22;
let position_2_x_value = 42;
let position_3_x_value = 65;
let position_4_x_value = '-'+position_3_x_value;
let position_5_x_value = '-'+position_2_x_value;
let position_6_x_value = '-'+position_1_x_value;

// Posizioni predefinite
let blueCard0_x = position_0_x_value + 'vw'; 
let blueCard1_x = position_1_x_value + 'vw';
let blueCard2_x = position_2_x_value + 'vw';
let blueCard3_x = position_3_x_value + 'vw';
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

// CURRENT STATE
let cardZeroPosition = 0;
let calculatedPosition = 0;

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
            rotate: card_deg,
            duration: 1,
            ease: 'back',
        })
    }
    document.body.style.pointerEvents = 'all';
    console.log('Mouse unlocked');
}
showCards();


for (let i = 0; i < blueDeck.length; i++) {
    const card = blueDeck[i];

    // Add a click event listener to each card
    card.addEventListener('click', function clickOnCard() {
        console.log('Clicked on card with transform = ' + this.style.transform);
        let transformPropertyofClickedElement = this.style.transform;
        // Isolate the first number in the transform property of the clicked element, which is the translateX value
        const regex = /translate\((.*?)vw/g;
        const match = regex.exec(transformPropertyofClickedElement);
        const translateX = match ? match[1] : null;
        
        console.log('TranslateX of clicked card is = ' + translateX);
        if (translateX > 0) {
            navigateRight();
        } else if (translateX < 0) {
            navigateLeft();
        } else {
            console.log('Clicked on center card');
        }
    });
}


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


// Click on the right button to navigate right
buttonRight.addEventListener('click', navigateRight);

// Function that manages the navigation to the right
function navigateRight() {
    console.log('Navigate right');

    for (let i = 0; i < blueDeck.length; i++) {
        const card = blueDeck[i];

        calculatedPosition = i-1+cardZeroPosition;
        // if calculatedPosition is negative, add 7 to it
        if (calculatedPosition < 0) {
            calculatedPosition += 7;
        } else if (calculatedPosition > 6) {
            calculatedPosition -= 7;
        }
        const card_X = deckPositions_X[calculatedPosition];
        const card_deg = deckPositions_deg[calculatedPosition];
        
        gsap.to(card, {
            x: card_X,
            rotate: card_deg,
            duration: 1,
            ease: 'back',
        })

        // Hide card with calculatedPosition = 3
        if (calculatedPosition === 3) {
            gsap.to(card, {
                opacity: 0,
                duration: 0.1,
                onComplete: resetOpacity,
            })
        }

        // Scale up card with calculatedPosition = 0, else scale down to 1x
        if (calculatedPosition === 0) {
            gsap.to(card, {
                scale: 1.25,
                duration: 0.3,
            })
        } else {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
            })
        }

        console.log("i = " + i + ", calculatedPosition = "+calculatedPosition);
    }
    cardZeroPosition -=1;
    if (cardZeroPosition === -7) {
        console.log("Reset cardZeroPosition => 0");
        cardZeroPosition = 0;
    }
    console.log("cardZeroPosition = "+cardZeroPosition);
}

// Click on the left button to navigate left
buttonLeft.addEventListener('click', navigateLeft);

// Function that manages the navigation to the left
function navigateLeft() {
    console.log('Navigate left');

    for (let i = 0; i < blueDeck.length; i++) {
        const card = blueDeck[i];

        calculatedPosition = i+1+cardZeroPosition;

        // If calculatedPosition is greater than 6, subtract 7 from it
        if (calculatedPosition > 6) {
            calculatedPosition -= 7;
        } else if (calculatedPosition < 0) {
            calculatedPosition += 7;
        }

        const card_X = deckPositions_X[calculatedPosition];
        const card_deg = deckPositions_deg[calculatedPosition];

        gsap.to(card, {
            x: card_X,
            rotate: card_deg,
            duration: 1,
            ease: 'back',
        })

        if (calculatedPosition === 4) {
            gsap.to(card, {
                opacity: 0,
                duration: 0.1,
                onComplete: resetOpacity,
                })
        }

        // Scale up card with calculatedPosition = 0, else scale down to 1x
        if (calculatedPosition === 0) {
            gsap.to(card, {
                scale: 1.25,
                duration: 0.3,
            })
        } else {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
            })
        }
            
        console.log("i = " + i + ", calculatedPosition = "+calculatedPosition);
    }
    cardZeroPosition +=1;
    if (cardZeroPosition === 7) {
        console.log("Reset cardZeroPosition => 0");
        cardZeroPosition = 0;
    }
    console.log("cardZeroPosition = "+cardZeroPosition);
}

// Reset cards opacity to 1 after 0.2 seconds
function resetOpacity() {
    setTimeout(function() {
    blueDeck.forEach((card) => {
        card.style.opacity = 1;
    });
    console.log('Opacity reset');
    }, 200);
}

// Add custom cursor when hovering on cards
// Add a click event listener to each card
for (let i = 0; i < blueDeck.length; i++) {
    const card = blueDeck[i];

    // Add a click event listener to each card
    card.addEventListener('mouseover', function hoverOnCard() {
        console.log('Hover on card');
        
        console.log('Hovering on card with transform = ' + this.style.transform);
        let transformPropertyofClickedElement = this.style.transform;
        // Isolate the first number in the transform property of the clicked element, which is the translateX value
        const regex = /translate\((.*?)vw/g;
        const match = regex.exec(transformPropertyofClickedElement);
        const translateX = match ? match[1] : null;
        
        console.log('TranslateX of hovered card is = ' + translateX);
        if (translateX > 0) {
            card.classList.remove("cursor-left");
            card.classList.add("cursor-right");
        } else if (translateX < 0) {
            card.classList.remove("cursor-right");
            card.classList.add("cursor-left");
        } else {
            card.classList.remove("cursor-right");
            card.classList.remove("cursor-left");
            console.log('Hovering on center card');
        }

    });
}