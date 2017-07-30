import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, withProps } from 'recompose';
import styled from 'styled-components';

const Svg = styled.svg`
  transition: all linear 250ms;
  transform: scale(${props => (props.scale ? '1.35' : '1')}) rotate(${props => (props.scale ? '45deg' : '0deg')});
`;

const DotShape = ({ isActive, isHovered }) =>
  <Svg height="24" width="24" scale={isHovered}>
    <rect
      width="20"
      height="20"
      cx="12"
      cy="12"
      stroke={isHovered ? '#1e358a' : 'black'}
      strokeWidth="2"
      fill={isActive ? '#1e358a' : 'white'}
    />
  </Svg>;

DotShape.propTypes = {
  isActive: PropTypes.bool,
  isHovered: PropTypes.bool,
};

DotShape.defaultProps = {
  isActive: false,
  isHovered: false,
};

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

const Container = styled.div`cursor: pointer;`;

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
  withProps(({ hover }) => ({
    isHovered: hover,
  })),
);

const Dot = enhance(({ onOver, onOut, isHovered, name }) =>
  <Container onMouseOver={onOver} onMouseOut={onOut}>
    <DotShape isHovered={isHovered} />
    <Label isDisplayed={isHovered}>
      {name}
    </Label>
  </Container>,
);

Dot.propTypes = {
  onOver: PropTypes.func,
  onOut: PropTypes.func,
  isHovered: PropTypes.bool,
  name: PropTypes.string,
};

Dot.defaultProps = {
  onOver: () => {},
  onOut: () => {},
  isHovered: false,
  name: '',
};

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

const Wrapper = styled.div`
  height: 100%;
  transform: translateY(40%);
  padding: 1em;
  position: fixed;
  z-index: 100;
`;

const Dots = () =>
  <Wrapper className="is-hidden-mobile">
    <Dot name="Eniverse" />
    <Dot name="What we do" />
    <Dot name="eSports" />
    <Dot name="Partners" />
    <Dot name="Contact us" />
  </Wrapper>;

export default Dots;
