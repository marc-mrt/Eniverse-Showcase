import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers, withProps } from 'recompose';
import styled from 'styled-components';

const DotShape = ({ isActive, isHovered }) =>
  <svg height="24" width="24">
    <circle
      r="10"
      cx="12"
      cy="12"
      stroke={isHovered ? '#1e358a' : 'black'}
      strokeWidth="2"
      fill={isActive ? '#1e358a' : 'white'}
    />
  </svg>;

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

const Label = styled.p`
  transition: opacity 500ms linear, visibility 250ms linear;
  color: white;
  font-family: 'Anton';
  font-size: 1.5em;
  position: relative;
  top: -4px;
  left: 8px;
  text-shadow: -1px -1px 0 #1e358a, 1px -1px 0 #1e358a, -1px 1px 0 #1e358a, 1px 1px 0 #1e358a;
  text-transform: uppercase;
  display: ${props => (props.isDisplayed ? 'inline' : 'none')};
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
  <div onMouseOver={onOver} onMouseOut={onOut}>
    <DotShape isHovered={isHovered} />
    <Label isDisplayed={isHovered}>
      {name}
    </Label>
  </div>,
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
