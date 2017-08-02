import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

const Section = ({ children, name }) =>
  <Element name={name}>
    {children}
  </Element>;

Section.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

Section.defaultProps = {
  children: {},
  name: '',
};

export default Section;
