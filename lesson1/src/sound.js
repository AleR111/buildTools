import alarmSong from '../sound/sound.mp3'

const {Howl, Howler} = require('howler');

export const sound = new Howl({
    src: [alarmSong]
});