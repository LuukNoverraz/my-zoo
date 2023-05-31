let timeOfDay = 12

const clockImage = document.querySelector('#clockImage');
const clockTime = document.querySelector('#clockTime');

setInterval(zooTime, 5000)
clockImage.addEventListener('click', zooTime);

function zooTime() {
    clockText.innerHTML = (timeOfDay < 10 ? "0" + timeOfDay : timeOfDay) + ":00";
    timeOfDay = (timeOfDay < 23 ? timeOfDay + 1 : 0);
}