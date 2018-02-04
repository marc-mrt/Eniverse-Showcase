// @flow

import styled from 'styled-components';

const SvgDot = styled.svg`
  transition: all linear 250ms;
  transform: scale(2);
  fill: ${props => (props.isActive ? '#959494' : '#393939')};
  display: block;
  margin-bottom: 8px;
`;

export default SvgDot;
