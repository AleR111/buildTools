import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';

export function countdown(time) {
   let currentTime = DateTime.fromISO(time);
    console.log(currentTime)
    currentTime = currentTime.minus({seconds: 1});
    console.log(currentTime)

    setInterval(() => {
        currentTime = currentTime.minus({seconds: 1});
        console.log(currentTime)
    }, 1000)
}