import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import MediaQuery from 'react-responsive';

const Wrapper = styled.div``;

const Box = styled.div`
  height: auto;
  color: black;
  display: block;
  background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0.25) 50%, rgba(30, 53, 138, 0.25));
`;

const Content = styled(Box)`
  min-height: 50vh;
  border-width: 1px;
  border-style: inset;
  border-color: rgb(30, 53, 138) rgb(30, 53, 138) black black;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-family: 'Anton';
  font-size: 1.5em;
`;

const Desc = styled.div`padding: 1em;`;

const Media = styled(Box)`
  background-image: none;
  padding: 0px;
`;

const FitTube = styled(Youtube)`
  width: 100%;
  height: 100%;
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
  <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
    {(matches) => {
      if (matches) {
        return (
          <Wrapper className="columns">
            <Content className="column is-4">
              <Title>{title}</Title>
              <Desc>{desc}</Desc>
            </Content>
            <Media className="column" style={{ padding: '0', margin: '8px 0' }}>
              <FitTube id={media} videoId={media.slice(media.indexOf('?v=') + 3)} opts={opts} />
            </Media>
          </Wrapper>
        );
      }
      return (
        <Wrapper>
          <Content className="column is-4">
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <FitTube id={media} videoId={media.slice(media.indexOf('?v=') + 3)} opts={opts} />
          </Content>
        </Wrapper>
      );
    }}
  </MediaQuery>
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
