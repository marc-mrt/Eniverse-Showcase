// @flow

import React from 'react';
import PageSection from '../templates/PageSection';
import interbackLight from '../../assets/images/interback-light.png';
import * as content from '../../contents/Partners';
import * as footerContent from '../../contents/Footer';
import PartnersList from '../molecules/PartnersList';
import PartnersContacts from '../molecules/PartnersContacts';
import Footer from '../molecules/Footer';

const Partners = () => (
  <PageSection
    title={content.title}
    subtitle={content.subtitle}
    background={interbackLight}
    hasPadding
  >
    <PartnersList partners={content.partners} />
    <PartnersContacts />
    <Footer {...footerContent} />
  </PageSection>
);

export default Partners;
