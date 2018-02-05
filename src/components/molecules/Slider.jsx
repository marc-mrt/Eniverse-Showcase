// @flow

import React from 'react';
import Dot from './Dot';

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
  <div className="content has-text-centered">
    {events.map(event => (
      <Dot
        isActive={event.title === events[curNbSlides].title}
        key={event.title}
        style={{ display: 'inline' }}
      />
    ))}
  </div>
);

export default Slider;
