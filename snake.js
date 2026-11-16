let time = 0;
let timeLoop = null;

function updateTime() {
    time++;
    document.getElementById("time").textContent =time;
}

function startGame() {
    time = 0;
    timeLoop = setInterval(updateTime, 1000);
}

function endGame() {
    clearInterval(timeLoop);
    timeLoop = null;
}

function handlekeyPres(e) {
    const key = e.key

    if (key.startsWith("Arrow") && timeLoop === null) {
        startGame();
    }

    if (key === "ArrowDown") {

    }
}

document.addEventListener("keydown", handlekeyPres)