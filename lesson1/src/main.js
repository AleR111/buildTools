import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";

import { countdown } from "./timer.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value; secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }  else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

const timer = document.getElementById("timer");
const timerResult = document.getElementById("timer__result");

timer.addEventListener("submit", handleTimer);

function handleTimer(event) {
    event.preventDefault();

    let { hour, minutes, seconds } = event.target.elements;
    // hour = hour.value
    // minutes = minutes.value
    // seconds = seconds.value
    let time = `${hour.value}:${minutes.value}:${seconds.value}`

    const timeLeft = countdown(time);
    console.log(time)

}
