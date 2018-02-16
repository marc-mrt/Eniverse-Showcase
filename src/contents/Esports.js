// @flow

import interback from '../assets/images/interback.png';

export const background = interback;
export const videoID = '07Nr2YkjoFI';
export const options = {
  playerVars: {
    rel: 0,
    fs: 0,
    controls: 0,
    showinfo: 0,
    enablejsapi: 1,
    modestbranding: 1,
    iv_load_policy: 3,
  },
};
export const generateMuteButton = (isMuted: boolean) =>
  (isMuted ? 'fas fa-volume-off' : 'fas fa-volume-up');
