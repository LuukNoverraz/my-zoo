// Gebruikte bronnen
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

// Tijd op de site begint bij 12 uur 's middags, tijd op de site verschuift elke 5 seconden
let timeOfDay = 12
let dayLength = 5000

// "Twee-dimensionale" array van de dieren en hun sprites
const animalImages = [
    ["images/xaba_idle.png", "images/xaba_sleep.png", "images/xaba_shocked.png"],
    ["images/apyr_idle.png", "images/apyr_sleep.png", "images/apyr_shocked.png"],
    ["images/pinhvin_idle.png", "images/pinhvin_sleep.png", "images/pinhvin_shocked.png"]
]

const body = document.querySelector("body")
const cover = document.querySelector("#cover")

const clockImage = document.querySelector("#clock-image")
const clockText = document.querySelector("#clock-text")

const animals = document.querySelectorAll('.animal');

const xaba = document.querySelector("#xaba")
let xabaTimeout

const apyr = document.querySelector("#apyr")
let apyrTimeout

const pinhvin = document.querySelector("#pinhvin")
let pinhvinTimeout

setInterval(zooTime, dayLength)

clockImage.addEventListener('click', manualClick)

// Roep de wakeUp functie aan als er op de dieren wordt geklikt, dier wordt als parameter meegegeven
xaba.addEventListener('click', function() {
    wakeUp('xaba')
})
  
apyr.addEventListener('click', function() {
    wakeUp('apyr')
})
  
pinhvin.addEventListener('click', function() {
    wakeUp('pinhvin')
})

const normalText = document.querySelector("#normal-text")
const blackoutText = document.querySelector("#blackout-text")
let blackoutTimeout
let blackoutCount = 0

// Voegt een eventlistener toe voor de keyboard event 'keydown' met parameter event. 
// Als event (oftewel gedrukte toets) de tekenreeks 'Space' is wordt  de blackout functie geroepen.
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        // preventDefault zorgt ervoor dat de spatietoets de website niet scrollt (het 'default' gedrag)
        event.preventDefault()
        blackout()
    }
  })

function zooTime() {
    // Ternary operator zorgt voor simpelere if else
    timeOfDay = (timeOfDay < 23 ? timeOfDay + 1 : 0)
    clockText.innerHTML = (timeOfDay < 10 ? "0" + timeOfDay : timeOfDay) + ":00"

    if (timeOfDay >= 22 || timeOfDay <= 6) {
        xaba.src = animalImages[0][1]
        body.style.backgroundImage = "url(images/pexels-dmytro-kormylets-11650646.png)"
    }
    else {
        xaba.src = animalImages[0][0]
        body.style.backgroundImage = "url(images/pexels-denys-mikhalevych-12534263.png)"
    }

    if (timeOfDay >= 19 || timeOfDay <= 7) {
        apyr.src = animalImages[1][1]
    }
    else {
        apyr.src = animalImages[1][0]
    }

    if (timeOfDay >= 1 && timeOfDay <= 10) {
        pinhvin.src = animalImages[2][1]
    }
    else {
        pinhvin.src = animalImages[2][0]
    }
}

function wakeUp(animal) {
    if (animal == 'xaba') {
        xaba.src = animalImages[0][2]
        
        clearTimeout(xabaTimeout)
        xabaTimeout = setTimeout(function() {
            if (timeOfDay >= 22 || timeOfDay <= 6) {
                xaba.src = animalImages[0][1]
            }
            else {
                xaba.src = animalImages[0][0]
            }
        }, 1000)
    }
    
    else if (animal == 'apyr') {
        apyr.src = animalImages[1][2]
        apyr.parentNode.parentNode.style.backgroundColor = "#1D0A1B"
        
        clearTimeout(apyrTimeout)
        apyrTimeout = setTimeout(function() {
            apyr.parentNode.parentNode.style.backgroundColor = "#fff"
            if (timeOfDay >= 19 || timeOfDay <= 7) {
                apyr.src = animalImages[1][1]
            }
            else {
                apyr.src = animalImages[1][0]
            }
        }, 1000)
    }

    else if (animal == 'pinhvin') {
        pinhvin.src = animalImages[2][2]
        
        clearTimeout(pinhvinTimeout)
        pinhvinTimeout = setTimeout(function() {
            if (timeOfDay >= 1 && timeOfDay <= 10) {
                pinhvin.src = animalImages[2][1]
            }
            else {
                pinhvin.src = animalImages[2][0]
            }
        }, 1000)
    }
}

// Roept de tijdsverschuiving zelf aan, zorgt ervoor dat de klok 'clicked' animatie kan uitspelen
function manualClick() {
    zooTime()

    clockImage.classList.add("clicked")
    setTimeout(() => {
        clockImage.classList.remove("clicked")
    }, 500)
}

function blackout() {
    cover.style.backgroundColor = "#1D0A1B"
    cover.style.pointerEvents = "all"

    clearTimeout(blackoutTimeout)

    blackoutTimeout = setTimeout(function() {
        // Variabele blackoutCount wordt met modulo gebruikt om bij te houden wat moet gebeuren na de blackout
        blackoutCount++
        cover.style.backgroundColor = "transparent"
        cover.style.pointerEvents = "none"
        
        if (blackoutCount % 2 == 1) {
            normalText.style.display = "none"
            blackoutText.style.display = "block"
            
            animals.forEach(animal => {
                animal.style.display = "none"
            })
        }
        
        else if (blackoutCount % 2 == 0) {
            normalText.style.display = "block"
            blackoutText.style.display = "none"

            animals.forEach(animal => {
                animal.style.display = "block"
            })
        }
    }, 2000)
}