import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose, withState, withHandlers, withProps } from 'recompose';

import DotShape from './DotShape';

const DotLink = styled(Link)`
  display: block;
`;

// const Label = styled.p`
//   transition: opacity 500ms linear, visibility 500ms linear;
//   color: white;
//   font-family: 'Roboto';
//   font-weight: 500;
//   position: relative;
//   left: 8px;
//   text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;
//   text-transform: uppercase;
//   display: inline;
//   visibility: ${props => (props.isDisplayed ? 'visible' : 'hidden')};
//   opacity: ${props => (props.isDisplayed ? 1 : 0)};
//   margin-bottom: 10px;
// `;

const enhance = compose(
  connect(
    state => ({
      isScrolling: state.isScrollPending,
    }),
    undefined,
  ),
  withState('hover', 'setHover', false),
  withHandlers({
    onOver: ({ setHover }) => () => setHover(true),
    onOut: ({ setHover }) => () => setHover(false),
  }),
  withProps(({ hover, name, location, route }) => ({
    isHovered: hover,
    isHome: name === 'Eniverse',
    isActive: location.hash === route,
    curRoute: location.hash,
  })),
);

const Dot = enhance(
  ({ onOver, onOut, isScrolling, isHovered, isActive, isHome, route, curRoute }) =>
    <DotLink to={isScrolling ? curRoute : route} onMouseOver={onOver} onMouseOut={onOut}>
      <DotShape isHovered={isHovered} isHome={isHome} isActive={isActive} />
    </DotLink>,
);

Dot.propTypes = {
  onOver: PropTypes.func,
  onOut: PropTypes.func,
  isHome: PropTypes.bool,
  isActive: PropTypes.bool,
  isHovered: PropTypes.bool,
  isScrolling: PropTypes.bool,
  name: PropTypes.string,
  route: PropTypes.string,
  curRoute: PropTypes.string,
};

Dot.defaultProps = {
  onOver: () => {},
  onOut: () => {},
  isScrolling: false,
  isHovered: false,
  isActive: false,
  isHome: false,
  name: '',
  route: '',
  curRoute: '',
};

export default withRouter(Dot);
