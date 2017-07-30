import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  height: 7vh;
  margin-top: 3em;
`;

const Separator = styled.div`
  height: .5vh;
  position: relative;
  top: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.1), #1e358a, rgba(0, 0, 0, 0.1));
`;

const Content = styled.div`margin-top: 1em;`;

const Comment = styled.p`
  display: inline;
  color: #1e358a;
  font-size: .7em;
  margin-left: .2em;
`;

const Footer = () =>
  <Wrapper>
    <div className="container">
      <Separator />
      <Content className="content has-text-centered">
        <strong>Copyright © 2017 Eniverse</strong>
        <br />
        <Comment>
          Website:&nbsp;
        </Comment>
        <a className="icon" href="https://github.com/marc-mrt/Eniverse-Showcase">
          <i className="fa fa-github" />
        </a>
        <Comment>by Marc Morant</Comment>
      </Content>
    </div>
  </Wrapper>;

export default Footer;
