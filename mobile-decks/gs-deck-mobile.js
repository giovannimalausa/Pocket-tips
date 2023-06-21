// Cloning the deck 5 times (= 6 decks = 30 cards, in total)
for (deckCounter = 2; deckCounter <= 6; deckCounter++) {
    $('.mazzo1').clone().addClass('mazzo' + deckCounter).removeClass('mazzo1').insertAfter('.mazzo' + (deckCounter - 1));
    console.log('Deck cloned.');
}

// Creating an array to store all +the cards
const allCards = document.querySelectorAll(".single-card-wrapper");
console.log("There are now", allCards.length, "cards in total.");

// Creating array to store the cards positioning in the wheel
const cardPositions = [];

// Calculating the angle between each card
const angleStep = 360 / allCards.length;

// Defining the wheel radius
const radius = 1250; // value in px

// Defining the vertical offset of the wheel
const verticalOffset = 1250; // value in px

// Generating card positions
for (let i = 0; i < allCards.length; i++) {
    // Calculate the angle for each card
    let cardAngle = angleStep * i;

    // Calculating the position of the card
    let cardPosition_x = radius * Math.sin(cardAngle * Math.PI / 180);
    let cardPosition_y = -radius * Math.cos(cardAngle * Math.PI / 180)+verticalOffset;

    // Creating an object representing each card values
    const cardValues = {
        cardAngle : cardAngle,
        cardPosition_x : cardPosition_x,
        cardPosition_y : cardPosition_y,
    };

    // Pushing the object to the array
    cardPositions.push(cardValues);
}

// Adjusting the position of the first card so that it rises a bit
cardPositions[0].cardPosition_y = cardPositions[0].cardPosition_y - 60;

// Creating an array to store the animations
let cardsToWheelAnimations = [];

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
        rotate: cardPositions[i].cardAngle + "_short",
        duration: 1,
        delay: 0.5,
        paused: false,
        ease: "power1.inOut",
    });
    // Push new animation to the array
    cardsToWheelAnimations.push(cardsToWheelAnimation);
}

// Store last direction of rotation
lastDirection = "none";

// Function to play the wheel rotation CLOCKWISE animations
function playRotateCWAnimation() {

    if (lastDirection == "CCW") {
        positionVariation++;
    } else if (lastDirection == "none") {
        positionVariation = 1;
    } else {
        positionVariation++;
    }

    // Flush previous animations from the array
    rotateWheelAnimations = [];

    for (var i = 0; i < allCards.length; i++) {
        let j = i + positionVariation;
        if (j >= allCards.length) {
            j = j - allCards.length;
        } else if (j < 0) {
            j = j + allCards.length;
        }
        let rotateWheelAnimation = gsap.to(allCards[i], {
            x: cardPositions[j].cardPosition_x,
            y: cardPositions[j].cardPosition_y,
            rotate: cardPositions[j].cardAngle+"_short",
            duration: .8,
            delay: 0,
            paused: true,
            ease: "back",
        });
        // Push new animation to the array
        rotateWheelAnimations.push(rotateWheelAnimation);

        // Select card with upper position
        if (j == 0) {
            $(allCards[i]).addClass('selected');
            console.log("adding select card")
        } else if (j == 1) {
            $(allCards[i]).addClass('next');
        } else if (j == 29) {
            $('.single-card-wrapper').removeClass('selected');
            $('.single-card-wrapper').removeClass('next');
            $('.single-card-wrapper').removeClass('previous');
            $(allCards[i]).addClass('previous');
            console.log("adding previous card")
        }
    }

    // Play the animation
    rotateWheelAnimations.forEach((animation) => {
        animation.invalidate(); // invalidate the animation so reset the starting values to current ones
        animation.restart();
    });

    // Store last direction
    lastDirection = "CW";
}

// Function to play the wheel rotation COUNTER-CLOCKWISE animations
function playRotateCCWAnimation() {

    if (lastDirection == "CW") {
        positionVariation--;
    } else if (lastDirection == "none") {
        positionVariation = -1;
    } else {
        positionVariation--;
    } 

    // Flush previous animations from the array
    rotateWheelAnimations = [];

    for (var i = 0; i < allCards.length; i++) {
        let j = i + positionVariation;
        if (j >= allCards.length) {
            j = j - allCards.length;
        } else if (j < 0) {
            j = j + allCards.length;
        }

        // Select card with upper position
        if (j == 0) {
            $('.single-card-wrapper').removeClass('selected');
            $(allCards[i]).addClass('selected');
        }

        let rotateWheelAnimation = gsap.to(allCards[i], {
            x: cardPositions[j].cardPosition_x,
            y: cardPositions[j].cardPosition_y,
            rotate: cardPositions[j].cardAngle+"_short",
            duration: .8,
            delay: 0,
            paused: true,
            ease: "back",
        });
        // Push new animation to the array
        rotateWheelAnimations.push(rotateWheelAnimation);

        // Select card with upper position
        if (j == 0) {
            $(allCards[i]).addClass('selected');
            console.log("adding select card")
        } else if (j == 1) {
            $(allCards[i]).addClass('next');
        } else if (j == 29) {
            $('.single-card-wrapper').removeClass('selected');
            $('.single-card-wrapper').removeClass('next');
            $('.single-card-wrapper').removeClass('previous');
            $(allCards[i]).addClass('previous');
            console.log("adding previous card")
        }
        
    }

    // Play the animation
    rotateWheelAnimations.forEach((animation) => {
        animation.invalidate(); // invalidate the animation so reset the starting values to current ones
        animation.restart();
    });

    // Store last direction
    lastDirection = "CCW";
}

// Add event listener for the SPACE bar press
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        console.log("Space pressed");
    } else if (event.code === "ArrowRight") {
        console.log("ArrorRight pressed");
        playRotateCCWAnimation();

    } else if (event.code === "ArrowLeft") {
        console.log("ArrorLeft pressed");
        playRotateCWAnimation();
    }
});





// Using GSAP to scale up all the img elements with the class 'vector' to 20 times their original size
let vector = document.querySelectorAll('.vector');

let vectorScaleUp = gsap.to(vector, {
    delay: 1.75,
    scale: 5,
    duration: 1,
    rotate: 180,
    ease: 'back',
    onComplete: switchToFace, 
});

function switchToFace() {
    allCards.forEach((card) => {
        // Show the face of the card
        card.children[1].classList.add('show');
        // Fade in the face of the card
        gsap.to(card.children[1], {
            opacity: 1,
            duration: 0.5,
        })        
    });
};