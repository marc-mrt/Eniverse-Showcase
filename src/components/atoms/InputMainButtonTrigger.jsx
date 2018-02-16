// @flow

import styled from 'styled-components';

const InputMainButtonTrigger = styled.div`
  transform: translate(-50%, -50%);
  position: relative;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 50%;
  transition: opacity 250ms linear;
  opacity: ${props => (props.isHoverable ? 0 : 1)};
  &:hover {
    opacity: 1;
  }
`;

export default InputMainButtonTrigger;
