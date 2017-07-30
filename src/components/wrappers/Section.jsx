import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Slide } from 'react-full-page';

const Section = ({ children, name }) =>
  <Slide>
    <Element name={name}>
      {children}
    </Element>
  </Slide>;

Section.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

Section.defaultProps = {
  children: {},
  name: '',
};

export default Section;
