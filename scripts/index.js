let nightValue = 1

nightBtn.addEventListener('click', siteTime)

function siteTime() {
    defaultCanvas0.style.filter = "invert(" + nightValue + ")"
    if (nightValue == 1) {
        cover.style.background = "black";
        cover.style.pointerEvents = "all";
        nightValue = 0
        setTimeout(lightsOut, 3000)
    }
    else if (nightValue == 0) {
        cover.style.background = "transparent";
        cover.style.pointerEvents = "none";
        nightValue = 1
    }
}

function lightsOut() {
    siteTime()
}