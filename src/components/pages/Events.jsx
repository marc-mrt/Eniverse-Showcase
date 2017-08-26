import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Event from './Event';
import Page from '../wrappers/Page';
import interback from '../../assets/images/interback-light.png';

const SuperPage = styled(Page)`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  padding-top: 5em;
  height: 80%;
  width: 100%;
`;

const title = 'Events';
const subtitle = 'blabla the best events.';
const data = [
  {
    title: 'Test event',
    desc: 'An event super duper dope.',
    date: '01-02-1995',
  },
  {
    title: 'Test event 2',
    desc: 'An event super duper dope.',
    date: '01-02-1995',
  },
  {
    title: 'Test event 3',
    desc: 'An event super duper dope.',
    date: '01-02-1995',
  },
];

const Desktop = () =>
  <Carousel axis="horizontal" showStatus={false} showThumbs={false} dynamicHeight emulateTouch>
    {data.map(event => <Event key={event.title} data={event} {...event} />)}
  </Carousel>;

const Touch = () =>
  <div>
    {data.map(event => <Event key={event.title} {...event} />)}
  </div>;

const Events = () =>
  <SuperPage title={title} subtitle={subtitle} background={interback} hasPadding>
    <Wrapper>
      <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
        <Desktop />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <Touch />
      </MediaQuery>
    </Wrapper>
  </SuperPage>;

export default Events;
