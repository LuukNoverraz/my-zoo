let timeOfDay = 12

const animalImages = [
    ["../images/xaba_idle.png", "../images/xaba_sleep.png"],
    ["../images/apyr_idle.png", "../images/apyr_sleep.png"],
    ["../images/pinhvin_idle.png", "../images/pinhvin_sleep.png"]
]

const body = document.querySelector("body")

const clockImage = document.querySelector("#clockImage")
const clockTime = document.querySelector("#clockTime")

const xaba = document.querySelector("#xaba")
const apyr = document.querySelector("#apyr")
const pinhvin = document.querySelector("#pinhvin")

setInterval(zooTime, 5000)
clockImage.addEventListener('click', manualClick)

function zooTime() {
    timeOfDay = (timeOfDay < 23 ? timeOfDay + 1 : 0)
    clockText.innerHTML = (timeOfDay < 10 ? "0" + timeOfDay : timeOfDay) + ":00"

    if (timeOfDay >= 22 || timeOfDay <= 6) {
        xaba.src = animalImages[0][1]
        body.style.backgroundImage = "url(../images/pexels-dmytro-kormylets-11650646.png)"
    }
    else {
        xaba.src = animalImages[0][0]
        body.style.backgroundImage = "url(../images/pexels-denys-mikhalevych-12534263.png)"
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

function manualClick() {
    zooTime()

    clockImage.classList.add("clicked")
    setTimeout(() => {
        clockImage.classList.remove("clicked")
    }, 500)
}