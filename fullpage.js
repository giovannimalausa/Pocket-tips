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
    autoplay: false,
    path: '../res/logo/animatedLogo_puntoColorato.json'
});

// Stop the logo animation depending on the page name
var pageName = location.pathname.split("/").slice(-1)
console.log(pageName);
if (pageName == 'green-deck.html') {
    // Stop the animation on greenLogoKeyframe
    logoAnimation.goToAndStop(greenLogoKeyframe, true);
} else if (pageName == 'pink-deck.html') {
    // Stop the animation on pinkLogoKeyframe
    logoAnimation.goToAndStop(pinkLogoKeyframe, true);
} else if (pageName == 'yellow-deck.html') {
    // Stop the animation on yellowLogoKeyframe
    logoAnimation.goToAndStop(yellowLogoKeyframe, true);
} else if (pageName == 'red-deck.html') {
    // Stop the animation on redLogoKeyframe
    logoAnimation.goToAndStop(redLogoKeyframe, true);
} else if (pageName == 'blue-deck.html') {
    // Stop the animation on blueLogoKeyframe
    logoAnimation.goToAndStop(blueLogoKeyframe, true);
}

// Menu animation
let menuButton = document.querySelector('.menu-button');

function showMenuButton() {
    let showMenuAnimation = gsap.fromTo(menuButton, {
        opacity: 0,
        x: 20,
    }, {opacity: 1,
        x: 0,
        duration: 1,
        ease: 'back',
    });
    showMenuAnimation.play();
}
showMenuButton();