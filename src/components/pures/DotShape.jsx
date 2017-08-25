import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  transition: all linear 250ms;
  transform: scale(${props => (props.scale ? '1.25' : '1')});
  fill: ${props => (props.isActive ? 'white' : '#1e358a')};
`;

const DotShape = ({ isActive, isHovered, isHome }) =>
  <Svg height="12" width="12" scale={isHovered} isActive={isActive}>
    {isHome
      ? <rect
        y="2.5"
        width="10"
        height="5"
        stroke={isHovered ? '#1e358a' : 'black'}
        strokeWidth={isHovered ? '1' : '.5'}
      />
      : <circle
        r="5"
        cx="6"
        cy="6"
        stroke={isHovered ? '#1e358a' : 'black'}
        strokeWidth={isHovered ? '1' : '.5'}
      />}
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
