const {DateTime} = require('luxon');
import {timerResult} from "./main.js";
import {sound} from "./sound.js"

let currentTime = null;
let timer = null

export function countdown(time) {
    clearInterval(timer);
    if (!currentTime) currentTime = DateTime.fromISO(time);
    timer = setInterval(startCountdown, 1000)
}

function startCountdown() {

    currentTime = currentTime.minus({seconds: 1});

    if (!(currentTime.c.hour || currentTime.c.minute || currentTime.c.second)) {
        clearInterval(timer);
        sound.play();
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

export function pauseTimer() {
    console.log(123)
    clearInterval(timer);
}

export function stopTimer() {
    currentTime = 0
    clearInterval(timer);
}