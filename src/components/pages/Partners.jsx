// @flow

import React from 'react';
import PageSection from '../templates/PageSection';
import * as content from '../../contents/Partners';
import * as footerContent from '../../contents/Footer';
import PartnersList from '../molecules/PartnersList';
import PartnersContacts from '../molecules/PartnersContacts';
import Footer from '../molecules/Footer';

const Partners = () => (
  <PageSection
    id="partners"
    title={content.title}
    subtitle={content.subtitle}
    background={content.background}
    hasPadding
  >
    <PartnersList partners={content.partners} />
    <PartnersContacts />
    <Footer {...footerContent} />
  </PageSection>
);

export default Partners;
