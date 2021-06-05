import {DateTime, Duration} from 'https://moment.github.io/luxon/es6/luxon.js';

export function countdown(time) {
    let currentTime = DateTime.fromISO(time);

    const timer = setInterval(() => {
        currentTime = currentTime.minus({seconds: 1});
        console.log(currentTime.c.second)
        if (!(currentTime.c.hour || currentTime.c.minute || currentTime.c.second)) {
            clearInterval(timer);
            console.log('finish')
        }
    }, 1000)

}