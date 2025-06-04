var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubbles() {
    var clutter = "";

    for (var i = 1; i <= 108; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.getElementById("pbtm").innerHTML = clutter;
}

function runTimer() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.getElementById("timeval").textContent = timer;
        } else {
            document.getElementById("hitval").textContent = `-`;
            document.getElementById("pbtm").innerHTML = `<h1>Game Over</h1>`;
            clearInterval(timeint);
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.getElementById("hitval").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.getElementById("scoreval").textContent = score
}

document.getElementById("pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);

    if (clickednum == hitrn) {
        increaseScore();
        getNewHit();
        makeBubbles();
    };
});

getNewHit();
runTimer();
makeBubbles();