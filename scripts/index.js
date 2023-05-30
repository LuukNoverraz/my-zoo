// let nightValue = 1

// nightBtn.addEventListener('click', siteTime)

// function siteTime() {
//     defaultCanvas0.style.filter = "invert(" + nightValue + ")"
//     if (nightValue == 1) {
//         cover.style.background = "black"
//         cover.style.pointerEvents = "all"
//         nightValue = 0
//         setTimeout(lightsOut, 3000)
//     }
//     else if (nightValue == 0) {
//         cover.style.background = "transparent"
//         cover.style.pointerEvents = "none"
//         nightValue = 1
//     }
// }

// function lightsOut() {
//     siteTime()
// }

let timeOfDay = 12
const clockImage = document.getElementById('clockImage');

setInterval(dayNightCycle, 5000)
clockImage.addEventListener('click', skipTime);

function dayNightCycle() {
    clockText.innerHTML = (timeOfDay < 10 ? "0" + timeOfDay : timeOfDay) + ":00";
    timeOfDay = (timeOfDay < 23 ? timeOfDay + 1 : 0);
}

function skipTime() {
    clockText.innerHTML = (timeOfDay < 10 ? "0" + timeOfDay : timeOfDay) + ":00";
    timeOfDay = (timeOfDay < 23 ? timeOfDay + 1 : 0);
}