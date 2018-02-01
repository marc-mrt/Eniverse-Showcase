// @flow

import React from 'react';
import HeroSubtitle from '../atoms/HeroSubtitle';
import HeroTitle from '../atoms/HeroTitle';
import HeroLogo from '../atoms/HeroLogo';

const HeroMainTitle = ({
  logo,
  content,
}: {
  logo: any,
  content: { title: string, subtitle: string },
}) => (
  <div className="container has-text-centered">
    <span className="is-hidden-mobile">
      <HeroLogo src={logo} alt={content.title} />
      <span style={{ position: 'relative', bottom: '2em' }}>
        <HeroTitle>{content.title}</HeroTitle>
        <HeroSubtitle>{content.subtitle}</HeroSubtitle>
      </span>
    </span>
    <span className="is-hidden-tablet">
      <img src={logo} alt={content.title} />
      <span style={{ position: 'relative', bottom: '2em' }}>
        <HeroTitle style={{ fontSize: '3em', display: 'block' }}>{content.title}</HeroTitle>
        <HeroSubtitle style={{ fontSize: '1em', margin: '0' }}>{content.subtitle}</HeroSubtitle>
      </span>
    </span>
  </div>
);

export default HeroMainTitle;
