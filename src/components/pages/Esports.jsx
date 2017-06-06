import React from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { compose, withState, withHandlers, withProps } from 'recompose';

import Page from '../wrappers/Page';
import interback from '../../assets/images/interback.png';

const SuperPage = styled(Page)`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.8)
    ), url('${interback}') no-repeat center center;
    background-attachment: fixed;
    background-size: cover;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
`;

const Player = styled(Youtube)`
  transition: opacity 500ms linear, visibility 250ms linear;
  width: 100%;
  height: 100vh;
  visibility: ${props => (props.displayed ? 'visible' : 'hidden')};
  opacity: ${props => (props.displayed ? 1 : 0)};
`;

const InputPanel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const InputButton = styled.span`
  transition: transform 250ms linear;
  color: white;
  &:hover {
    cursor: pointer;
    transform: scale(2);
  }
`;

const InputMainButtonTrigger = styled.div`
  transform: translate(-50%, -50%);
  position: relative;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 50%;
  transition: opacity 250ms linear;
  opacity: ${props => (props.isHoverable ? 0 : 1)};
  &:hover {
    opacity: 1;
  }
`;

const InputMainButton = styled(InputButton)`
  position: absolute;
  top: 50%;
  left: 47%;
  width: 10vw;
  height: 10vh;
`;

const InputOptionArea = styled.div`
  position: absolute;
  padding: 1.5em 10em;
  right: 0px;
  bottom: 0px;
`;

const InputOptionButton = styled(InputButton)`
  margin-right: 2em;
`;

const opts = {
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
}) =>
  <SuperPage id="hero">
    <Wrapper className="hero is-fullheight">
      <Overlay>
        <InputPanel>
          {!isPlaying
            ? <InputMainButtonTrigger>
              <InputMainButton className="icon is-large" onClick={play}>
                <i className="fa fa-play" style={{ fontSize: '3em' }} />
              </InputMainButton>
            </InputMainButtonTrigger>
            : <InputMainButtonTrigger isHoverable>
              <InputMainButton className="icon is-large" onClick={pause}>
                <i className="fa fa-pause" style={{ fontSize: '3em' }} />
              </InputMainButton>
            </InputMainButtonTrigger>}
          {isDisplayed
            ? <InputOptionArea>
              <InputOptionButton className="icon" onClick={replay}>
                <i className="fa fa-reply" style={{ fontSize: '1.5em' }} />
              </InputOptionButton>
              <InputOptionButton className="icon" onClick={toggleSound}>
                <i
                  className={classNames('fa', isMuted ? 'fa-volume-off' : 'fa-volume-up')}
                  style={{ fontSize: '1.5em' }}
                />
              </InputOptionButton>
            </InputOptionArea>
            : false}
        </InputPanel>
        <Player
          id="player"
          videoId="07Nr2YkjoFI"
          opts={opts}
          onEnd={playerEnd}
          onPlay={playerPlay}
          onPause={playerPause}
          onReady={playerReady}
          onStateChange={playerState}
          displayed={isDisplayed}
        />
      </Overlay>
    </Wrapper>
  </SuperPage>;

Esports.propTypes = {
  isDisplayed: PropTypes.bool,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool,
  play: PropTypes.func,
  pause: PropTypes.func,
  replay: PropTypes.func,
  toggleSound: PropTypes.func,
  playerPlay: PropTypes.func,
  playerPause: PropTypes.func,
  playerReady: PropTypes.func,
  playerEnd: PropTypes.func,
  playerState: PropTypes.func,
};

Esports.defaultProps = {
  isDisplayed: false,
  isPlaying: false,
  isMuted: false,
  play: () => {},
  pause: () => {},
  replay: () => {},
  toggleSound: () => {},
  playerPlay: () => {},
  playerPause: () => {},
  playerReady: () => {},
  playerEnd: () => {},
  playerState: () => {},
};

const addCounting = compose(
  withState('player', 'setPlayer', {
    player: null,
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
    playerReady: ({ setPlayer }) => e => setPlayer(p => ({ ...p, ready: true, player: e.target })),
    playerPlay: ({ setPlayer }) => () => setPlayer(p => ({ ...p, playing: true })),
    playerPause: ({ setPlayer }) => () => setPlayer(p => ({ ...p, playing: false })),
    playerState: ({ setPlayer }) => e => setPlayer(p => ({ ...p, state: e.data })),
    play: ({ player }) => () => player.player.playVideo(),
    pause: ({ player }) => () => player.player.pauseVideo(),
    replay: ({ player }) => () => {
      player.player.stopVideo();
      player.player.playVideo();
    },
    toggleSound: ({ player, setPlayer }) => () => {
      if (!player.muted) {
        player.player.mute();
      } else {
        player.player.unMute();
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
const enhance = compose(addCounting);
const EnhancedComponent = enhance(Esports);

export default EnhancedComponent;
