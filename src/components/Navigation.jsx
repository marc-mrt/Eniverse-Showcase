// @flow

import React from 'react';
import { Events, scroller } from 'react-scroll';
import { compose, withState, withHandlers, lifecycle, withProps } from 'recompose';
import SideDots from './molecules/SideDots';
import Navbar from './molecules/Navbar';
import * as store from '../store';

const pages = ['hero', 'what', 'esports', 'events', 'partners'];

const composition = compose(
  withProps({
    isDesktop: window.matchMedia('(min-width: 1224px)').matches,
  }),
  withState('scroll', 'setScroll', {
    isScrolling: false,
    touchSensitivity: 5,
    touchStart: 0,
    currentPage: 0,
    pages,
  }),
  withHandlers({
    scrollToPage: ({ setScroll, scroll }) => (pageIndex, isMounting) => {
      if (!scroll.isScrolling) {
        const nextIndex = pageIndex > scroll.pages.length - 1 || pageIndex < 0 ? false : pageIndex;
        if (nextIndex !== false) {
          scroller.scrollTo(scroll.pages[nextIndex], { duration: 500, smooth: 'easeInOutQuint' });
          global.location.hash = `#${scroll.pages[nextIndex]}`;
          setScroll(state => ({ ...state, isScrolling: !isMounting, currentPage: nextIndex }));
        }
      }
      return null;
    },
  }),
  withHandlers({
    onScroll: ({ scrollToPage, scroll }) => (e) => {
      e.preventDefault();
      if ((e.wheelDelta || -e.deltaY || -e.detail) < 0) scrollToPage(scroll.currentPage + 1, false);
      else scrollToPage(scroll.currentPage - 1, false);
    },
    onScrollEnd: ({ setScroll }) => () => setScroll(state => ({ ...state, isScrolling: false })),
    onTouchStart: ({ setScroll }) => (e) => {
      e.preventDefault();
      setScroll(state => ({ ...state, touchStart: e.touches[0].clientY }));
    },
    onTouchMove: ({ scrollToPage, scroll }) => (e) => {
      e.preventDefault();
      if (scroll.touchStart > e.changedTouches[0].clientY + scroll.touchSensitivity) {
        scrollToPage(scroll.currentPage + 1, false);
      } else if (scroll.touchStart < e.changedTouches[0].clientY - scroll.touchSensitivity) {
        scrollToPage(scroll.currentPage - 1, false);
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      if (global.location.hash) {
        this.props.scrollToPage(
          pages.findIndex(page => page === global.location.hash.slice(1)),
          true,
        );
      } else global.location.hash = '#hero';
      if (this.props.isDesktop) {
        document.addEventListener('touchmove', this.props.onTouchMove);
        document.addEventListener('touchstart', this.props.onTouchStart);
        document.addEventListener('wheel', this.props.onScroll);
      }
      Events.scrollEvent.register('end', () => this.props.onScrollEnd());
    },
    componentWillUnmount() {
      if (this.props.isDesktop) {
        document.removeEventListener('touchmove', this.props.onTouchMove);
        document.removeEventListener('touchstart', this.props.onTouchStart);
        document.removeEventListener('wheel', this.props.onScroll);
      }
      Events.scrollEvent.remove('end');
    },
  }),
);

const Navigation = ({
  children,
  isDesktop,
  scrollToPage,
  scroll,
}: {
  children: any,
  isDesktop: boolean,
  scrollToPage: Function,
  scroll: { currentPage: number },
}) => {
  store.setDesktop(isDesktop);
  return isDesktop ? (
    <div>
      <SideDots pages={pages} currentPage={scroll.currentPage} />
      {children}
    </div>
  ) : (
    <div>
      <Navbar scrollToPage={scrollToPage} pages={pages} />
      {children}
    </div>
  );
};

export default composition(Navigation);
