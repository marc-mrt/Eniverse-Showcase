import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { enableScroll, disableScroll } from '../../actions';
import animatedScrollTo from '../../utils/animatedScrollTo';

class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);

    this.scrollPending = false;
    this.slides = [];
    this.slidesCount = 5;
    this.touchSensitivity = 5;
    this.touchStart = 0;

    this.state = {
      activeSlide: this.getSlideFromHash(this.props.location.hash),
    };
  }

  componentDidMount() {
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchstart', this.onTouchStart);
    document.addEventListener('wheel', this.onScroll);
    window.addEventListener('resize', this.onResize);

    this.onResize();
  }

  componentWillUnmount() {
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchstart', this.onTouchStart);
    document.removeEventListener('wheel', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  componentDidUpdate() {
    const hash = this.props.location.hash;
    if (hash) {
      let activeSlide = this.state.activeSlide;
      activeSlide = this.getSlideFromHash(hash);
      this.scrollToSlide(activeSlide);
    }
  }

  getSlideFromHash(hash) {
    switch (hash) {
      case '#eniverse':
        return 0;
      case '#what':
        return 1;
      case '#esports':
        return 2;
      case '#partners':
        return 3;
      case '#contact':
        return 4;
      default:
    }
  }

  getHashFromSlide(slide) {
    switch (slide) {
      case 0:
        return '#eniverse';
      case 1:
        return '#what';
      case 2:
        return '#esports';
      case 3:
        return '#partners';
      case 4:
        return '#contact';
      default:
    }
  }

  onResize() {
    this.slides = [];

    for (let i = 0; i < this.slidesCount; i++) {
      this.slides.push(window.innerHeight * i);
    }

    this.setState({
      height: window.innerHeight,
    });
  }

  scrollToSlide(slide) {
    if (!this.scrollPending) {
      this.setState({
        activeSlide: slide,
      });

      this.scrollPending = true;
      this.props.enableScrollPending();
      animatedScrollTo(this.slides[slide], 500, () => {
        this.props.disableScrollPending();
        this.scrollPending = false;
      });
    }
  }

  onTouchStart(e) {
    this.touchStart = e.touches[0].clientY;
  }

  onTouchMove(evt) {
    evt.preventDefault();
    const touchEnd = evt.changedTouches[0].clientY;

    if (!this.scrollPending) {
      if (this.touchStart > touchEnd + this.touchSensitivity) {
        this.scrollToSlide(this.state.activeSlide + 1);
      } else if (this.touchStart < touchEnd - this.touchSensitivity) {
        this.scrollToSlide(this.state.activeSlide - 1);
      }
    }
  }

  onScroll(e) {
    e.preventDefault();
    if (this.scrollPending) {
      return false;
    }

    const scrollDown = (e.wheelDelta || -e.deltaY || -e.detail) < 0;
    let activeSlide = this.state.activeSlide;

    if (scrollDown) {
      activeSlide++;
    } else {
      activeSlide--;
    }

    if (activeSlide >= 0 && activeSlide < this.slidesCount) {
      this.props.history.push(this.getHashFromSlide(activeSlide));
    }
  }

  render() {
    return (
      <div style={{ height: this.state.height }}>
        {this.props.children}
      </div>
    );
  }
}

Desktop.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapDispatchToProps = dispatch => ({
  enableScrollPending: () => dispatch(enableScroll()),
  disableScrollPending: () => dispatch(disableScroll()),
});

export default connect(undefined, mapDispatchToProps)(withRouter(Desktop));
