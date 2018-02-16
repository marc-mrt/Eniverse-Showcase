// @flow

import styled from 'styled-components';

const PartnersListImage = styled.img`
  transition: all 250ms linear;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;

export default PartnersListImage;
