// @flow

import React from 'react';
import * as content from '../../contents/Events';
import * as store from '../../store';
import Slides from '../molecules/Slides';
import PageSection from '../templates/PageSection';

const Events = () => (
  <PageSection id="events" title={content.title} subtitle={content.subtitle} hasPadding>
    <Slides events={content.events} isDesktop={store.getDesktop()} />
  </PageSection>
);

export default Events;
