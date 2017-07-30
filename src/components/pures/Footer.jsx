import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  height: 7vh;
  margin-top: 3em;
`;

const Container = styled.div`
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

const Content = styled.div`margin-top: 1em;`;

const Comment = styled.p`
  display: inline;
  color: #1e358a;
  font-size: .7em;
  margin-left: .2em;
`;

const Footer = () =>
  <Wrapper>
    <Container className="container">
      <Content className="content has-text-centered">
        <strong>Copyright © 2017 Eniverse</strong>
        <br />
        <Comment>Website:&nbsp;</Comment>
        <a className="icon" href="https://github.com/marc-mrt/Eniverse-Showcase">
          <i className="fa fa-github" />
        </a>
        <Comment>by Marc Morant</Comment>
      </Content>
    </Container>
  </Wrapper>;

export default Footer;
