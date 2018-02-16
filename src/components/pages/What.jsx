// @flow

import React from 'react';
import * as content from '../../contents/What';
import PageSection from '../templates/PageSection';
import WhatCard from '../molecules/WhatCard';

const What = () => (
  <PageSection id="what" title={content.title} subtitle={content.subtitle} hasPadding>
    <div className="columns is-centered" style={{ marginTop: '4em' }}>
      {content.data.map(category => (
        <div className="column is-one-third">
          <h1 className="content has-text-centered title is-large" style={{ fontFamily: 'Anton' }}>
            {category.name.toUpperCase()}
          </h1>
          {category.items.map(item => <WhatCard {...item} />)}
        </div>
      ))}
    </div>
  </PageSection>
);

export default What;
