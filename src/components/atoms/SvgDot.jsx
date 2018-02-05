// @flow

import styled from 'styled-components';

const SvgDot = styled.svg`
  transition: all linear 250ms;
  transform: scale(2);
  fill: ${props => (props.isActive ? '#959494' : '#393939')};
  display: ${props => (props.isBlock ? 'block' : 'inline')};
  margin-bottom: ${props => (props.isBlock ? '8px' : '0')};
  margin-right: ${props => (props.isBlock ? '0' : '8px')}
`;

export default SvgDot;
