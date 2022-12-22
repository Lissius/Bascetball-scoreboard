let scoreGuest = document.getElementById("score-g")
let scoreHome = document.getElementById("score-h")
let countH = 0
let countG = 0
function incrOneHome() {
    countH += 1
    scoreHome.textContent = countH
}
function incrTwoHome() {
    countH = countH + 2
    scoreHome.textContent = countH
}
function incrThreeHome() {
    countH = countH + 3
    scoreHome.textContent = countH
}
function incrOneGuest() {
    countG += 1
    scoreGuest.textContent = countG
}
function incrTwoGuest() {
    countG = countG + 2
    scoreGuest.textContent = countG
}
function incrThreeGuest() {
    countG = countG + 3
    scoreGuest.textContent = countG
}