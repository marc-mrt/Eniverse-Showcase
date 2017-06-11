import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from './Navbar';

const Wrapper = styled.div`
  height: auto;
`;

const Layout = ({ children }) =>
  <Wrapper>
    <Navbar />
    {children}
  </Wrapper>;

/* eslint-disable react/forbid-prop-types */
Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
