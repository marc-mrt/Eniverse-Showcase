import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
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

const animationfadeIn = keyframes`${fadeIn}`;

const AnimatedTitle = styled(TitleWrap)`
  animation: 7.5s ${animationfadeIn};
`;

const Logo = styled.img`
  position: relative;
  top: 2rem;
  right: 2rem;
  border-right: 2px solid white;
  padding-right: 2rem;
`;

const TextBox = styled.span`
  position: relative;
  top: -2rem;
`;

const Title = styled.h1`
  display: inline-block;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 6em;
`;

const Subtitle = styled.h2`
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.25em;
  margin: 0 0 0 20em;
`;

const title = 'eniverse';
const subtitle = 'into the next generation';

const Hero = () => (
  <SuperPage id="hero">
    <Wrapper className="hero is-success is-fullheight">
      <div className="hero-body">
        <AnimatedTitle className="is-hidden-mobile">
          <Logo src={logo} alt={title} />
          <TextBox>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </TextBox>
        </AnimatedTitle>
        <TitleWrap className="is-hidden-tablet">
          <img src={logo} alt={title} />
          <Title style={{ fontSize: '3em', display: 'block' }}>{title}</Title>
          <Subtitle style={{ fontSize: '1em', margin: '0' }}>{subtitle}</Subtitle>
        </TitleWrap>
      </div>
    </Wrapper>
  </SuperPage>
);

export default Hero;
