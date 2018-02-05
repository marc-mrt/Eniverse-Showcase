// @flow

import React from 'react';
import Dot from './Dot';
import Arrow from './Arrow';
import SliderContainer from '../atoms/SliderContainer';

const Slider = ({
  events,
  goPrev,
  goNext,
  maxNbSlides,
  curNbSlides,
}: {
  events: Array<any>,
  goPrev: Function,
  goNext: Function,
  maxNbSlides: number,
  curNbSlides: number,
}) => (
  <SliderContainer className="content has-text-centered">
    {events.map(event => (
      <Dot
        isActive={event.title === events[curNbSlides].title}
        isTop={false}
        isBlock={false}
        key={event.title}
      />
    ))}
    {curNbSlides > 0 ? <Arrow type="left" onClick={goPrev} /> : false}
    {curNbSlides < maxNbSlides ? <Arrow type="right" onClick={goNext} /> : false}
  </SliderContainer>
);

export default Slider;
