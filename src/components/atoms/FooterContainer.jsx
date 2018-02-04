// @flow

import styled from 'styled-components';

const FooterContainer = styled.div`
  padding-top: 5em;
  &::before {
    content: '';
    width: 100%;
    height: 3px;
    background-color: #2f508e;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 8px;
  }
`;

export default FooterContainer;
