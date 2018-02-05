// @flow

import styled from 'styled-components';

const HoverCard = styled.div`
  transition: all 500ms linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: color 250ms linear;
  }
`;

export default HoverCard;
