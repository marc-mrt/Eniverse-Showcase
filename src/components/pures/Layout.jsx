import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Scroll from 'react-scroll';

const Wrapper = styled.div`
  height: auto;
`;

const ScrollTrigger = styled.div`
  background-image: linear-gradient( 0deg, black, transparent, transparent );
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5vh;
  &:hover {
    background-image: linear-gradient( 0deg, black, black, transparent );
  }
`;

const Layout = ({ children }) => (
  <Wrapper>
    {children}
    <ScrollTrigger onClick={() => Scroll.animateScroll.scrollToBottom()} />
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
