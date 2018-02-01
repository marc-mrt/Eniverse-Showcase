// @flow

import styled from 'styled-components';

const SectionBackground = styled.div`
  background: url('${props => props.bg}') no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
`;

export default SectionBackground;
