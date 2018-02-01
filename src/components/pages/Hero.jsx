// @flow

import React from 'react';
import PageSection from '../templates/PageSection';
import HeroBackground from '../atoms/HeroBackground';
import HeroMainTitle from '../molecules/HeroMainTitle';
import * as content from '../../contents/Hero';
import logo from '../../assets/logo.png';

const Hero = () => (
  <PageSection id="hero">
    <HeroBackground className="hero is-fullheight">
      <div className="hero-body">
        <HeroMainTitle logo={logo} content={content} />
      </div>
    </HeroBackground>
  </PageSection>
);

export default Hero;
