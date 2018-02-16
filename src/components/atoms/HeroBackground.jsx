// @flow

import styled from 'styled-components';
import headback from '../../assets/images/headback.png';

const HeroBackground = styled.section`
  height: 100%;
  width: 100%;
  background: radial-gradient(
  circle,
  rgba(0, 0, 0, 0.1),
  rgba(0, 0, 0, 0.6),
  rgba(0, 0, 0, 0.8)
  ), url('${headback}') no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
  z-index: -101;
  position: relative;
  overflow-y: hidden;
`;

export default HeroBackground;
