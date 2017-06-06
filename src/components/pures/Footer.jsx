import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  height: auto;
`;

const Footer = () =>
  <Wrapper className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          <strong>Copyright © 2016 Eniverse</strong>
        </p>
      </div>
    </div>
  </Wrapper>;

export default Footer;
