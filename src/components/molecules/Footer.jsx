// @flow

import React from 'react';
import FooterContainer from '../atoms/FooterContainer';
import FooterContent from '../atoms/FooterContent';
import FooterText from '../atoms/FooterText';
import FooterIcon from '../atoms/FooterIcon';

const Footer = ({
  copyright,
  comment,
  github,
  githubIcon,
}: {
  copyright: string,
  comment: string,
  github: string,
  githubIcon: string,
}) => (
  <FooterContainer className="container">
    <FooterContent className="content has-text-centered">
      <strong>{copyright}</strong>
      <br />
      <FooterText>{comment}</FooterText>
      <br />
      <FooterIcon className="icon" href={github}>
        <i className={`fab fa-lg ${githubIcon}`} />
      </FooterIcon>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
