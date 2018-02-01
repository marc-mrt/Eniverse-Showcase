// @flow

import React from 'react';
import SectionBackground from '../atoms/SectionBackground';
import SectionSubtitle from '../atoms/SectionSubtitle';
import SectionTitle from '../atoms/SectionTitle';
import RelativeWrapper from '../atoms/RelativeWrapper';

const PageSection = ({
  children,
  background,
  title,
  subtitle,
  hasPadding,
}: {
  children?: any,
  background?: any,
  title?: string,
  subtitle?: string,
  hasPadding?: boolean,
}) => (
  <SectionBackground
    bg={background}
    style={{ minHeight: '100vh', width: '100%', padding: hasPadding ? '3em' : false }}
  >
    <RelativeWrapper>
      {title ? <SectionTitle>{title}</SectionTitle> : false}
      {subtitle ? <SectionSubtitle>{subtitle}</SectionSubtitle> : false}
      {children}
    </RelativeWrapper>
  </SectionBackground>
);

PageSection.defaultProps = {
  children: null,
  background: null,
  title: '',
  subtitle: '',
  hasPadding: false,
};

export default PageSection;
