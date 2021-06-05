import {DateTime, Duration} from 'https://moment.github.io/luxon/es6/luxon.js';
import { timerResult } from "./main.js";

export function countdown(time) {
    let currentTime = DateTime.fromISO(time);

    const timer = setInterval(() => {
        currentTime = currentTime.minus({seconds: 1});

        if (!(currentTime.c.hour || currentTime.c.minute || currentTime.c.second)) {
            clearInterval(timer);
            timerResult.innerHTML = `<span>Finish</span>`
            return
        }

        timerResult.innerHTML = renderTimer(currentTime)
    }, 1000)

}

function renderTimer(time) {
   return `<span> 
             ${time.hour}:${time.minute}:${time.second}
           </span>`
}

