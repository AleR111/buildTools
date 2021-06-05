import {DateTime, Duration} from 'https://moment.github.io/luxon/es6/luxon.js';
import {timerResult} from "./main.js";

let currentTime = null;
let timer = null

export function countdown(time) {
    if (!currentTime) currentTime = DateTime.fromISO(time);
    timer = setInterval(startCountdown, 1000)
}

function startCountdown() {

    currentTime = currentTime.minus({seconds: 1});

    if (!(currentTime.c.hour || currentTime.c.minute || currentTime.c.second)) {
        clearInterval(timer);
        timerResult.innerHTML = `<span>Finish</span>`
        return
    }

    timerResult.innerHTML = renderTimer(currentTime)
}

function renderTimer(time) {
    return `<span> 
             ${time.hour}:${time.minute}:${time.second}
           </span>`
}

export function stopTimer() {
    console.log(123)
    clearInterval(timer);
}
