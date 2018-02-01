// @flow

import React from 'react';
import PageSection from '../templates/PageSection';
import * as content from '../../contents/Partners';
import PartnersListContainer from '../atoms/PartnersListContainer';
import PartnersListPartner from '../molecules/PartnersListPartner';
import interbackLight from '../../assets/images/interback-light.png';

const Partners = () => (
  <PageSection
    title={content.title}
    subtitle={content.subtitle}
    background={interbackLight}
    hasPadding
  >
    <PartnersListContainer className="columns is-multiline is-centered">
      {content.partners.map(partner => (
        <div className="column is-1" key={partner.img.toString()}>
          <PartnersListPartner partner={partner} />
        </div>
      ))}
    </PartnersListContainer>
  </PageSection>
);

export default Partners;
