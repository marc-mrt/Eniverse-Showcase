// @flow

import React from 'react';
import * as content from '../../contents/What';
import PageSection from '../templates/PageSection';

const What = () => (
  <PageSection id="what" title={content.title} subtitle={content.subtitle} hasPadding />
);

export default What;
