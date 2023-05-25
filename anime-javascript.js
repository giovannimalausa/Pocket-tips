var i = 0;

let isTriggerEnabledA = true;
let isTriggerEnabledB = true;

// 5 Green card
anime({
    targets: ".green-card.cover",
    translateX: 225,
    translateY: 50,
    rotateZ: 40,
    duration: 3000,
    delay: 500,
    loop: false,
})

// 4 Yellow card
anime({
    targets: ".yellow-card.cover",
    translateX: 135,
    translateY: -25,
    rotateZ: 20,
    duration: 3000,
    delay: 500,
    loop: false,
})

// 3 Blue card
anime({
    targets: ".blue-card.cover",
    translateX: 0,
    translateY: -50,
    rotateZ: 0,
    duration: 3000,
    delay: 500,
    loop: false,
})

// 2 Red card
anime({
    targets: ".red-card.cover",
    translateX: -135,
    translateY: -25,
    rotateZ: -20,
    duration: 3000,
    delay: 500,
    loop: false,
})

// 1 Pink card
anime({
    targets: ".pink-card.cover",
    translateX: -220,
    translateY: 25,
    rotateZ: -40,
    duration: 3000,
    delay: 500,
    loop: false,
})

function moveBlue() {

    if(isTriggerEnabledA === true) {

        anime({
            targets: ".blue-card.cover",
            translateY: '-=40',
            duration: 500,
        })

        isTriggerEnabledA = false;

        setTimeout(() => {
          isTriggerEnabledA = true;
        }, 200);

    }

   
}

function resetBlue() {

    if(isTriggerEnabledB === true) {

        anime({
            targets: ".blue-card.cover",
            translateY: '+=40',
            duration: 500,
        })
    
        isTriggerEnabledB = false;

        setTimeout(() => {
          isTriggerEnabledB = true;
        }, 200);

    }
}