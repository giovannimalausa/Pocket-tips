// Variabili

let angoloRotazione = 45;

// MAIN CARDS
let blueCard = document.querySelector(".blue-card.cover.main-cover");
let yellowCard = document.querySelector(".yellow-card.cover.main-cover");
let greenCard = document.querySelector(".green-card.cover.main-cover");
let redCard = document.querySelector(".red-card.cover.main-cover");
let pinkCard = document.querySelector(".pink-card.cover.main-cover");

const mainCards_blue = [blueCard, yellowCard, greenCard, redCard, pinkCard];
let overable = true; 


    let pink = gsap.to(".pink-card.cover.main-cover", {
        x: '-260px',
        y: 50,
        rotate: -40,
        duration: 1,
        ease: "back",
    });
    
    let red = gsap.to(".red-card.cover.main-cover", {
        x: '-140px',
        y: '-20',
        rotate: -20,
        duration: 1,
        ease: "back"
    });
    
    let blue = gsap.to(".blue-card.cover.main-cover", {
        x: 0,
        y: -40,
        duration: 1,
        ease: "back"
    });
    
    let yellow = gsap.to(".yellow-card.cover.main-cover", {
        x: '140px',
        y: '-20',
        rotate: 20,
        duration: 1,
        ease: "back"
    });
    
    let green = gsap.to(".green-card.cover.main-cover", {
        x: '260px',
        y: 50,
        rotate: 40,
        duration: 1,
        ease: "back"
    });

    pink.delay(1);
    red.delay(1);
    green.delay(1);
    blue.delay(1);
    yellow.delay(1);



// BLUE
let enterBlue = gsap.to(blueCard, { // Animazione card blu
    paused: true,
    y: -100,
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

    // function hideCards() {
    //     mainCards_blue.forEach((element) => {
    //         element.classList.add('hidden-card');
    //     });
    // }

    let blueScaleUp = gsap.to(blueCard, {
        scale: 1.75,
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
    setTimeout(window.location.href = "blue-deck CSS.html", 1000);
    console.log("Cambio pagina")
    
}