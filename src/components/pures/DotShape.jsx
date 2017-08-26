import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  transition: all linear 250ms;
  transform: scale(${props => (props.isActive || props.scale ? '2' : '1')});
  fill: ${props => (props.isActive ? '#959494' : '#393939')};
`;

const DotShape = ({ isActive, isHovered, isHome }) =>
  <Svg height="6" width="6" scale={isHovered} isActive={isActive}>
    {isHome ? <rect y="2.5" width="5" height="2.5" /> : <circle r="2.5" cx="3" cy="3" />}
  </Svg>;

DotShape.propTypes = {
  isActive: PropTypes.bool,
  isHovered: PropTypes.bool,
  isHome: PropTypes.bool,
};

DotShape.defaultProps = {
  isActive: false,
  isHovered: false,
  isHome: false,
};

export default DotShape;
