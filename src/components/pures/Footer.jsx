import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  height: auto;
  margin-top: 3em;
  background-color: rgba(0, 0, 0, 0.25);
`;

const Footer = () =>
  <Wrapper>
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>Copyright © 2016 Eniverse</strong>
        </p>
      </div>
    </div>
  </Wrapper>;

export default Footer;
