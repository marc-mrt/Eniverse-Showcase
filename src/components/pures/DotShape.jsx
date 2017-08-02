import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from '../../assets/logo-stroke.png';
import logoActive from '../../assets/logo-active.png';

const Svg = styled.svg`
  transition: all linear 250ms;
  transform: scale(${props => (props.scale ? '1.35' : '1')});
  fill: ${props => (props.isActive ? '#1e358a' : 'white')};
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  transition: all linear 250ms;
  transform: scale(${props => (props.scale ? '1.35' : '1')});
`;

const DotShape = ({ isActive, isHovered, isHome }) =>
  <span>
    {isHome
      ? <Image src={isActive ? logoActive : logo} alt="logo" scale={isHovered} />
      : <Svg height="24" width="24" scale={isHovered} isActive={isActive}>
        <circle r="10" cx="12" cy="12" stroke={isHovered ? '#1e358a' : 'black'} strokeWidth="2" />
      </Svg>}
  </span>;

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
