// Variabili

let angoloRotazione = 45;

// MAIN CARDS
let blueCard = document.querySelector(".blue-card.cover.main-cover");
let yellowCard = document.querySelector(".yellow-card.cover.main-cover");
let greenCard = document.querySelector(".green-card.cover.main-cover");
let redCard = document.querySelector(".red-card.cover.main-cover");
let pinkCard = document.querySelector(".pink-card.cover.main-cover");

// Card angles (deck)
let pinkAngle = 0;
let redAngle = '5deg';
let blueAngle = 0;
let yellowAngle = '-1deg';
let greenAngle = '3deg';

// Fan Positions ==> Inner <==
let inner_X = 190;
let inner_Y = -30;
let inner_deg = 20
// Fan Positions <== Outer ==>
let outer_X = 350;
let outer_Y = 80;
let outer_deg = 40;
// Fan Positions ==| Center |==
let center_X = 0;
let center_Y = -80;

const mainCards_blue = [blueCard, yellowCard, greenCard, redCard, pinkCard];
let overable = true; 

let pinkToCenter = gsap.fromTo(".pink-card.cover.main-cover", {
    x: -500,
    y: -205,
    rotate: -15,
}, 
{
    x: 0,
    y: 0,
    rotate: pinkAngle,
    duration: 1,
    delay: 0.5,
    ease: "power1.inOut",
    paused: true,
});

let redToCenter = gsap.fromTo(".red-card.cover.main-cover", {
    x: 500,
    y: 205,
    rotate: 30,
},
{
    x: 0,
    y: 0,
    rotate: redAngle,
    duration: 1,
    delay: 0.5,
    ease: "power1.inOut",
    paused: true,
});

let blueToCenter = gsap.fromTo(".blue-card.cover.main-cover", {
    x: 620,
    y: -300,
    rotate: -20,
},
{
    x: 0,
    y: 0,
    rotate: blueAngle,
    duration: 1,
    delay: 0.5,
    ease: "power1.inOut",
    paused: true,
});

let yellowToCenter = gsap.fromTo(".yellow-card.cover.main-cover", {
    x: -700,
    y: 300,
    rotate: -45,
},
{
    x: 0,
    y: 0,
    rotate: yellowAngle,
    duration: 1,
    delay: 0.5,
    ease: "power1.inOut",
    paused: true,
});

let greenToCenter = gsap.fromTo(".green-card.cover.main-cover", {
    x: -50,
    y: -550,
    rotate: -45,
},
{
    x: 0,
    y: 0,
    rotate: greenAngle,
    duration: 1,
    delay: 0.5,
    ease: "power1.inOut",
    paused: true,
    onComplete: distributeFan, // Distribuisce le carte a ventaglio dopo averle centrate
});

// ===| Pink |===
let pink = gsap.to(".pink-card.cover.main-cover", {
    x: -outer_X,
    y: outer_Y,
    rotate: -outer_deg,
    duration: 1,
    delay: 1,
    ease: "back",
    paused: true,
});

// ===| Red |===
let red = gsap.to(".red-card.cover.main-cover", {
    x: -inner_X,
    y: inner_Y,
    rotate: -inner_deg,
    duration: 1,
    delay: 1,
    ease: "back",
    paused: true,
});

// ===| Blue |===
let blue = gsap.to(".blue-card.cover.main-cover", {
    x: center_X,
    y: center_Y,
    duration: 1,
    delay: 1,
    ease: "back",
    paused: true,
});

// ===| Yellow |===
let yellow = gsap.to(".yellow-card.cover.main-cover", {
    x: inner_X,
    y: inner_Y,
    rotate: inner_deg,
    duration: 1,
    delay: 1,
    ease: "back",
    paused: true,
});

// ===| Green |===
let green = gsap.to(".green-card.cover.main-cover", {
    x: outer_X,
    y: outer_Y,
    rotate: outer_deg,
    duration: 1,
    delay: 1,
    ease: "back",
    paused: true,
    onComplete: enableMouse,
});

document.body.addEventListener("click", function() {
    centerFan();
});

// Run function when pressing Space on the keyboard
document.body.addEventListener("keydown", function(e) {
    if (e.code === 'Space') {
        centerFan();
    }
});

// Funzione che centra le carte nella pagina
function centerFan() {
    pinkToCenter.play();
    redToCenter.play();
    blueToCenter.play();
    yellowToCenter.play();
    greenToCenter.play();
}

// Funzione che distribuisce le carte a ventaglio nella pagina
function distributeFan() {
    pink.play();
    red.play();
    green.play();
    blue.play();
    yellow.play();    
}

function enableMouse() {
    document.body.style.pointerEvents = 'all';
    console.log('Mouse enabled');
}


// BLUE
let enterBlue = gsap.to(blueCard, { // Animazione card blu
    paused: true,
    y: -125,
    duration: 0.3,
    ease: "power3",
})

let rotateBlue = gsap.to(".blue-vector", { // Animazione vettore blu
    paused: true,
    rotate: angoloRotazione,
    duration: 0.4,
})

// On BLUE over
blueCard.addEventListener("mouseenter", function() {
    if (overable === true) {
        enterBlue.play(); // Animazione card
        rotateBlue.play(); // Animazione vettore blu
    }
});

blueCard.addEventListener("mouseleave", function() {
    if (overable === true) {
        enterBlue.reverse(); // Animazione card (reverse)
        rotateBlue.reverse(); // Animazione vettore blue (reverse)
    }
});

// YELLOW
let enterYellow = gsap.to(yellowCard, {
    paused: true,
    y: '-='+Math.sin(20)*60, 
    x: '+='+Math.cos(20)*60, 
    duration: 0.3,
    ease: "power3",
});

let rotateYellow = gsap.to(".yellow-vector", { // Animazione vettore blu
    paused: true,
    rotate: angoloRotazione,
    duration: 0.4,
})

yellowCard.addEventListener("mouseenter", function() {
    enterYellow.play();
    rotateYellow.play();
});
yellowCard.addEventListener("mouseleave", function() {
    enterYellow.reverse();
    rotateYellow.reverse();
});

// GREEN
let enterGreen = gsap.to(greenCard, {
    paused: true,
    y: '-='+Math.sin(40)*60, 
    x: '-='+Math.cos(40)*60, 
    duration: 0.3,
    ease: "power3",
})

let rotateGreen = gsap.to(".green-vector", { // Animazione vettore blu
    paused: true,
    rotate: angoloRotazione,
    duration: 0.4,
})

greenCard.addEventListener("mouseenter", function() {
    enterGreen.play();
    rotateGreen.play();
});
greenCard.addEventListener("mouseleave", function() {
    enterGreen.reverse();
    rotateGreen.reverse();
});

// RED
let enterRed = gsap.to(redCard, {
    paused: true,
    y: '-='+Math.sin(20)*60, 
    x: '-='+Math.cos(20)*60, 
    duration: 0.3,
    ease: "power3",
});

let rotateRed = gsap.to(".red-vector", { // Animazione vettore blu
    paused: true,
    rotate: angoloRotazione,
    duration: 0.4
});
 
redCard.addEventListener("mouseenter", function() {
    enterRed.play();
    rotateRed.play();
});
redCard.addEventListener("mouseleave", function() {
    enterRed.reverse();
    rotateRed.reverse();
});

// PINK
let enterPink = gsap.to(pinkCard, {
    paused: true,
    y: '-='+Math.sin(40)*60, 
    x: '+='+Math.cos(40)*60, 
    duration: 0.3,
    ease: "power3",
});

let rotatePink = gsap.to(".pink-vector", { // Animazione vettore blu
    paused: true,
    rotate: angoloRotazione,
    duration: 0.4
});

pinkCard.addEventListener("mouseenter", function() {
    enterPink.play();
    rotatePink.play();
});
pinkCard.addEventListener("mouseleave", function() {
    enterPink.reverse();
    rotatePink.reverse();
});


// ON CLICK

blueCard.addEventListener("click", function() {
    console.log("Blue was clicked.")
    let blueClicked = gsap.to([".pink-card.cover", ".red-card.cover", ".yellow-card.cover", ".green-card.cover"], {
        opacity: 0,
        paused: true,
        duration: 0.2,
    })

    let blueScaleUp = gsap.to(blueCard, {
        scale: 1.25,
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: "back",
        onComplete: goToPage,
    })

    
    overable = false;
    
    blueClicked.play();
    blueScaleUp.play();
});


function goToPage() {
    setTimeout(window.location.href = "blue-deck.html", 1000);
    console.log("Cambio pagina")
    
}