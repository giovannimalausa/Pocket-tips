for (deckCounter = 2; deckCounter <= 6; deckCounter++) {
    $('.mazzo1').clone().addClass('mazzo' + deckCounter).removeClass('mazzo1').insertAfter('.mazzo' + (deckCounter - 1));
    console.log('cloned');
}

const allCards = document.querySelectorAll(".single-card-wrapper");
console.log(allCards.length);

// Creating an array to store the animations
let cardsToWheelAnimations = [];
let rotateWheelAnimations = [];

// Creating array to store the cards positioning in the wheel
const cardPositions = [];

// Calculating the angle between each card
const angleStep = 360 / allCards.length;

// Defining the wheel radius
const radius = 800; // value in px

// Generating card positions
for (let i = 0; i < allCards.length; i++) {
    // Calculate the angle for each card
    let cardAngle = angleStep * i;

    // Calculating the position of the card
    let cardPosition_x = -radius * Math.sin(cardAngle * Math.PI / 180);
    let cardPosition_y = radius * Math.cos(cardAngle * Math.PI / 180);

    // Creating an object representing each card values
    const cardValues = {
        cardAngle : cardAngle,
        cardPosition_x : cardPosition_x,
        cardPosition_y : cardPosition_y,
    };

    // Pushing the object to the array
    cardPositions.push(cardValues);
}

// Applying the positioning to each card of the wheel
for (var i = 0; i < allCards.length; i++) {

    let cardsToWheelAnimation = gsap.fromTo(allCards[i], {
        // from = partenza
        rotate: 0,
    },
    {
        // to = arrivo
        x: cardPositions[i].cardPosition_x,
        y: cardPositions[i].cardPosition_y,
        rotate: cardPositions[i].cardAngle,
        duration: 1,
        delay: 0.5,
        paused: true,
        ease: "power1.inOut",
    });
    // Push new animation to the array
    cardsToWheelAnimations.push(cardsToWheelAnimation);
}

// Function to play the distributing animation
function playWheelAnimation() {
    // Play the animation
    cardsToWheelAnimations.forEach((animation) => {
        animation.play();
    });
}

// Function to play the wheel rotation animations
function playRotateAnimation() {
    // Play the animation
    rotateWheelAnimations.forEach((animation) => {
        animation.invalidate();
        animation.restart();
    });
    positionVariation++;

    for (var i = 0; i < allCards.length; i++) {
        let j = i + positionVariation;
        if (j >= allCards.length) {
            j = j - allCards.length;
        }
        let rotateWheelAnimation = gsap.to(allCards[i], {
            x: cardPositions[j].cardPosition_x,
            y: cardPositions[j].cardPosition_y,
            rotate: cardPositions[j].cardAngle,
            duration: 1,
            delay: 0,
            paused: true,
        });
        // Push new animation to the array
        rotateWheelAnimations.push(rotateWheelAnimation);
    }

}

// Applying repositioning after navigation
let positionVariation = 1;

// Add event listener for the SPACE bar press
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        console.log("Space pressed");
        playWheelAnimation();
    } else if (event.code === "ArrowRight") {
        console.log("ArrorRight pressed");
        playRotateAnimation();
    } else if (event.code === "ArrowLeft") {
        console.log("ArrorLeft pressed");
        rotateWrapper();
    }
});

wrapper = document.querySelector('.wrapper');
function rotateWrapper() {
    gsap.to(wrapper, {
        rotate: angleStep,
        duration: 1,
        delay: 0,
    });
}