import '../style/style.scss';
import {diffDates, diffToHtml} from "./datecalc.js";
import {formatError} from "./utils.js";
import {changeBtnStartPause} from "./show.js";

import {countdown, pauseTimer, stopTimer} from "./timer.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let {firstDate, secondDate} = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

const timer = document.getElementById("timer");
export const timerResult = document.getElementById("timer__result");
export const btnStart = document.getElementById("start-timer");
export const btnPause = document.getElementById("pause-timer");
const btnStop = document.getElementById("stop-timer");

timer.addEventListener("submit", (event) => {
    handleTimer(event);
    changeBtnStartPause()
});
btnPause.addEventListener("click", () => {
    pauseTimer();
    changeBtnStartPause()
});
btnStop.addEventListener("click",() => {
    stopTimer();
    changeBtnStartPause('stop')
});

function handleTimer(event) {
    event.preventDefault();
    let {hours, minutes, seconds} = event.target.elements;
    let time = `${hours.value}:${minutes.value}:${seconds.value}`

    if (hours.value || minutes.value || seconds.value) {
        countdown(time);
    } else timerResult.innerHTML = formatError("Установите таймер");

}
