import alarmSong from '../sound/sound.mp3'

import {Howl} from 'howler/dist/howler.core.min';

export const sound = new Howl({
    src: [alarmSong]
});