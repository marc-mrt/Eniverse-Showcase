import React from 'react';
import styled from 'styled-components';

import Page from '../wrappers/Page';
import Slides from '../pures/Slides';

const SuperPage = styled(Page)`height: 100%;`;

const title = 'Events';
const subtitle = 'This is our future events';
const events = [
  {
    title: 'University Masters eSports',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget enim neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dignissim nisl ut luctus. Aenean vehicula vestibulum sapien cursus blandit. Nulla fringilla ligula sit amet massa rutrum dictum. Duis vel tellus et quam laoreet congue. Ut eget tristique dui, nec eleifend purus.',
    media: 'https://www.youtube.com/watch?v=l8yh2g3rkww',
  },
  {
    title: 'KEKETTE',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget enim neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dignissim nisl ut luctus. Aenean vehicula vestibulum sapien cursus blandit. Nulla fringilla ligula sit amet massa rutrum dictum. Duis vel tellus et quam laoreet congue. Ut eget tristique dui, nec eleifend purus.',
    media: 'https://www.youtube.com/watch?v=l8yh2g3rkww',
  },
  {
    title: 'HUEHUE',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget enim neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dignissim nisl ut luctus. Aenean vehicula vestibulum sapien cursus blandit. Nulla fringilla ligula sit amet massa rutrum dictum. Duis vel tellus et quam laoreet congue. Ut eget tristique dui, nec eleifend purus.',
    media: 'https://www.youtube.com/watch?v=l8yh2g3rkww',
  },
  {
    title: 'test',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget enim neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum dignissim nisl ut luctus. Aenean vehicula vestibulum sapien cursus blandit. Nulla fringilla ligula sit amet massa rutrum dictum. Duis vel tellus et quam laoreet congue. Ut eget tristique dui, nec eleifend purus.',
    media: 'https://www.youtube.com/watch?v=l8yh2g3rkww',
  },
];

const Events = () => (
  <SuperPage title={title} subtitle={subtitle} hasPadding>
    <Slides data={events} />
  </SuperPage>
);

export default Events;
