// @flow

import React from 'react';
import { compose, withState, withProps, lifecycle, withHandlers } from 'recompose';
import Slide from './Slide';
import Slider from './Slider';
import SlidesContainer from '../atoms/SlidesContainer';

const composition = compose(
  withState('slider', 'setSlider', {
    current: 0,
    slides: 0,
  }),
  lifecycle({
    componentWillMount() {
      this.props.setSlider(p => ({ ...p, slides: this.props.events.length - 1 }));
    },
  }),
  withHandlers({
    goPrev: ({ slider, setSlider }) => () =>
      setSlider(p => ({ ...p, current: slider.current - 1 })),
    goNext: ({ slider, setSlider }) => () =>
      setSlider(p => ({ ...p, current: slider.current + 1 })),
  }),
  withProps(({ slider, events }) => ({
    currentSlide: events[slider.current],
    maxNbSlides: slider.slides,
    curNbSlides: slider.current,
  })),
);

const Slides = ({
  events,
  isDesktop,
  currentSlide,
  goPrev,
  goNext,
  maxNbSlides,
  curNbSlides,
}: {
  events: Array<{ title: string, desc: string, media: string }>,
  isDesktop: boolean,
  currentSlide: { title: string, desc: string, media: string },
  goPrev: Function,
  goNext: Function,
  maxNbSlides: number,
  curNbSlides: number,
}) =>
  (isDesktop ? (
    <div>
      <div className="columns is-centered">
        <SlidesContainer className="column is-half">
          <Slide {...currentSlide} desktop key={currentSlide.title} />
        </SlidesContainer>
      </div>
      <Slider
        events={events}
        goPrev={goPrev}
        goNext={goNext}
        maxNbSlides={maxNbSlides}
        curNbSlides={curNbSlides}
      />
    </div>
  ) : (
    <SlidesContainer className="columns is-centered">
      {events.map(event => (
        <Slide className="column" {...event} desktop={false} key={event.title} />
      ))}
    </SlidesContainer>
  ));

export default composition(Slides);
