// @flow

import React from 'react';
import PartnersListItem from '../atoms/PartnersListItem';
import PartnersListImage from '../atoms/PartnersListImage';

const PartnersListPartner = ({ partner }: { partner: { img: any, name: string } }) => (
  <PartnersListItem>
    <figure className="image is-1by1">
      <PartnersListImage src={partner.img} alt={partner.name} />
    </figure>
  </PartnersListItem>
);

export default PartnersListPartner;
