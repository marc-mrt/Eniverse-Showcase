import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

import Page from '../wrappers/Page';

const SuperPage = styled(Page)`height: 100%;`;

const Wrapper = styled.div`width: 100%;`;

const Box = styled.div`
  height: auto;
  color: black;
  display: block;
`;

const Category = styled(Box)`text-align: center;`;

const CaTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  color: rgb(30, 53, 138);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  margin-top: 1em;
`;

const Item = styled.div`
  transition: all 500ms linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: color 250ms linear;
    .notification {
      background-color: rgb(30, 53, 138);
      transition: background-color 250ms linear;
      &::after {
        color: rgb(30, 53, 138);
        transition: color 250ms linear;
      }
    }
    .itemTitle {
      color: rgb(30, 53, 138);
      transition: color 250ms linear;
    }
    .itemDesc {
      color: rgb(30, 53, 138);
      transition: color 250ms linear;
    }
  }
`;

const ItemTitle = styled.h3`
  display: inline;
  font-family: 'Anton', sans-serif;
  color: black;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 1.5em;
`;

const ItemDesc = styled.p`
  text-align: center;
  font-size: 1.2em;
  padding-left: 1em;
  padding-right: 1em;
  color: rgba(0, 0, 0, 0);
`;

const ItemIcon = styled.i`
  margin-top: 0.35em;
  margin-right: 0.5em;
`;

const title = 'We connect brands with millenials';
const subtitle =
  'eSports are an innovative communication medium to build deep emotional bonding between a brand and its audience';
const data = [
  {
    name: 'for brands',
    items: [
      {
        title: 'Brand Consulting',
        subtitle:
          'We can advise on how to best position yourself in the eSports industry thanks to our expertise and first-hand insights.',
        icon: 'fa-bullhorn',
      },
      {
        title: 'Sponsorship',
        subtitle:
          'Get in front of your audience. Partner with the best organisations, events and players to access their community.',
        icon: 'fa-suitcase',
      },
      {
        title: 'Events Creation',
        subtitle:
          'Want to become a leading actor in the industry by creating your own eSports events? We can make this happen.',
        icon: 'fa-trophy',
      },
    ],
  },
  {
    name: 'for esports organisations',
    items: [
      {
        title: 'Relationship Management',
        subtitle:
          'We will assist you in all communication and interaction with your stakeholders to foster solid and long-lasting relationships.',
        icon: 'fa-users',
      },
      {
        title: 'Fundraising',
        subtitle:
          'We bring top-quality sponsors to the table to get your projects and events to the next level.',
        icon: 'fa-money',
      },
      {
        title: 'Business Development',
        subtitle:
          'We will create new strategic opportunities for you by leveraging our network and putting our experience at your service.',
        icon: 'fa-line-chart',
      },
    ],
  },
];

const What = () => (
  <SuperPage title={title} subtitle={subtitle} hasPadding>
    <Wrapper id="what" className="columns is-centered" style={{ margin: '0' }}>
      {data.map(category => (
        <Category key={category.name} className="column is-4">
          <CaTitle>{category.name}</CaTitle>
          {category.items.map(item => (
            <Item key={item.title.toString()}>
              <ItemIcon className={classNames('icon', 'is-small', 'fa', item.icon)} />
              <ItemTitle className="itemTitle">{item.title}</ItemTitle>
              <br />
              <ItemDesc className="itemDesc">{item.subtitle}</ItemDesc>
            </Item>
          ))}
        </Category>
      ))}
    </Wrapper>
  </SuperPage>
);

export default What;
