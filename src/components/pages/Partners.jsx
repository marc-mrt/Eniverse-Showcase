// @flow

import React from 'react';
import PageSection from '../templates/PageSection';
import * as content from '../../contents/Partners';
import PartnersList from '../molecules/PartnersList';
import interbackLight from '../../assets/images/interback-light.png';

const Partners = () => (
  <PageSection
    title={content.title}
    subtitle={content.subtitle}
    background={interbackLight}
    hasPadding
  >
    <PartnersList partners={content.partners} />
  </PageSection>
);

export default Partners;
