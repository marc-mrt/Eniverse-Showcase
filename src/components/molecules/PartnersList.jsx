// @flow

import React from 'react';
import PartnersListPartner from './PartnersListPartner';
import PartnersListContainer from '../atoms/PartnersListContainer';

const PartnersList = ({ partners }: { partners: Array<{ img: any, name: string }> }) => (
  <PartnersListContainer className="columns is-multiline is-centered">
    {partners.map(partner => (
      <div className="column is-1" key={partner.img.toString()}>
        <PartnersListPartner partner={partner} />
      </div>
    ))}
  </PartnersListContainer>
);

export default PartnersList;
