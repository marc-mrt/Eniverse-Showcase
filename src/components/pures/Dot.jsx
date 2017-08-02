import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { compose, withState, withHandlers, withProps } from 'recompose';

import DotShape from './DotShape';

const DotLink = styled(Link)`
  display: block;
`;

const Label = styled.p`
  transition: opacity 500ms linear, visibility 500ms linear;
  color: white;
  font-family: 'Anton';
  font-size: 1.5em;
  position: relative;
  top: -4px;
  left: 8px;
  text-shadow: -2px -2px 0 #1e358a, 2px -2px 0 #1e358a, -2px 2px 0 #1e358a, 2px 2px 0 #1e358a;
  text-transform: uppercase;
  display: inline;
  visibility: ${props => (props.isDisplayed ? 'visible' : 'hidden')};
  opacity: ${props => (props.isDisplayed ? 1 : 0)};
`;

const enhance = compose(
  withState('hover', 'setHover', false),
  withHandlers({
    onOver: ({ setHover }) => () => setHover(true),
    onOut: ({ setHover }) => () => setHover(false),
  }),
  withProps(({ hover, name, location, route }) => ({
    isHovered: hover,
    isHome: name === 'Eniverse',
    isActive: location.hash === route,
  })),
);

const Dot = enhance(({ onOver, onOut, isHovered, isActive, isHome, name, route }) =>
  <DotLink to={route} onMouseOver={onOver} onMouseOut={onOut}>
    <DotShape isHovered={isHovered} isHome={isHome} isActive={isActive} />
    <Label isDisplayed={isHovered}>
      {name}
    </Label>
  </DotLink>,
);

Dot.propTypes = {
  onOver: PropTypes.func,
  onOut: PropTypes.func,
  isHome: PropTypes.bool,
  isActive: PropTypes.bool,
  isHovered: PropTypes.bool,
  name: PropTypes.string,
  route: PropTypes.string,
};

Dot.defaultProps = {
  onOver: () => {},
  onOut: () => {},
  isHovered: false,
  isActive: false,
  isHome: false,
  name: '',
  route: '',
};

export default withRouter(Dot);
