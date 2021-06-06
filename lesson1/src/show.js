const datecalcBox = document.getElementById("datecalc-box");
const timerBox = document.getElementById("timer-box");

const btnDatecalc = document.getElementById("show-datecalc");
const btnTimer = document.getElementById("show-timer");

btnDatecalc.addEventListener("click", showDatecalc);
btnTimer.addEventListener("click", showTimer);

function showDatecalc() {
    console.log(123321)
    datecalcBox.style.display = 'block'
    timerBox.style.display = 'none'
}

function showTimer() {
    console.log(321)
    datecalcBox.style.display = 'none'
    timerBox.style.display = 'block'
}