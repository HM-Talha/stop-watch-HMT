var hour = document.getElementById("hour");
var mint = document.getElementById("mint");
var sec = document.getElementById("sec");
var mSec = document.getElementById("mSec");

var paraHour = 0;
var paraMint = 0;
var paraSec = 0;
var paraMiliSec = 0;
; var interval;

function timer() {
    paraMiliSec++;
    mSec.innerHTML = paraMiliSec;
    if (paraMiliSec == 100) {
        paraSec++;
        sec.innerHTML = paraSec;
        paraMiliSec = 0;
    } else if (paraSec == 60) {
        paraMint++;
        mint.innerHTML = paraMint;
        paraSec = 0;
    } else if (paraMint == 60) {
        paraHour++;
        hour.innerHTML = paraHour;
        paraMint = 0;
    }
}
var startBtn = document.getElementById("starBtn");


function start() {
    interval = setInterval(timer, 10);
    startBtn.disabled = true;
}

function stop() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function reset() {
    clearInterval(interval)
    hour.innerHTML = 0;
    mint.innerHTML = 0;
    sec.innerHTML = 0;
    mSec.innerHTML = 0;
    startBtn.disabled = false;

}