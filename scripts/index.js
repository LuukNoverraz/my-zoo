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