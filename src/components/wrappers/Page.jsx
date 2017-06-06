import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  background: url('${props => props.bg}') no-repeat center center;
  background-attachment: fixed;
  background-size: cover;
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  &::after {
    content: '';
    width: 40px;
    height: 3px;
    background-color: #2f508e;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 8px;
  }
`;

const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  text-transform: uppercase;
  font-size: 2.5em;
  color: rgb(30, 53, 138);
  margin-bottom: .5em;
`;

const Subtitle = styled.h5`
  font-size: 1em;
  font-weight: 500;
  letter-spacing: .01em;
  color: #605f5f;
`;

const Page = ({ children, title, subtitle, background, hasPadding }) => (
  <Background
    bg={background || false}
    style={{ minHeight: '100vh', width: '100%', padding: hasPadding ? '2em' : false }}
  >
    {title
      ? <Wrapper>
        <Title>
          {title}
        </Title>
        {subtitle
            ? <Subtitle>
              {subtitle}
            </Subtitle>
            : false}
      </Wrapper>
      : false}
    {children}
  </Background>
);

Page.propTypes = {
  children: PropTypes.node,
  background: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  hasPadding: PropTypes.bool,
};

Page.defaultProps = {
  children: null,
  background: null,
  title: null,
  subtitle: null,
  hasPadding: false,
};

export default Page;
