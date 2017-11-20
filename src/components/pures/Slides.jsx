/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { compose, withState, withHandlers, withProps, lifecycle } from 'recompose';

import Slide from './Slide';
import Arrow from './Arrow';

const Wrapper = styled.div`
  margin: 5em 20em;
`;

const WrapperMobile = styled.div`
  margin: 1em;
`;

const SlideWrapper = styled.div`
  margin-top: 5em;
`;

const ArrowDiv = styled.div`
  position: relative;
  height: 75vh;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const enhance = compose(
  withState('slider', 'setSlider', {
    current: 0,
    slides: 0,
  }),
  lifecycle({
    componentWillMount() {
      this.props.setSlider(p => ({ ...p, slides: this.props.data.length }));
    },
  }),
  withHandlers({
    goPrev: ({ slider, setSlider }) => () =>
      setSlider(p => ({ ...p, current: slider.current - 1 })),
    goNext: ({ slider, setSlider }) => () =>
      setSlider(p => ({ ...p, current: slider.current + 1 })),
  }),
  withProps(({ slider, data }) => ({
    currentSlide: data[slider.current],
    maxNbSlides: slider.slides,
    curNbSlides: slider.current + 1,
  })),
);

const Slides = enhance(({ data, currentSlide, curNbSlides, maxNbSlides, goPrev, goNext }) => (
  <MediaQuery minDeviceWidth={1224} values={{ deviceWidth: 1600 }}>
    {(matches) => {
      if (matches) {
        return (
          <Wrapper className="columns is-centered">
            <ArrowDiv className="column">
              {curNbSlides > 1 ? (
                <ArrowWrapper>
                  <Arrow type="left" action={goPrev} />
                </ArrowWrapper>
              ) : (
                false
              )}
            </ArrowDiv>
            <SlideWrapper className="column is-8 has-text-centered">
              <Slide key={currentSlide.title} {...currentSlide} />
            </SlideWrapper>
            <ArrowDiv className="column">
              {curNbSlides < maxNbSlides ? (
                <ArrowWrapper>
                  <Arrow type="right" action={goNext} />
                </ArrowWrapper>
              ) : (
                false
              )}
            </ArrowDiv>
          </Wrapper>
        );
      }
      return (
        <WrapperMobile>{data.map(slide => <Slide key={slide.title} {...slide} />)}</WrapperMobile>
      );
    }}
  </MediaQuery>
));

Slides.propTypes = {
  data: PropTypes.array,
  currentSlide: PropTypes.object,
  curNbSlides: PropTypes.number,
  maxNbSlides: PropTypes.number,
  goPrev: PropTypes.func,
  goNext: PropTypes.func,
};

Slides.defaultProps = {
  data: [],
  currentSlide: {},
  curNbSlides: 0,
  maxNbSlides: 0,
  goPrev: () => {},
  goNext: () => {},
};

export default Slides;
