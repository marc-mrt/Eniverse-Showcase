import React from 'react';
import styled from 'styled-components';

import Page from '../wrappers/Page';
import headback from '../../assets/images/headback.png';
import logo from '../../assets/logo.png';

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
    ), url('${headback}') no-repeat center center;
    background-attachment: fixed;
    background-size: cover;
`;

const TitleWrap = styled.div`
  width: inherit;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.img`
  position: relative;
  top: 2rem;
  right: 2rem;
`;

const Title = styled.h1`
  display: inline-block;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 7em;
`;

const Subtitle = styled.h2`
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.25em;
  margin: 0 0 0 22.5em;
`;

const title = 'eniverse';
const subtitle = 'into the next generation';

const Hero = () => (
  <SuperPage id="hero">
    <Wrapper className="hero is-success is-fullheight">
      <div className="hero-body">
        <TitleWrap className="is-hidden-mobile">
          <Logo src={logo} alt={title} />
          <Title>
            {title}
          </Title>
          <Subtitle style={{ color: 'grey' }}>
            {subtitle}
          </Subtitle>
        </TitleWrap>
        <TitleWrap className="is-hidden-tablet">
          <img src={logo} alt={title} />
          <Title style={{ fontSize: '3em', display: 'block' }}>
            {title}
          </Title>
          <Subtitle style={{ color: 'grey', fontSize: '1em', margin: '0' }}>
            {subtitle}
          </Subtitle>
        </TitleWrap>
      </div>
    </Wrapper>
  </SuperPage>
);

export default Hero;
