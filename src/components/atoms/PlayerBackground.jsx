// @flow

import styled from 'styled-components';

const PlayerBackground = styled.div`
  height: 100%;
  width: 100%;
  background: radial-gradient(
  circle,
  rgba(0, 0, 0, 0.1),
  rgba(0, 0, 0, 0.6),
  rgba(0, 0, 0, 0.8)
  ), url('${props => props.bg}') no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
`;

export default PlayerBackground;
