// @flow

import React from 'react';
import { compose, withState, withHandlers, withProps } from 'recompose';
import * as content from '../../contents/Esports';
import PageSection from '../templates/PageSection';
import EsportsPlayer from '../atoms/EsportsPlayer';
import PlayerBackground from '../atoms/PlayerBackground';
import InputPanel from '../atoms/InputPanel';
import InputMainButtonTrigger from '../atoms/InputMainButtonTrigger';
import InputMainButton from '../atoms/InputMainButton';
import InputOptionButton from '../atoms/InputOptionButton';
import InputOptionsArea from '../atoms/InputOptionsArea';

const composition = compose(
  withState('player', 'setPlayer', {
    instance: null,
    ready: false,
    playing: false,
    muted: false,
    state: -1,
  }),
  withHandlers({
    playerEnd: ({ setPlayer }) => () =>
      setPlayer(p => ({
        ...p,
        ready: true,
        playing: false,
        muted: false,
      })),
    playerReady: ({ setPlayer }) => e =>
      setPlayer(p => ({ ...p, ready: true, instance: e.target })),
    playerPlay: ({ setPlayer }) => () => setPlayer(p => ({ ...p, playing: true })),
    playerPause: ({ setPlayer }) => () => setPlayer(p => ({ ...p, playing: false })),
    playerState: ({ setPlayer }) => e => setPlayer(p => ({ ...p, state: e.data })),
    play: ({ player }) => () => (player.instance ? player.instance.playVideo() : false),
    pause: ({ player }) => () => player.instance.pauseVideo(),
    replay: ({ player }) => () => {
      player.instance.stopVideo();
      player.instance.playVideo();
    },
    toggleSound: ({ player, setPlayer }) => () => {
      if (!player.muted) {
        player.instance.mute();
      } else {
        player.instance.unMute();
      }
      setPlayer(p => ({ ...p, muted: !player.muted }));
    },
  }),
  withProps(({ player }) => ({
    isDisplayed: player.state !== 0 && player.state !== -1,
    isPlaying: player.playing,
    isMuted: player.muted,
  })),
);

const Esports = ({
  isDisplayed,
  isPlaying,
  isMuted,
  play,
  pause,
  replay,
  toggleSound,
  playerPlay,
  playerPause,
  playerReady,
  playerEnd,
  playerState,
}: {
  isDisplayed: boolean,
  isPlaying: boolean,
  isMuted: boolean,
  play: Function,
  pause: Function,
  replay: Function,
  toggleSound: Function,
  playerPlay: Function,
  playerPause: Function,
  playerReady: Function,
  playerEnd: Function,
  playerState: Function,
}) => (
  <PageSection id="esports">
    <PlayerBackground className="hero is-fullheight" bg={content.background}>
      <InputPanel>
        {!isPlaying ? (
          <InputMainButtonTrigger>
            <InputMainButton className="icon is-large" onClick={play}>
              <i className="fa fa-play" style={{ fontSize: '3em' }} />
            </InputMainButton>
          </InputMainButtonTrigger>
        ) : (
          <InputMainButtonTrigger isHoverable>
            <InputMainButton className="icon is-large" onClick={pause}>
              <i className="fa fa-pause" style={{ fontSize: '3em' }} />
            </InputMainButton>
          </InputMainButtonTrigger>
        )}
        {isDisplayed ? (
          <InputOptionsArea>
            <InputOptionButton className="icon" onClick={replay}>
              <i className="fa fa-reply" style={{ fontSize: '1.5em' }} />
            </InputOptionButton>
            <InputOptionButton className="icon" onClick={toggleSound}>
              <i className={content.generateMuteButton(isMuted)} style={{ fontSize: '1.5em' }} />
            </InputOptionButton>
          </InputOptionsArea>
        ) : (
          false
        )}
      </InputPanel>
      <EsportsPlayer
        id="esport"
        videoId={content.videoID}
        opts={content.options}
        onEnd={playerEnd}
        onPlay={playerPlay}
        onPause={playerPause}
        onReady={playerReady}
        onStateChange={playerState}
        displayed={isDisplayed}
      />
    </PlayerBackground>
  </PageSection>
);

export default composition(Esports);
