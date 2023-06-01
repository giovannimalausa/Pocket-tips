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
let animationToCenterComplete = false; // Animazione che porta le carte al centro completata?

// Array per Animazioni che portano le carte "extra" al centro
let extraCardsToCenterAnimations = [];

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
    x: 600,
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
    x: -500,
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
    y: -295,
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

// Animazione card extra
const extraCards = document.querySelectorAll(".extra");
const extraCards_positions = [
    {x: gsap.utils.random(-850, -700, 1), y: gsap.utils.random(125, 100, 1), angle: gsap.utils.random(-15, -5, 1)}, // verde
    {x: gsap.utils.random(-50, 50, 1), y: gsap.utils.random(300, 400, 1), angle: gsap.utils.random(-80, 45, 5)},
    {x: gsap.utils.random(300, 400, 1), y: gsap.utils.random(0, 100, 1), angle: gsap.utils.random(-45, 45, 5)},
    {x: gsap.utils.random(725, 850, 1), y: gsap.utils.random(700, 700, 1), angle: gsap.utils.random(-45, 45, 5)},
    {x: gsap.utils.random(-400, -300, 1), y: gsap.utils.random(700, 700, 1), angle: gsap.utils.random(-45, 45, 5)},
    {x: gsap.utils.random(100, 300, 1), y: gsap.utils.random(600, 700, 1), angle: gsap.utils.random(-45, 45, 5)},
    {x: gsap.utils.random(200, 400, 1), y: gsap.utils.random(-450, -400, 1), angle: gsap.utils.random(-45, 45, 5)},
    {x: gsap.utils.random(-800, -700, 1), y: gsap.utils.random(-600, -550, 1), angle: gsap.utils.random(-45, -35, 5)}, // ok (gialla alto dx)
    {x: gsap.utils.random(600, 800, 1), y: gsap.utils.random(-700, -500, 1), angle: gsap.utils.random(-0, 0, 5)}, // rosa
    {x: gsap.utils.random(-500, -400, 1), y: gsap.utils.random(-700, -700, 1), angle: gsap.utils.random(-45, 45, 5)},
];

for (var i = 0; i < extraCards.length; i++) {
    let extraCardToCenterAnimation = gsap.fromTo(extraCards[i], {
        x: extraCards_positions[i].x,
        y: extraCards_positions[i].y,
        rotate: extraCards_positions[i].angle,
    },
    {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.inOut",
        paused: true,
        onComplete: hideExtraCards, // Nasconde le carte extra dopo averle centrate
    });
    // Push new animation to the array
    extraCardsToCenterAnimations.push(extraCardToCenterAnimation);
  }


// ============  Animazioni ventaglio ============

// ===| Pink |===
let pink = gsap.to(".pink-card.cover.main-cover", {
    x: -outer_X,
    y: outer_Y,
    rotate: -outer_deg,
    duration: 1,
    delay: 0.5,
    ease: "back",
    paused: true,
});

// ===| Red |===
let red = gsap.to(".red-card.cover.main-cover", {
    x: -inner_X,
    y: inner_Y,
    rotate: -inner_deg,
    duration: 1,
    delay: 0.5,
    ease: "back",
    paused: true,
});

// ===| Blue |===
let blue = gsap.to(".blue-card.cover.main-cover", {
    x: center_X,
    y: center_Y,
    duration: 1,
    delay: 0.5,
    ease: "back",
    paused: true,
});

// ===| Yellow |===
let yellow = gsap.to(".yellow-card.cover.main-cover", {
    x: inner_X,
    y: inner_Y,
    rotate: inner_deg,
    duration: 1,
    delay: 0.5,
    ease: "back",
    paused: true,
});

// ===| Green |===
let green = gsap.to(".green-card.cover.main-cover", {
    x: outer_X,
    y: outer_Y,
    rotate: outer_deg,
    duration: 1,
    delay: 0.5,
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

// Function to control the animation based on scroll position
function handleScroll() {
    let scrollPosition = window.scrollY;

    
    if (scrollPosition < 500 && animationToCenterComplete == false) {
            // Adjust the animation based on scroll position
            pinkToCenter.progress(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight));
            redToCenter.progress(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight));
            blueToCenter.progress(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight));
            yellowToCenter.progress(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight));
            greenToCenter.progress(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight));
            //Adjust the animation of extra cards based on scroll position
            for (let i = 0; i < extraCardsToCenterAnimations.length; i++) {
                extraCardsToCenterAnimations[i].progress(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight));
            }
    } else {
        centerFan();
    }

    
    
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Funzione che centra le carte nella pagina
function centerFan() {
    pinkToCenter.play();
    redToCenter.play();
    blueToCenter.play();
    yellowToCenter.play();
    greenToCenter.play();
    // Loop che fa partire le animazioni delle carte extra
    for (var i = 0; i < extraCardsToCenterAnimations.length; i++) {
        extraCardsToCenterAnimations[i].play();
    };
}
// Le card extra spariscono
function hideExtraCards() {
    extraCards.forEach(function(card) {
        card.style.opacity = "0";
    });
}

// Funzione che distribuisce le carte a ventaglio nella pagina
function distributeFan() {
    animationToCenterComplete = true;
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
        enterBlue.play(); // Animazione card
        rotateBlue.play(); // Animazione vettore blu
        logoAnimation.goToAndStop(blueLogoKeyframe, true); // Animazione logo blu (stop)
});

blueCard.addEventListener("mouseleave", function() {
    if (overable === true) {
        enterBlue.reverse(); // Animazione card (reverse)
        rotateBlue.reverse(); // Animazione vettore blue (reverse)
        logoAnimation.play(); 
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
    logoAnimation.goToAndStop(yellowLogoKeyframe, true); // Animazione logo giallo (stop)
});
yellowCard.addEventListener("mouseleave", function() {
    enterYellow.reverse();
    rotateYellow.reverse();
    logoAnimation.play(); 
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
    logoAnimation.goToAndStop(greenLogoKeyframe, true); // Animazione logo verde (stop)
});
greenCard.addEventListener("mouseleave", function() {
    enterGreen.reverse();
    rotateGreen.reverse();
    logoAnimation.play(); 
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
    logoAnimation.goToAndStop(redLogoKeyframe, true); // Animazione logo rosso (stop)
});
redCard.addEventListener("mouseleave", function() {
    enterRed.reverse();
    rotateRed.reverse();
    logoAnimation.play(); 
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
    logoAnimation.goToAndStop(pinkLogoKeyframe, true); // Animazione logo pink (stop)
});
pinkCard.addEventListener("mouseleave", function() {
    enterPink.reverse();
    rotatePink.reverse();
    logoAnimation.play(); 
});


// ON CLICK

blueCard.addEventListener("click", function() {
    console.log("Blue was clicked.")
    let blueClicked = gsap.to([".pink-card.cover", ".red-card.cover", ".yellow-card.cover", ".green-card.cover"], {
        opacity: 0,
        y: 9000,
        paused: true,
        duration: 2,
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

// Logo animation

// keyframes
var blueLogoKeyframe = 313;
var greenLogoKeyframe = 32;
var pinkLogoKeyframe = 90;
var yellowLogoKeyframe = 248;
var redLogoKeyframe = 190;
var whiteLogoKeyframe = 136;

var logoAnimation = bodymovin.loadAnimation({
    container: document.getElementById('animatedLogoContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'res/logo/animatedLogo_puntoColorato.json'
});