// @flow

import React from 'react';
import PageSection from '../templates/PageSection';
import HeroBackground from '../atoms/HeroBackground';
import VideoBackground from '../atoms/VideoBackground';
import HeroMainTitle from '../molecules/HeroMainTitle';
import * as content from '../../contents/Hero';
import logo from '../../assets/logo.png';
import * as store from '../../store';

const Hero = () => (
  <PageSection id="hero">
    <HeroBackground className="hero is-fullheight">
      <div className="hero-body">
        <HeroMainTitle logo={logo} content={content} />
      </div>
      {store.getDesktop() ? (
        <VideoBackground id="video-background" muted playsInline loop autoPlay>
          <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
        </VideoBackground>
      ) : (
        false
      )}
    </HeroBackground>
  </PageSection>
);

export default Hero;
