import React from 'react';
import styled from 'styled-components';

import Dot from './Dot';

const Wrapper = styled.div`
  height: 100%;
  transform: translateY(40%);
  padding: 1em;
  position: fixed;
  z-index: 100;
`;

const Dots = () =>
  <Wrapper className="is-hidden-mobile">
    <Dot name="Eniverse" route="#eniverse" />
    <Dot name="What we do" route="#what" />
    <Dot name="eSports" route="#esports" />
    <Dot name="Events" route="#events" />
    <Dot name="Partners" route="#partners" />
    <Dot name="Contact us" route="#contact" />
  </Wrapper>;

export default Dots;
