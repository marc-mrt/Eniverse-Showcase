import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Page from '../src/components/wrappers/Page';

storiesOf('Page', module).add('with text', () => (
  <Page title="This is my title" subtitle="I m the subtitle">Hello</Page>
));
