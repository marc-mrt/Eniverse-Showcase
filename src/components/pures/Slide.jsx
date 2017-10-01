import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Box = styled.div`height: 40vh;`;

const Content = styled(Box)`z-index: 10;`;

const Title = styled.div`
  text-transform: uppercase;
  font-family: 'Anton';
  font-size: 1.5em;
`;

const Desc = styled.div`padding: 1em;`;

const Media = styled(Box)`
  position: relative;
  left: -1em;
  bottom: -5em;
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

const Slide = ({ title, desc, media }) => (
  <Wrapper className="columns">
    <Content className="box column is-3">
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Content>
    <Media>
      <Youtube id="player" videoId={media.slice(media.indexOf('?v=') + 3)} opts={opts} />
    </Media>
  </Wrapper>
);

Slide.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  media: PropTypes.string,
};

Slide.defaultProps = {
  title: '',
  desc: '',
  media: '',
};

export default Slide;
