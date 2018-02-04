// @flow

import styled from 'styled-components';
import Youtube from 'react-youtube';

const EsportsPlayer = styled(Youtube)`
  transition: opacity 500ms linear, visibility 250ms linear;
  width: 100%;
  height: 100vh;
  visibility: ${props => (props.displayed ? 'visible' : 'hidden')};
  opacity: ${props => (props.displayed ? 1 : 0)};
`;

export default EsportsPlayer;
