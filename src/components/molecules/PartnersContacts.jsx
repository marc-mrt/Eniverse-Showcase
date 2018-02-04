// @flow

import React from 'react';
import GMapsContainer from '../atoms/GMapsContainer';
import PartnersGMaps from './PartnersGMaps';

const PartnersContacts = () => (
  <div className="columns is-centered">
    <div className="column is-one-third">
      <a className="button is-primary is-fullwidth" href="mailto:xyz@mail.com">
        Send us an email !
      </a>
      <div className="content has-text-centered">Hey Infos !</div>
    </div>
    <PartnersGMaps
      containerElement={<GMapsContainer className="column is-one-third" />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>
);

export default PartnersContacts;
